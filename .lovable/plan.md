# Hawaii Official Women's Recruiting Standards

## Goal
Replace the University of Hawaii's (`bw_hawaii`) estimated women's standards with the supplied "Scholarship Consideration" chart and show the verified star. Men unchanged (no men's data exists).

## Changes

1. **Map the tiers**
   - Scholarship Consideration mark → `recruit`.
   - `walkon` slightly easier than recruit (e.g. 100m 11.85 → 12.05).
   - `target` slightly harder than recruit (e.g. 100m 11.85 → 11.65 — the "10.65" in the request is assumed to be a typo for 11.65).
   - Step sizes: ~0.20s short sprints/hurdles, ~0.30–0.50s 200m/300mH, ~1s 400m/400mH, 2s 800m, 4–5s 1500m/1600m, 8–10s 3000m/3200m, 15–20s 5000m, 1–2" jumps (3–4" PV), 1–2' shot put, 5' other throws, +150 pts heptathlon.

2. **Match the chart's event list**
   - 100m, 200m, 400m, 800m, 1500m, 1600m, 3000m, 3200m, 5000m (chart's "5000xc" 17:45), 100m Hurdles, 300m Hurdles, 400m Hurdles, High Jump, Pole Vault, Long Jump, Triple Jump, Shot Put, Discus, Hammer, Javelin, Heptathlon.
   - Use the chart's imperial field values (HJ 5'6", PV 12'5.5", LJ 19'0", TJ 39'5", Shot 47'5", Discus 150'0", Hammer 165'0", Javelin 141'1").
   - Remove events not on the chart: Mile, 2 Mile, 10000m, 2000m/3000m Steeplechase.

3. **Show official status**
   - Set `hasOfficialStandards: true` so the ⭐ appears.

4. **Verify**
   - Run the type check.
   - Confirm the school page shows the star, the chart values, valid tier ordering (target harder than recruit harder than walk-on), and that removed events are gone.

## Technical details
- Update only the `bw_hawaii` entry in `src/data/schoolStandards.ts` (near line 28918).
- Keep tier ordering valid: target harder than recruit, recruit harder than walk-on.
