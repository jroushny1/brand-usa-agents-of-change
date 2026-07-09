# AI Audit Tool — Measurement Scope (Decision Note)

_Last updated: 2026-06-10_

This note records a deliberate scope decision for the `/ai-audit` tool, prompted by a cross-reference against BCG's recommended GEO measurement baseline.

## The decision

The audit tool measures **site-readiness inputs** — whether a DMO's content is structured, fresh, crawlable, and machine-readable. It deliberately does **not** measure GEO **outcome / visibility** metrics (how a brand shows up inside LLM answers). That omission is intentional, not a backlog gap.

## Cross-reference: BCG's six GEO metrics vs. what the tool measures

Source: Ben DeStein (BCG), "Rebooked: How to Win Bookings in the Age of AI," Google Travel & Local Executive Summit Day 1, 2026-06-02.

> **INTERNAL / NDA** — BCG client research. Do not surface BCG-attributed figures in public-facing materials until confirmed as part of a publicly released BCG report.

DeStein recommended building a GEO measurement baseline on six metrics:

| BCG GEO metric | What it measures | In this tool? |
|---|---|---|
| 1. Share of voice | How often you appear in answers | No |
| 2. Position | How early you're named vs. competitors | No |
| 3. Sentiment | The model's tone about your brand | No |
| 4. Citation rate | The authority your domain holds with the model | Inputs only — Entity Graph, Schema, AI Crawlers, Freshness, and RAG Context drive citation rate, but the tool never measures actual citations in live answers |
| 5. _(cut from transcript)_ | likely referral traffic from AI | No (would be GA4, not a site auditor) |
| 6. _(cut from transcript)_ | likely conversion-linked | No |

Note: two of DeStein's six metrics were cut off in the Plaud transcript; #5/#6 are the source note's educated guess (referral / conversion), not confirmed.

## Why outcome metrics are out of scope

BCG's six metrics and this tool sit on **opposite sides of the same funnel.** BCG measures outcomes (what the LLM says about you). This tool measures readiness (whether your content is machine-readable enough to be said well) — DeStein's own "Step 4: improve findability" levers. There is zero direct overlap; the tool measures the inputs that should move citation rate without measuring citation rate itself.

Building the outcome layer (share of voice / position / sentiment) would mean querying LLMs with prompt clusters and parsing answers — the "AI-visibility tracking" category Janette has publicly characterized as a vanity metric ("like using a ruler to measure clouds"). The tool's posture is the position made concrete: **measure what you control (schema, crawlers, freshness, structure), not the snake-oil output layer.**

The eleven audit dimensions (Summary, Entity Graph, Schema, AI Crawlers, Freshness, Content Patterns, Schema Coverage, Site Hygiene, Structure, Token Stream, RAG Context) are all readiness inputs by design.

## If this is ever revisited

The defensible add — consistent with the "measure what you control" stance — would be **citation rate inputs as a score** (does the model have what it needs to cite you?), not live-answer share-of-voice tracking. Referral-from-AI and conversion belong in analytics (GA4), not in a site auditor.
