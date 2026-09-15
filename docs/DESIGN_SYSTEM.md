# DESIGN SYSTEM

## VISUAL DIRECTION
- **Keywords**: Premium, Clinical, Human, Architectural, Calm, Warm, Editorial, Precise, Modern, Trusted, Sophisticated.
- **Emotion**: Professional, established, caring, modern, expensive.

## COLOUR PALETTE (Tokens)
Derived from the existing Rundle identity but elevated.
- `--background`: Warm white (e.g., `#FAFAFA`)
- `--surface`: Crisp white (e.g., `#FFFFFF`)
- `--surface-elevated`: Soft mineral grey for depth
- `--foreground`: Deep clinical navy / almost black (e.g., `#0F172A`)
- `--muted`: Subtle grey for secondary text (e.g., `#64748B`)
- `--primary`: Premium medical blue
- `--secondary`: Controlled Rundle green
- `--accent`: Used sparingly for emphasis
- `--border`: Light grey (e.g., `#E2E8F0`)
- `--success`, `--warning`, `--danger`: Semantic colours for notices/alerts

## TYPOGRAPHY
- **Headings (Display)**: Premium editorial face (e.g., Newsreader or Instrument Serif) for large moments.
- **Body / UI (Sans-Serif)**: Highly readable modern sans-serif (e.g., Geist or Inter).
- **Scale**: Fluid `clamp()` scaling. Avoid text below 14px.

## GRAPHIC LANGUAGE
- Subtle continuous care lines.
- Medical cross geometry / stethoscope curves used abstractly.
- Soft diagnostic grids or care pathways.
- Use custom SVGs; no generic floating medical icons.

## MOTION SYSTEM
- **Library**: Framer Motion (GSAP only if necessary).
- **Behaviour**: Smooth page transitions, subtle parallax, clip-path reveals, typography stagger.
- **Constraints**: No bouncing, no meaningless blobs, respect `prefers-reduced-motion`.

## COMPONENT ARCHITECTURE
Reusable components to build out:
- `SiteHeader`, `DesktopNav`, `MobileNav`
- `AnnouncementBar` (Smart Notice System)
- `Hero`, `PageHero`
- `SectionHeader`
- `EditorialMedia`
- `ServiceCard`, `ServiceNavigator`
- `PhysicianCard`
- `TrustBar`, `LocationCard`, `HoursTable`
- `Testimonial`, `FAQAccordion`
- `AnimatedLine`, `RevealImage`
