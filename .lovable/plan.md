# Florida A&M Official Recruiting Standards

## Goal
Replace Florida A&M University's (id `swac_florida_am`) estimated men's and women's standards with the supplied official chart.

## Changes
1. **Map the official tiers**
   - Walk-On Standard → `walkon`
   - Partial Aid → `recruit`
   - Full Aid → `target`

2. **Match the chart's event list**
   - Men: 100m, 200m, 400m, 800m, 1500m, 3000m, 110m Hurdles, 400m Hurdles, High Jump, Long Jump, Triple Jump, Pole Vault, Discus, Shot Put, Decathlon.
   - Women: 100m, 200m, 400m, 800m, 1500m, 3000m, 5000m, 10000m, 100m Hurdles, 400m Hurdles, High Jump, Long Jump, Triple Jump, Pole Vault, Discus, Shot Put, Heptathlon.
   - Remove events not on the chart (Mile, Steeplechase, 300m Hurdles, Javelin, Hammer, 5K XC, etc.).
   - Convert metric field marks to feet/inches (e.g. men's HJ 2.21m ≈ 7'3", LJ 7.92m ≈ 26'0").
   - Full Aid is "TBD" for men's Discus/Shot Put and women's Discus/Shot Put → target shows "N/A" per the invalid-data convention.

3. **Show official status**
   - Set `hasOfficialStandards: true` so the verified star appears beside the school name.

4. **Verify**
   - Run the type check.
   - Open Florida A&M's page and confirm the star, chart-derived tiers, correct event list, and combined events.

## Technical details
- File: `src/data/schoolStandards.ts`, entry `swac_florida_am` (~line 29431).
- Keep tier ordering valid: target harder than recruit, recruit harder than walk-on.
- The uploaded charts are reference only and will not be displayed on the page.
