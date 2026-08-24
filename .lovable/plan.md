# Northwestern State — Official Standards

The `southland_nsu` entry already carries the chart's walk-on and scholarship marks (scholarship currently sits in `recruit`, walk-on in `walkon`), but the program isn't flagged as verified and the `target` tier is only a hair better than recruit. This update locks in the chart mapping, widens the target gap, and adds the star.

Note: the chart's women's 200m scholarship value reads 42.5, which is a typo; 24.5 (already in the data) is used.

## Mapping rule

- **Walk-on** = chart "Walk-On" (unchanged)
- **Recruit** = chart "Scholarship" (unchanged)
- **Target** = a clear step harder than recruit

## Men

| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 100m | 10.25 | 10.50 | 10.89 |
| 200m | 21.00 | 21.40 | 22.20 |
| 400m | 47.50 | 48.20 | 49.50 |
| 800m | 1:50.5 | 1:53.0 | 1:59.0 |
| 1600m | 4:12.0 | 4:20.0 | 4:35.0 |
| 3200m | 9:20.0 | 9:40.0 | 10:10.0 |
| 3k Steeple | 9:00.0 | 9:20.0 | 9:45.0 |
| 110m Hurdles | 13.90 | 14.30 | 14.80 |
| 300m Hurdles | 37.50 | 38.20 | 39.90 |
| 400m Hurdles | 51.80 | 52.70 | 54.80 |
| High Jump | 6'11" | 6'8" | 6'4" |
| Pole Vault | 17'6" | 16'6" | 15'6" |
| Long Jump | 24'6" | 23'6" | 22'6" |
| Triple Jump | 49'6" | 48'0" | 45'6" |
| Shot Put | 58'6" | 56'0" | 50'0" |
| Discus | 185'0" | 160'0" | 140'0" |
| Javelin | 200'0" | 190'0" | 175'0" |
| Decathlon | 6600 | 6300 | 6000 |

## Women

| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 100m | 11.55 | 11.80 | 12.30 |
| 200m | 24.00 | 24.50 | 25.50 |
| 400m | 54.40 | 55.30 | 56.06 |
| 800m | 2:11.5 | 2:15.0 | 2:25.0 |
| 1600m | 5:02.0 | 5:10.0 | 5:25.0 |
| 3200m | 10:55.0 | 11:15.0 | 11:40.0 |
| 3k Steeple | 10:10.0 | 10:35.0 | 11:15.0 |
| 100m Hurdles | 13.85 | 14.20 | 15.30 |
| 300m Hurdles | 42.50 | 43.50 | 45.50 |
| 400m Hurdles | 57.80 | 59.00 | 62.00 |
| High Jump | 5'8" | 5'6" | 5'3" |
| Pole Vault | 13'0" | 12'6" | 11'6" |
| Long Jump | 19'9" | 19'0" | 18'0" |
| Triple Jump | 40'6" | 39'0" | 37'0" |
| Shot Put | 45'0" | 43'0" | 39'0" |
| Discus | 127'0" | 120'0" | 110'0" |
| Javelin | 142'0" | 135'0" | 118'0" |
| Heptathlon | 4850 | 4600 | 4100 |

## Technical notes

- Edit the `southland_nsu` entry in `src/data/schoolStandards.ts`.
- Add `hasOfficialStandards: true` so the verified star shows.
- Normalize shorthand marks (`48'`, `10.5`, `1:53`) to the file's standard formatting.
- Men's Discus/Shot Put recruit values follow the chart (160'/56'), correcting the current inflated 176'.
