# Eastern Washington Official Recruiting Standards

## Goal
Replace Eastern Washington University's (id `bigsky_eastern_washington`) estimated men's and women's standards with the supplied "minimum scholarship" chart.

## Changes
1. **Map the tiers**
   - Chart mark → `recruit`.
   - `walkon` slightly easier than recruit (e.g. 100m 10.60 → 10.75).
   - `target` slightly harder than recruit (e.g. 100m 10.60 → 10.40).
   - Step sizes: ~0.15–0.20s short sprints/hurdles, ~0.40–0.50s 200m/300mH, ~0.75–1.0s 400m/400mH, 2s 800m, 4–5s 1500m/Mile, 8–10s 3000m/steeple, 15–20s 5000m, 30–45s 10000m, 2" jumps (3–4" PV/TJ/LJ), 2–3' shot put, 6–8' other throws.

2. **Match the chart's event list (both genders)**
   - 100m, 200m, 400m, 800m, 1500m, Mile, 3000m, 5000m, 10000m, 100m/110m Hurdles, 300m Hurdles, 400m Hurdles, 3000m Steeplechase, High Jump, Pole Vault, Long Jump, Triple Jump, Shot Put, Discus, Hammer, Weight Throw, Javelin.
   - Use the chart's feet/inches values (e.g. men's HJ 6'6", women's PV 12'4").
   - Remove events not on the chart (1600m, 3200m, multis, etc.).

3. **Show official status**
   - Set `hasOfficialStandards: true` so the verified star appears.

4. **Verify**
   - Run the type check and confirm the page shows the star and new marks, and that Big Sky post-processing doesn't overwrite them.

## Technical details
- File: `src/data/schoolStandards.ts`, entry near line 13273.
- Keep tier ordering valid: target harder than recruit, recruit harder than walk-on.
