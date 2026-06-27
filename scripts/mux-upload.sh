#!/usr/bin/env bash
# Upload a local video file to Mux and print its playback ID.
#
# Usage:
#   scripts/mux-upload.sh "/absolute/path/to/video.mp4"
#
# Requires MUX_TOKEN_ID and MUX_TOKEN_SECRET. They are read from .env.local
# automatically, or you can export them in your shell first.
#
# The token needs "Mux Video" read+write permission
# (Mux dashboard -> Settings -> API Access Tokens).

set -euo pipefail

FILE="${1:-}"
if [[ -z "$FILE" || ! -f "$FILE" ]]; then
  echo "ERROR: pass a path to an existing video file." >&2
  echo "Usage: scripts/mux-upload.sh /path/to/video.mp4" >&2
  exit 1
fi

# Load credentials from .env.local if present.
ENV_FILE="$(cd "$(dirname "$0")/.." && pwd)/.env.local"
if [[ -f "$ENV_FILE" ]]; then
  while IFS='=' read -r key val; do
    case "$key" in
      MUX_TOKEN_ID)     MUX_TOKEN_ID="$val" ;;
      MUX_TOKEN_SECRET) MUX_TOKEN_SECRET="$val" ;;
    esac
  done < "$ENV_FILE"
fi

: "${MUX_TOKEN_ID:?Set MUX_TOKEN_ID (in .env.local or environment)}"
: "${MUX_TOKEN_SECRET:?Set MUX_TOKEN_SECRET (in .env.local or environment)}"

AUTH="${MUX_TOKEN_ID}:${MUX_TOKEN_SECRET}"
API="https://api.mux.com/video/v1"

echo "==> Creating direct upload slot..."
UPLOAD_JSON=$(curl -sf -u "$AUTH" -X POST "$API/uploads" \
  -H "Content-Type: application/json" \
  -d '{"new_asset_settings":{"playback_policy":["public"],"encoding_tier":"smart","static_renditions":[{"resolution":"highest"}]},"cors_origin":"*"}')

UPLOAD_URL=$(echo "$UPLOAD_JSON" | python3 -c 'import sys,json;print(json.load(sys.stdin)["data"]["url"])')
UPLOAD_ID=$(echo "$UPLOAD_JSON" | python3 -c 'import sys,json;print(json.load(sys.stdin)["data"]["id"])')

echo "==> Uploading file ($(du -h "$FILE" | cut -f1))... this can take several minutes."
# -T streams the file (PUT) instead of buffering it all into memory.
curl -sf -H "Content-Type: application/octet-stream" -T "$FILE" "$UPLOAD_URL"

echo "==> Waiting for Mux to attach the asset..."
ASSET_ID=""
for _ in $(seq 1 60); do
  ASSET_ID=$(curl -sf -u "$AUTH" "$API/uploads/$UPLOAD_ID" \
    | python3 -c 'import sys,json;print(json.load(sys.stdin)["data"].get("asset_id",""))')
  [[ -n "$ASSET_ID" ]] && break
  sleep 5
done
[[ -z "$ASSET_ID" ]] && { echo "ERROR: asset never attached." >&2; exit 1; }

echo "==> Asset $ASSET_ID created. Waiting for it to finish processing..."
PLAYBACK_ID=""
for _ in $(seq 1 120); do
  ASSET_JSON=$(curl -sf -u "$AUTH" "$API/assets/$ASSET_ID")
  STATUS=$(echo "$ASSET_JSON" | python3 -c 'import sys,json;print(json.load(sys.stdin)["data"]["status"])')
  if [[ "$STATUS" == "ready" ]]; then
    PLAYBACK_ID=$(echo "$ASSET_JSON" | python3 -c 'import sys,json;print(json.load(sys.stdin)["data"]["playback_ids"][0]["id"])')
    DURATION=$(echo "$ASSET_JSON" | python3 -c 'import sys,json;print(round(json.load(sys.stdin)["data"].get("duration",0)/60,1))')
    break
  fi
  if [[ "$STATUS" == "errored" ]]; then
    echo "ERROR: Mux reported the asset errored." >&2
    echo "$ASSET_JSON" >&2
    exit 1
  fi
  sleep 5
done
[[ -z "$PLAYBACK_ID" ]] && { echo "ERROR: asset not ready in time (still processing)." >&2; exit 1; }

echo ""
echo "============================================================"
echo " DONE: $(basename "$FILE")"
echo " Playback ID : $PLAYBACK_ID"
echo " Duration    : ${DURATION:-?} min"
echo " Thumbnail   : https://image.mux.com/$PLAYBACK_ID/thumbnail.png?width=800&height=450&time=10"
echo "============================================================"
