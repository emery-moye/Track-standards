# Incarnate Word Official Recruiting Standards

## Goal
Replace the University of the Incarnate Word (`southland_uiw`) men’s and women’s estimates with the supplied official chart and show the verified star.

## Changes
1. **Map the official tiers**
   - Scholarship Standard → `recruit`.
   - Walk-on Standard → `walkon`.
   - Create `target` marks slightly harder than recruit while preserving valid tier order.

2. **Match the chart’s events and values**
   - Men: 100m, 200m, 400m, 110m Hurdles, 300m Hurdles, 800m, 1600m, 3200m, 5000m, Long Jump, Triple Jump, High Jump, Pole Vault, Shot Put, Discus, Javelin, Decathlon.
   - Women: 100m, 200m, 400m, 100m Hurdles, 300m Hurdles, 800m, 1600m, 3200m, 5000m, Long Jump, Triple Jump, High Jump, Pole Vault, Shot Put, Discus, Javelin, Heptathlon.
   - Remove off-chart events such as men’s 1500m, 10000m, 400m Hurdles, and Hammer.
   - Keep the chart’s TBD scholarship values for men’s Decathlon and women’s Heptathlon unavailable; retain their listed walk-on marks.

3. **Show official status**
   - Set `hasOfficialStandards: true` so the ⭐ appears.

4. **Verify**
   - Run the type check.
   - Confirm the school page shows the star, correct event lists, chart values, and properly ordered tiers.

## Technical details
- Update only the `southland_uiw` entry in `src/data/schoolStandards.ts`.
- Ensure Southland data processing does not overwrite this official entry.
