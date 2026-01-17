# Podcast Addition Guide

This guide explains how to add new podcast episodes to the Brand USA Agents of Change website.

## Quick Overview

To add a new podcast episode, you need to update 3 files:
1. Add episode data to the library page
2. Add detailed metadata to the podcast page
3. Create a transcript markdown file (optional but recommended)

---

## Step 1: Add to Library Page

**File**: `/src/app/library/page.tsx`

**Location**: Lines 38-146 (inside the "Conversations on AI in Tourism" category)

Add a new entry at the **TOP** of the items array (most recent first):

```typescript
{
  id: 'your-podcast-slug',  // Lowercase, hyphen-separated, unique identifier
  title: 'Podcast Name – "Episode Title"',  // Use – (en dash) to separate
  description: 'Brief description of the episode covering main topics and key takeaways.',
  url: '/podcast/your-podcast-slug',  // Internal route to podcast detail page
  externalUrl: 'https://buzzsprout.com/...',  // Original podcast URL (optional)
  icon: Podcast,  // Don't change this
  date: 'Month DD, YYYY',  // e.g., 'April 23, 2025'
  isInternal: true,  // Always true for hosted episodes
},
```

### Example:
```typescript
{
  id: 'fandom-unpacked-ai-live-entertainment',
  title: 'Fandom Unpacked – "AI\'s Impact on Live Entertainment: Unpacking the Business Effects on Sports, Arts, and Ticketed Events"',
  description: 'Discussion on how AI is transforming live entertainment discovery and fan experiences, covering AI-powered recommendations, tools like ChatGPT and Claude, and best practices for marketers integrating AI safely while maintaining authenticity.',
  url: '/podcast/fandom-unpacked-ai-live-entertainment',
  externalUrl: 'https://www.buzzsprout.com/2449648/episodes/17030825...',
  icon: Podcast,
  date: 'April 23, 2025',
  isInternal: true,
},
```

---

## Step 2: Add Podcast Metadata

**File**: `/src/app/podcast/[id]/page.tsx`

**Location**: Lines 8-50 (inside the `podcastData` object)

Add a new entry using the **same ID** from Step 1:

```typescript
'your-podcast-slug': {
  id: 'your-podcast-slug',  // MUST match the ID from Step 1
  title: 'Full Episode Title',
  podcastName: 'Podcast Show Name',
  season: 1,  // Season number
  episode: 9,  // Episode number
  publishDate: 'Month DD, YYYY',
  hosts: ['Host Name 1', 'Host Name 2'],  // Array of host names
  guests: ['Janette Roush'],  // Array of guest names
  description: 'Full episode description...',
  audioUrl: 'https://www.buzzsprout.com/.../episode.mp3',  // Direct MP3 URL
  buzzsproutEmbedUrl: 'https://www.buzzsprout.com/showid/episodes/episodeid',  // Embed URL
  thumbnailUrl: '',  // Optional: episode artwork URL
  duration: '42 min',  // Optional: episode length
  topics: [
    'Topic 1',
    'Topic 2',
    'Topic 3',
  ],
  relatedResources: [
    {
      name: 'Resource Name',
      description: 'Brief description',
      url: 'https://example.com'
    },
  ]
},
```

### Finding the Buzzsprout URLs:

**From a Buzzsprout page like:**
`https://www.buzzsprout.com/2449648/episodes/17030825-episode-title`

Extract:
- **Show ID**: `2449648`
- **Episode ID**: `17030825`

Then construct:
- **buzzsproutEmbedUrl**: `https://www.buzzsprout.com/2449648/episodes/17030825`
- **audioUrl**: `https://www.buzzsprout.com/2449648/17030825-episode-title.mp3`

---

## Step 3: Create Transcript File

**File**: `/public/transcripts/podcasts/your-podcast-slug.md`

**Location**: Create new file in `/public/transcripts/podcasts/` directory

### Template:

```markdown
# Podcast Name: Episode Title

**Date**: Month DD, YYYY
**Season**: 1, Episode 9
**Hosts**: Host Name 1, Host Name 2
**Guest**: Janette Roush, Title

## Episode Description

[Copy the full episode description here]

## Key Topics Discussed

- Topic 1
- Topic 2
- Topic 3

## Related Resources

- [Resource Name](https://example.com)
- [Listen on Platform](https://platform.com/episode)

---

[Full transcript text goes here when available]

*If transcript not yet available:*
*Transcript coming soon. This episode is available on Apple Podcasts, Spotify, and Amazon Music.*
```

### Notes on Transcripts:
- Markdown formatting is supported (headings, lists, links, bold, italic)
- The transcript will be displayed in a collapsible section on the podcast page
- It's okay to create the file with placeholder text and add the full transcript later
- The transcript loads asynchronously, so the page will work without it

---

## Complete Example: Adding "Marketing AI Podcast"

Let's say you want to add a new episode from the "Marketing AI Podcast":

### Step 1: Add to Library (`/src/app/library/page.tsx`)

```typescript
{
  id: 'marketing-ai-podcast-dmo-strategy',
  title: 'Marketing AI Podcast – "DMO Strategy in the Age of AI"',
  description: 'Exploring how destination marketing organizations can leverage AI for content creation, audience targeting, and ROI measurement while maintaining authentic storytelling.',
  url: '/podcast/marketing-ai-podcast-dmo-strategy',
  externalUrl: 'https://www.buzzsprout.com/1234567/episodes/8901234-dmo-strategy-ai',
  icon: Podcast,
  date: 'January 15, 2026',
  isInternal: true,
},
```

### Step 2: Add Metadata (`/src/app/podcast/[id]/page.tsx`)

```typescript
'marketing-ai-podcast-dmo-strategy': {
  id: 'marketing-ai-podcast-dmo-strategy',
  title: 'DMO Strategy in the Age of AI',
  podcastName: 'Marketing AI Podcast',
  season: 2,
  episode: 14,
  publishDate: 'January 15, 2026',
  hosts: ['Paul Roetzer'],
  guests: ['Janette Roush'],
  description: 'Exploring how destination marketing organizations can leverage AI for content creation, audience targeting, and ROI measurement while maintaining authentic storytelling. Janette shares practical examples from Brand USA and discusses the future of AI in tourism marketing.',
  audioUrl: 'https://www.buzzsprout.com/1234567/8901234-dmo-strategy-ai.mp3',
  buzzsproutEmbedUrl: 'https://www.buzzsprout.com/1234567/episodes/8901234',
  thumbnailUrl: '',
  duration: '38 min',
  topics: [
    'Destination Marketing',
    'AI Strategy',
    'Content Creation',
    'ROI Measurement',
    'Tourism Marketing',
  ],
  relatedResources: [
    {
      name: 'Marketing AI Institute',
      description: 'Learn more about AI in marketing',
      url: 'https://www.marketingaiinstitute.com'
    },
  ]
},
```

### Step 3: Create Transcript (`/public/transcripts/podcasts/marketing-ai-podcast-dmo-strategy.md`)

```markdown
# Marketing AI Podcast: DMO Strategy in the Age of AI

**Date**: January 15, 2026
**Season**: 2, Episode 14
**Host**: Paul Roetzer
**Guest**: Janette Roush, Chief AI Officer, Brand USA

## Episode Description

Exploring how destination marketing organizations can leverage AI for content creation, audience targeting, and ROI measurement while maintaining authentic storytelling.

## Key Topics Discussed

- AI in destination marketing
- Content creation workflows
- Audience targeting strategies
- ROI measurement tools
- Maintaining authentic storytelling

## Related Resources

- [Marketing AI Institute](https://www.marketingaiinstitute.com)
- [Listen on Apple Podcasts](https://podcasts.apple.com/podcast/marketing-ai)

---

*Transcript coming soon.*
```

---

## Deployment

After making these changes:

```bash
cd /Users/janetteroush/brand-usa-agents-of-change
git add -A
git commit -m "Add [Podcast Name] episode"
git push
```

Vercel will automatically deploy your changes in 2-3 minutes.

---

## Troubleshooting

### Episode not showing on library page
- Check that the `id` field matches between library and podcast data
- Verify the `isInternal: true` flag is set
- Make sure you added it to the "Conversations on AI in Tourism" category

### Podcast page shows "Not Found"
- Verify the ID in the URL matches the ID in `podcastData`
- Check for typos in the ID (must be exact match, lowercase)

### Audio player not loading
- Verify the `buzzsproutEmbedUrl` is correct
- Check that the format is: `https://www.buzzsprout.com/SHOWID/episodes/EPISODEID`

### Transcript not appearing
- Check that the markdown file exists in `/public/transcripts/podcasts/`
- Verify the filename matches the podcast ID exactly
- Make sure the file has the `.md` extension

---

## Tips for Claude (AI Assistant)

When adding podcasts in the future:
1. Always fetch the episode page first to get accurate metadata
2. Extract show ID and episode ID from the URL
3. Use the date format "Month DD, YYYY" consistently
4. Keep topic tags concise (2-3 words each)
5. Add the new episode at the TOP of the list (most recent first)
6. Commit with a clear message like: "Add [Podcast Name] episode on [topic]"

---

## File Locations Reference

| File | Purpose |
|------|---------|
| `/src/app/library/page.tsx` | Library page with podcast cards (lines 38-146) |
| `/src/app/podcast/[id]/page.tsx` | Podcast detail page with metadata (lines 8-50) |
| `/public/transcripts/podcasts/*.md` | Individual transcript files |

---

*Last Updated: January 2026*
