# SORAA Landing Page

Deep maroon/red editorial aesthetic landing page for SORAA - AI-powered matchmaking for micro-influencers and local brands.

## Features

- **Deep maroon/red theme** with brand colors
- **Bebas Neue** display font + **Inter** body font
- **Floating particles** (~60 dots drifting upward)
- **Film grain overlay** with animated noise
- **Diagonal marquee stripe** with looping text
- **Framer Motion** animations throughout
- **Responsive design** for mobile and desktop

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Framer Motion
- TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Brand Colors

- `brand.bg`: #110607 (near-black maroon)
- `brand.bg2`: #1d0a0c (gradient stop)
- `brand.maroon`: #2a0b0e (card surface)
- `brand.red`: #b43b3b (primary)
- `brand.rose`: #e25b5b (hover)
- `brand.bone`: #f6f1ea (text)
- `brand.haze`: #c9bebe (muted)

## Components

- `Particles.tsx` - Floating particle system
- `NoiseOverlay.tsx` - Film grain effect
- `MarqueeStripe.tsx` - Diagonal looping marquee
- `WaitlistForm.tsx` - Email waitlist form
- `Button.tsx` - Styled button component
- `Input.tsx` - Styled input component

## Email Integration

The waitlist form currently logs emails to the console. To integrate with your backend:

1. Update `components/WaitlistForm.tsx`
2. Replace the TODO comment with your API endpoint
3. The form sends to `joinsoraa@gmail.com`

## Deployment

Deploy to Vercel:

```bash
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.
