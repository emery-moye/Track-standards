# Western Michigan — Official Women's Standards

Replace the estimated women's standards for Western Michigan with their official chart, and mark the program verified so the star badge shows.

Mapping:
- Target = Target Recruits
- Recruit = Scholarship Consideration
- Walk-on = Walk-On Consideration

## Women's standards

| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 60m | 7.65 | 7.85 | 8.05 |
| 100m | 11.80 | 12.40 | 12.80 |
| 200m | 24.80 | 25.20 | 25.60 |
| 400m | 55.90 | 57.90 | 59.00 |
| 800m | 2:12.20 | 2:15.20 | 2:18.20 |
| 1500m | 4:34.00 | 4:38.00 | 4:42.00 |
| 1600m | 4:55.00 | 5:05.00 | 5:15.00 |
| 3000m | 9:51.00 | 10:03.00 | 10:15.00 |
| 3200m | 11:00.00 | 11:30.00 | 11:59.00 |
| 5000m (XC 5k) | 18:00.00 | 18:45.00 | 19:20.00 |
| 60m Hurdles | 8.70 | 9.02 | 9.32 |
| 100m Hurdles | 14.30 | 14.75 | 15.20 |
| 300m Hurdles | 44.00 | 46.00 | 48.00 |
| 400m Hurdles | 1:01.00 | 1:03.00 | 1:05.00 |
| Long Jump | 18'11" | 18'3" | 17'5" |
| Triple Jump | 38'0" | 36'0" | - |
| High Jump | 5'4.25" | 5'2.5" | 5'1" |
| Shot Put | 44'9" | 41'9" | 38'9" |
| Discus | 148'2" | 138'2" | 128'2" |
| Javelin | 151'0" | 131'0" | 121'0" |
| Weight Throw | 54'10" | 45'10" | 42'10" |
| Hammer | 169'1" | 149'1" | 130'1" |
| Heptathlon | 4400 | 4100 | 3900 |

Triple jump walk-on is listed N/A on the chart, so that cell shows a dash.

## Technical notes

- Edit the Western Michigan entry (id `68`) in `src/data/schoolStandards.ts`.
- Replace `femaleStandards` entirely with the table above; drop Pole Vault, Mile, and 10000m (not on the official chart).
- Set `hasOfficialStandards: true` so the star appears in results and on the school page.
- Men's standards are unchanged.
