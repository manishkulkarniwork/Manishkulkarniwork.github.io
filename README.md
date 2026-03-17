# Manish Kulkarni — Portfolio Website

Personal portfolio for **Manish Kulkarni**, Filmmaker & Producer based in New York City.

## Files

| File | Description |
|------|-------------|
| `index.html` | Main HTML — all content, SEO meta tags, JSON-LD schema |
| `styles.css` | Full stylesheet — dark cinematic theme, responsive layout |
| `script.js` | Interactivity — mobile nav, scroll reveal, active nav, footer year |

## What was fixed / added

### HTML
- Full Open Graph + Twitter Card meta tags for social sharing previews
- JSON-LD `Person` schema for Google knowledge panel
- `<link rel="canonical">` added
- `defer` added to `<script>` tag
- `aria-expanded` on mobile nav toggle
- Hero CTA buttons (View My Work / Work With Me)
- Stats strip (40+ events, 3.5M views, 4 films, 4+ years)
- Placeholder work card replaced — social content card removed cleanly
- Empty `<footer>` replaced with copyright year + back-to-top link
- Stray broken `[]()` link at bottom of body removed
- `Evolve Pictures LLC` linked to YouTube channel
- Contact form added (name, email, message)
- "Or reach me directly" divider before email
- Recognition section expanded with proper badge layout
- Play badge overlays added on all work thumbnails
- `·` separators in skills ticker

### CSS
- Full dark cinematic design system with CSS custom properties
- Sticky header with blur backdrop
- Animated mobile hamburger menu (3-bar → X)
- Smooth underline hover on nav links
- Stats strip grid
- Work: featured item + 2×2 grid below
- Play badge on thumbnails
- Service cards with emoji icons
- Process steps with large serif numbers
- Recognition item card layout
- Contact form styling
- Scroll-reveal animation class (`.reveal` / `.is-visible`)
- Accessible `:focus-visible` ring
- Custom scrollbar
- Fully responsive at 768px, 680px, 640px, 460px breakpoints

### JavaScript
- Mobile nav open/close with `aria-expanded` toggle
- Close nav on link click or outside click
- Sticky header border intensifies on scroll
- Active nav link highlighting via `IntersectionObserver`
- Scroll-reveal for all major sections and cards
- Contact form submit feedback (button state)
- Auto-updating footer copyright year

## Setup

No build step needed. Just serve the three files:

```
index.html
styles.css
script.js
```

Open `index.html` in any browser or deploy to any static host (Netlify, Vercel, GitHub Pages).

## Recommended next steps

1. Replace `https://manishkulkarni.com` in canonical + OG tags with your actual domain
2. Add a real `og:image` (1200×630 jpg) for link preview cards
3. Add a `favicon.ico` / `apple-touch-icon.png`
4. Consider Netlify Forms or Formspree to make the contact form fully functional without a backend
5. Add Google Analytics or Plausible for traffic tracking
