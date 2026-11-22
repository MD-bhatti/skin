# Project memory

## Product intent & audience

- **Aura Aesthetics & Skin Studio** — a luxury aesthetics, laser & skin clinic website.
- Audience: premium clients seeking clinical aesthetic treatments (HydraFacial, laser hair removal, PRP, Botox/fillers).
- Primary conversion goal: book a free skin consultation via an in-browser multi-step modal.

## Brand personality & voice

- Editorial luxury, agency-grade, clinically authoritative yet warm and inviting.
- Trust-forward messaging (4.9★ rated, FDA-approved, credentialed dermatologists).

## Visual design & UX direction

- Palette: warm ivory `#FAF8F5`, deep espresso/charcoal `#1C1917`, muted champagne gold `#B48A5A`.
- Typography: Cormorant Garamond (serif display) + Jost (sans body).
- 8px spacing system.
- Micro-interactions: hover lifts, animated underlines, shimmer gold text, fade-up entrance animations, floating trust-badge animation.
- Sections built: Hero, interactive Treatment Menu with filter tabs, draggable Before/After comparison slider, Dermatologist profile cards, multi-step Booking Modal, FAQ accordion, luxury Footer with WhatsApp CTA.
- Booking modal is a 4-step flow: treatment → date/time → name/phone → confirmation, fully client-side.
- No stock photography available (Pexels down); used CSS gradients, SVG patterns, and monogrammed portraits as placeholders. Real photos can replace gradient divs later.
- Dark espresso backdrops paired with grain texture and gold accents for footer/slider sections.

## Decisions, constraints & rationale

- All booking actions across the site route to a single in-browser booking modal (no external database) to avoid backend errors and keep the demo self-contained.
- Treatment data centralized in a data file; filter tabs swap card sets by category.
- Before/After slider implemented with pointer/touch drag comparison.
- Build and typecheck both pass clean.

## Open questions & assumptions

- Real clinic photography not yet integrated — swap gradient placeholder divs for `<img>` when assets are available.
- Pexels availability is unreliable; future image needs may require a local asset strategy or alternate source.
- Clinic contact details (address, phone, email, hours) currently placeholder — confirm real values.