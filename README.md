# Brand USA Agents of Change

AI Learning Platform for Destination Marketing Organizations

## Quick Start

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.local.example` to `.env.local` and fill in your values
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

This project is designed to be deployed on Vercel:

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

## Adding Content

### Webinars
Update the `webinarData` object in `/src/app/webinar/[id]/page.tsx` with your Mux playback IDs.

### Resources
Place PDF files in the `/public/resources` directory.

## Features

- 📹 Mux video streaming with progress tracking
- 📊 User progress saved locally (Supabase integration ready)
- 📱 Fully responsive design
- 🎨 Brand USA design system
- 🔒 Partner access code protection (optional)
- 📈 Analytics ready (GA4 integration pending)
