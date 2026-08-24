# Bradley University — Official Recruiting Standards

Replace Bradley's estimated standards with the uploaded chart for both men and women, mark the program verified (⭐), and derive the two faster tiers from the chart marks.

## Tier mapping

- **Walk-on** = the chart mark exactly
- **Recruit** = slightly faster/farther than walk-on
- **Target** = another step better than recruit

## Men's standards

| Event | Walk-on (chart) | Recruit | Target |
|---|---|---|---|
| 60m | 7.10 | 6.95 | 6.80 |
| 100m | 11.00 | 10.80 | 10.60 |
| 200m | 22.30 | 21.90 | 21.50 |
| 400m | 50.00 | 49.00 | 48.00 |
| 800m | 1:55.00 | 1:52.50 | 1:50.00 |
| 1600m | 4:20.00 | 4:14.00 | 4:08.00 |
| 3200m | 9:25.00 | 9:10.00 | 8:55.00 |
| 110m Hurdles | 14.70 | 14.40 | 14.10 |
| 300m Hurdles | 39.00 | 38.20 | 37.40 |
| 400m Hurdles | 56.00 | 54.50 | 53.00 |
| 3 Mile (XC) | 14:50 | 14:30 | 14:10 |
| 5000m (XC 5K) | 15:40 | 15:15 | 14:50 |
| Long Jump | 21'10" | 22'8" | 23'6" |
| Triple Jump | 45'0" | 46'6" | 48'0" |

## Women's standards

| Event | Walk-on (chart) | Recruit | Target |
|---|---|---|---|
| 60m | 7.90 | 7.75 | 7.60 |
| 100m | 12.30 | 12.10 | 11.90 |
| 200m | 25.30 | 24.90 | 24.50 |
| 400m | 58.50 | 57.50 | 56.50 |
| 800m | 2:15.00 | 2:12.00 | 2:09.00 |
| 1600m | 5:10.00 | 5:03.00 | 4:56.00 |
| 3200m | 11:05.00 | 10:50.00 | 10:35.00 |
| 100m Hurdles | 14.50 | 14.20 | 13.90 |
| 300m Hurdles | 45.00 | 44.00 | 43.00 |
| 400m Hurdles | 1:04.50 | 1:02.80 | 1:01.10 |
| 3 Mile (XC) | 17:50 | 17:25 | 17:00 |
| 5000m (XC 5K) | 18:30 | 18:05 | 17:40 |
| Long Jump | 18'0" | 18'9" | 19'6" |
| Triple Jump | 37'0" | 38'3" | 39'6" |

## Technical notes

- Edit the `mvc-7` (Bradley University) entry in `src/data/schoolStandards.ts`.
- Replace `maleStandards` and `femaleStandards` with the tables above; drop events not on the chart (1500m, Mile, 10000m, High Jump, Pole Vault, Shot Put, Discus, Hammer, Javelin).
- The chart's 5K (XC) maps to the existing `5000m` key so that event stays searchable; the 3-Mile mark is added as a `3 Mile (XC)` key.
- Set `hasOfficialStandards: true` so the ⭐ appears in search results and on the school page.
