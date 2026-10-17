# Realtor-Go website (Next.js)

Landing page for the Realtor-Go CRM for real estate agents and mortgage loan officers.
Next.js 14 (App Router) + TypeScript. No other dependencies.

## Run it locally

1. Install Node.js 18.17 or newer.
2. In this folder: `npm install`
3. Start: `npm run dev`, then open http://localhost:3000

## Edit before going live

- `components/site.ts`: your real email and booking link (both are placeholders now).
- `components/About.tsx` and `components/Faq.tsx`: check the facts and promises (support hours, notice period).
- Pricing lives in `components/Pricing.tsx`.
- Colors are tokens at the top of `app/globals.css`. Each section is a full-width `.band` (dark), `.band-pine` or `.band-light`, and the band sets the colours its contents use.
- Fonts load through `next/font` in `app/layout.tsx`.

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: Add New → Project → import the repo. Framework is detected as Next.js; no settings needed.
3. Add your domain (realtor-go.com) under Project → Settings → Domains.

## Structure

- `app/layout.tsx`: page metadata and fonts
- `app/page.tsx`: puts the sections in order
- `components/`: one file per section. Client components: `Header` (mobile menu), `Inside` (edition tabs), `Pricing` (toggle), `Closing` (copy button), `Reveal` (scroll fade-in for any element with `data-r`)
- `components/Icons.tsx`: the inline SVG icons
