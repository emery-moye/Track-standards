# Navy Official Standards (Men's & Women's)

Replace the estimated standards for United States Naval Academy (Navy) with the official chart values.

## Tier mapping
- Walk-on = "Admitted Student Roster Consideration" (right column)
- Recruit = "Recruited" column
- Target = slightly harder than recruit (e.g. 100m recruit 10.70 -> target 10.60)

Target step sizes: ~0.10 for 60m/100m/short hurdles, ~0.20-0.30 for 200m/400m/300mH/400mH, 2-5s for 800m-3200m, 8-10s for 5000m/steeple, 1-2" for jumps, 3-6' for throws, +100-200 pts for multis.

## Events added per the chart
Sprints: 60m, 100m, 200m, 400m
Distance: 800m, 1600m, 3200m, 5000m, 3K Steeple
Hurdles: 110mH (men) / 100mH (women), 300mH, 400mH
Jumps: High Jump, Pole Vault, Long Jump, Triple Jump
Throws: Shot Put, Discus, Javelin, Hammer, Weight Throw
Multis: Pentathlon + Decathlon (men), Pentathlon + Heptathlon (women)

Existing events not on the chart (1500m, Mile, 10000m) will be removed so the page reflects only official marks.

## Data note
The women's chart lists 1600m as Recruited 4:57.00 and Roster Consideration 4:25.00 — the roster mark is faster than the recruited mark, which is inconsistent with every other row. This will be treated as a typo for 5:25.00 (walk-on slower than recruit). Tell me if you want it entered exactly as printed instead.

Men's Weight Throw roster value is partially covered in the image; it will be set to 51'0" based on the visible digits and the pattern of the other rows.

## Technical
- Edit the `id: "710"` entry in `src/data/schoolStandards.ts`: replace `maleStandards` and `femaleStandards`, add `hasOfficialStandards: true` for the star badge.
- Verify with a typecheck.
