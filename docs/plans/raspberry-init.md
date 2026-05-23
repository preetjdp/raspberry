# Raspberry Productions Website Plan

## Summary
- Implement the home page from Paper Page 10 only: `Website - Desktop`, `Website - Desktop - "i" hovered`, and `Website A - Mobile`.
- Keep the public route as `/`, preserve the existing Next 16 App Router structure, and use Tailwind 4 utilities for layout/styling.
- Prompt the user before adding any extra copy. Required prompt before implementation: contact email for the `mailto:` link. Optional prompt: SEO/meta description.

## Key Changes
- Assets:
  - Use `public/raspberry.svg` as the local logo/image source for the Paper `HalftoneDots` shader.
  - Use existing `app/favicon.ico` as the “Favicon light” favicon.
  - Use existing `app/opengraph-image.png` as the “OG - 4” Open Graph image.
- Structure:
  - Keep `app/page.tsx` as a Server Component wrapper.
  - Add one focused Client Component, e.g. `app/raspberry-landing.tsx`, for shaders, reduced-motion handling, and hover/focus behavior.
  - Update `app/layout.tsx` metadata/title and font setup; update `app/globals.css` only for global tokens/focus/body basics.
- Fonts:
  - Replace unused starter font treatment with `Syncopate` via `next/font/google`, exposed as a Tailwind theme variable.
  - Use the Paper typography scale: desktop title around `46px/56px`, mobile around `29px/34px`.

## Implementation Steps
1. Desktop shell:
   - Replace the starter Next content with a full-viewport black landing page.
   - Match Paper desktop composition: raspberry shader large/cropped on the left, `Raspberry`/`Productions` upper right, contact control lower right.
   - Keep stable dimensions with `min-h-[100svh]`, absolute positioning, responsive clamps, and no layout shift.

2. Background:
   - In the Client Component, import `Dithering` and `HalftoneDots` from `@paper-design/shaders-react`.
   - Use Page 10 values: `Dithering` full-screen with `shape="dots"`, `type="random"`, `size={9}`, `colorFront="#50505033"`.
   - Use `HalftoneDots` with `image="/raspberry.svg"`, `contrast={0.01}`, `grid="hex"`, `radius={2}`, `size={0.6}`, `grainSize={0.5}`, `fit="contain"`.
   - Add `aria-hidden`, `pointer-events-none`, conservative `maxPixelCount`, and reduced-motion speed `0`.

3. Foreground:
   - Render brand text as real HTML, not image text.
   - Render the contact control as a semantic `mailto:` anchor once the user supplies the email.
   - Use the Paper default info icon SVG inline, with the visible `Contact` label.
   - Use Base UI only where applicable: wrap the contact anchor in a Base UI Tooltip if showing the email on hover/focus is desired after the email is supplied; otherwise keep the anchor semantic and avoid unnecessary primitives.

4. Mobile:
   - Add Tailwind responsive classes matching the 390 x 844 Paper mobile artboard.
   - Position the raspberry shader cropped from the top, move the title to the lower middle/right, and center the contact control below it.
   - Scale the contact icon to roughly `86px` on mobile and `120px` on desktop.

5. Hover and focus states:
   - Implement the Page 10 hovered contact state by swapping the default info icon to the hovered italic `i` SVG on `hover` and `focus-visible`.
   - Use opacity transitions only, with no size changes.
   - Preserve keyboard focus styling and make the mailto target accessible with an `aria-label`.

6. Metadata:
   - Set title to `Raspberry Productions`.
   - Do not invent a description; prompt the user for SEO/meta description before adding one.
   - Rely on Next file-based metadata for `app/favicon.ico` and `app/opengraph-image.png`.

## Test Plan
- Run `bun run lint`.
- Run `bun run build`.
- Start the dev server and visually verify:
  - Desktop at `1280x832`: shader crop, brand text, contact placement, and black/dithered background match Paper Page 10.
  - Mobile at `390x844`: logo crop, title placement, and centered contact match Paper Page 10.
  - Hover/focus on Contact swaps to the hovered `i` icon without layout shift.
  - Reduced-motion mode stops shader animation.
  - `/favicon.ico` and Open Graph metadata resolve from the existing App Router metadata files.

## Assumptions
- Use Paper Page 10 only;
- The contact action is a `mailto:` link.
- The implementation must prompt the user for the actual contact email before hardcoding the link.
- Any visible copy beyond `Raspberry`, `Productions`, and `Contact` must be prompted to the user first.
