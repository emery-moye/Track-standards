# UCCS Official Standards

Replace the auto-generated RMAC standards for University of Colorado Colorado Springs with the official UCCS scholarship chart, and mark the program verified (⭐).

## Tier mapping
- Target = Full Scholarship
- Recruit = High School Scholarship Minimum
- Walk-On = Roster Spot Minimum
- The Transfer Scholarship column is not used.

## Events covered (men and women)
100m, 200m, 400m, 400H, 100H/110H, 300H, 800m, 1600m, 3200m, Long Jump, Triple Jump, High Jump, Pole Vault, Heptathlon (W) / Decathlon (M), Shot Put, Discus, Hammer, Javelin.

Notes on reading the chart: paired rows share values (e.g. women's 200m is 23.3 full / 24.70 HS / 25.1 roster), so each event gets a single consistent mark per tier. Where a cell is blank (e.g. women's javelin HS/transfer), only the tiers with real marks are filled — the rest use "N/A" so the table renders a dash. Metric/feet marks are kept in the site's existing format (e.g. `20'6"`).

## Technical detail
UCCS is currently created inside the RMAC generator loop in `src/data/schoolStandards.ts`, which copies shared conference standards. The change adds an explicit override for `rmac_uc_colorado_springs` after that loop (or a special case within it) that sets its own `maleStandards`, `femaleStandards`, and `hasOfficialStandards: true`, so later conference-wide post-processing does not overwrite the official marks.
