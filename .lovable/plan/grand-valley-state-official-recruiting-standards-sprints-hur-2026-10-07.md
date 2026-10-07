# Grand Valley State Official Recruiting Standards (Sprints/Hurdles)

## Goal
Apply Grand Valley State University's (`gliac_grand_valley_state`) official recruiting chart for sprints and hurdles. Use HS column as walk-on, Transfer column as recruit, and set target slightly harder than recruit. All other events (800m through throws/jumps) stay unchanged.

## Chart → tiers

### Men
| Event | Target | Recruit (Transfer) | Walk-On (HS) |
|---|---|---|---|
| 100m | 10.55 | 10.65 | 10.75 |
| 200m | 21.45 | 21.60 | 21.80 |
| 400m | 48.30 | 48.50 | 49.00 |
| 110m Hurdles | 14.20 | 14.30 | 14.50 |
| 300m Hurdles | 38.30 | 38.50 | 39.00 |
| 400m Hurdles | 53.80 | 54.00 | 55.00 |

### Women
| Event | Target | Recruit (Transfer) | Walk-On (HS) |
|---|---|---|---|
| 100m | 12.00 | 12.10 | 12.25 |
| 200m | 24.85 | 25.00 | 25.50 |
| 400m | 56.80 | 57.00 | 58.00 |
| 100m Hurdles | 14.65 | 14.80 | 15.00 |
| 300m Hurdles | 44.30 | 44.50 | 45.00 |
| 400m Hurdles | 62.80 | 63.00 | 64.00 |

Notes:
- Chart lists hurdle heights (110H 39"/42", 300H 30"/36", 100H 33", 400H 30"/36"); the app stores a single mark per tier, so the listed time at the standard height is used.
- The chart's "45.00 + 60-400" style entries (300m hurdles with a 400m split requirement) are recorded as the 300m hurdles time.

## Changes
1. In `src/data/schoolStandards.ts` (entry at lines ~16547–16595), replace the values above for men's 100m, 200m, 400m, 110m Hurdles, 300m Hurdles, 400m Hurdles and women's 100m, 200m, 400m, 100m Hurdles, 300m Hurdles, 400m Hurdles. Leave all other events untouched.
2. Set `hasOfficialStandards: true` so the verified ⭐ appears (consistent with all other chart-supplied schools).

## Verify
- Run `bunx tsgo --noEmit -p tsconfig.app.json`.
- Check the school page shows the ⭐ and the new marks, and that tier ordering stays valid (target harder than recruit harder than walk-on).
