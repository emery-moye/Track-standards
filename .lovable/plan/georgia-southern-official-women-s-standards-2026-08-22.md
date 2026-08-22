# Georgia Southern — Official Women's Standards

Replace the estimated women's standards for Georgia Southern with their official chart, and mark the program verified so the star badge shows.

Mapping:
- Target = Scholarship Consideration
- Walk-on = Preferred Walk On
- Recruit = slightly worse than target (close to target, well ahead of walk-on)

## Women's standards

| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 100m | 11.60 | 11.80 | 12.10 |
| 200m | 24.00 | 24.25 | 24.50 |
| 400m | 55.20 | 55.70 | 56.50 |
| 800m | 2:13.0 | 2:14.5 | 2:18.0 |
| 1500m | 4:45.0 | 4:48.0 | 4:55.0 |
| Mile | 5:00.0 | 5:03.0 | 5:10.0 |
| 3200m (2 mile) | 11:00.0 | 11:05.0 | 11:15.0 |
| 5000m | 18:10.0 | 18:20.0 | 18:45.0 |
| 10000m | 37:00.0 | 37:45.0 | 41:00.0 |
| 100m Hurdles | 13.80 | 14.00 | 14.80 |
| 400m Hurdles | 1:01.00 | 1:01.70 | 1:03.00 |
| High Jump | 5'6" | 5'5.5" | 5'5" |
| Long Jump | 20'2" | 19'8" | 19'2" |
| Triple Jump | 41'5" | 40'6" | 39'5" |
| Shot Put | 46'9" | 45'9" | 43'6" |
| Discus | 154'2" | 150'11" | 137'10" |
| Hammer | 177'2" | 172'3" | 157'6" |
| Javelin | 137'10" | 134'6" | 121'5" |
| Weight Throw | 59'1" | 57'5" | 52'6" |
| Heptathlon | 4900 | 4750 | 4600 |

Metric throw marks from the chart are converted to feet/inches to match the rest of the site.

## Technical notes

- Edit the Georgia Southern entry (id `98`) in `src/data/schoolStandards.ts`.
- Set `hasOfficialStandards: true` so the ⭐ appears in results and on the school page.
- Replace `femaleStandards` with the table above; drop events not on the official chart (300m Hurdles, Pole Vault) and remove the placeholder `0.00` values.
- Men's standards are unchanged.
