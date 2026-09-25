# Stephen F. Austin Official Standards (Men's & Women's)

Replace SFA's estimated standards with the official chart and add the star badge.

## Tier mapping
- Target = "Target Recruit"
- Recruit = "Scholarship"
- Walk-on = "Preferred Walk On"

## Events from the chart (both men and women)
100m, 200m, 400m, 800m, 1500m, 1600m, 3000m, 3200m, 5000m, 10000m, 300mH, 400mH, 110mH (men) / 100mH (women), 3000m Steeple, High Jump, Long Jump, Triple Jump, Shot Put, Discus, Javelin, Hammer, Weight Throw, Pole Vault, Decathlon (men) / Heptathlon (women).

Examples: Men's 100m 10.20 / 10.50 / 10.80; Women's 800m 2:10 / 2:14 / 2:17; Men's Shot Put 64'0" / 60'0" / 57'0".

Notes:
- The chart lists women's 3000m Steeple target/recruit/walk-on as 10:25 / 10:55 / 11:20 and men's 10000m as 29:00 / 30:00 / 30:50. Times are written in the site's usual format (e.g. 1:48.00).
- Events not on the chart (e.g. Mile) will be removed.

## Technical
- Edit the `southland_sfa` entry in `src/data/schoolStandards.ts`: replace `maleStandards` and `femaleStandards`, add `hasOfficialStandards: true`.
- Check that no Southland post-processing overwrites it; verify with a typecheck and the SFA page in the preview.
