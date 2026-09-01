# LeTourneau Official Standards

Replace LeTourneau University's estimated standards with the values from the official LETU charts.

## Tier mapping
- Target = SCAC 1st place (2026)
- Recruit = SCAC 8th place (2026)
- Walk-on = LETU Team Standard

## Events (men and women)
100m, 200m, 400m, 800m, 1600m, 3200m, XC 5k, 110m/100m Hurdles, 300m Hurdles, 400m Hurdles, High Jump, Pole Vault, Long Jump, Triple Jump, Shot Put, Discus, Hammer, Javelin.

Notes on the chart data:
- 1600m/3200m rows list SCAC marks as 1500m and 3K steeple. These are different events, so the 1500m marks will be entered under 1500m and the steeple marks under 3000m Steeplechase; the 1600m/3200m rows will carry only the LETU walk-on marks (converted where needed), with target/recruit shown as "-".
- 300m Hurdles has only a LETU team standard (men 41.20s, women 52.10s) — walk-on only, target/recruit blank.
- Metric field marks are converted to feet/inches to match the site format.
- Existing events not on the chart (Mile, 10000m) are removed.

## Technical
- Edit the `id: "scac_letourneau"` entry in `src/data/schoolStandards.ts`: replace `maleStandards` and `femaleStandards`, add `hasOfficialStandards: true` for the star badge.
- Verify with a typecheck.
