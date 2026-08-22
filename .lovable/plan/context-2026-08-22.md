Replace the Duquesne logo with the Rutgers logo in the CollegeLogoMarquee component on the home page.

## Context
- The hero marquee on the home page (src/components/CollegeLogoMarquee.tsx) scrolls a set of college logos.
- One of the entries currently shows Duquesne: `https://a.espncdn.com/i/teamlogos/ncaa/500/2184.png`.

## Change
- Replace the Duquesne entry with a Rutgers entry using the correct ESPN logo URL.
- The `alt` text should be updated from "Duquesne" to "Rutgers".

## Verification
- After the change, the home page marquee should show the Rutgers logo instead of Duquesne and continue to scroll seamlessly.