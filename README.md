# Tanveer Fitness — Website

A clean, modern one-page website for Tanveer Fitness gym in Multan, built with Next.js (App Router), React, TypeScript, and Tailwind CSS.

## Design

- **Palette:** iron black, warm steel grey, bone/chalk white, brass, and a muted rust red — evoking iron plates and a well-run strength gym rather than a generic neon "fitness" look.
- **Type:** Big Shoulders Display (headlines) paired with Inter (body text), loaded via `next/font/google`.
- **Layout:** editorial, asymmetric sections with hairline dividers instead of rounded SaaS-style cards — a program list, a facilities grid, and a membership comparison table.
- **Graphics:** hand-built line-art SVG icons and a barbell mark (no stock photography is bundled — see "Adding real photos" below).

## Getting started

Requires Node.js 18.18 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000. The first `npm run dev` or `npm run build` needs an internet connection once, to download the Google Fonts used in `app/layout.tsx`.

To build for production and deploy (e.g. on Vercel, or any Node host):

```bash
npm run build
npm run start
```

## Editing content

- **Text & copy:** each section is its own file in `/components` (`Hero.tsx`, `Programs.tsx`, `Membership.tsx`, etc.) — edit the arrays/JSX directly.
- **Contact details & address:** search for the phone number and address strings in `Header.tsx`, `Hero.tsx`, `Location.tsx`, and `Footer.tsx`.
- **Colors & fonts:** edit the token list in `tailwind.config.ts` and the font imports in `app/layout.tsx`.
- **Pricing:** edit the `PLANS` and `ROWS` arrays in `components/Membership.tsx`.

## Adding real photos

This build uses illustration and typography instead of stock photography. To add real photos of your gym:

1. Add image files to `/public/images/`.
2. In the relevant component (e.g. `Hero.tsx` or `Facilities.tsx`), import Next's `Image` component: `import Image from "next/image"`.
3. Replace the SVG placeholder with `<Image src="/images/your-photo.jpg" alt="..." fill className="object-cover" />` inside a positioned container.

Real photos of your training floor, coaches, and members will make the site noticeably stronger — this is the one thing worth doing first.

## Map

The location section embeds a Google Maps view of the address with no API key required. If you'd like a pinned/branded map instead, replace the `iframe` `src` in `components/Location.tsx` with a Google Maps Embed API URL and your own API key.
