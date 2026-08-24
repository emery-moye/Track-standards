# Prairie View A&M — Official Men's Recruiting Standards

Update Prairie View A&M University (`swac_prairie_view_am`) in `src/data/schoolStandards.ts` with the uploaded men's standards chart and mark the program verified.

## Mapping rule

- **Target** = chart "Scholarship" mark
- **Walk-on** = chart "Walk-On" mark
- **Recruit** = midpoint between target and walk-on (slightly easier than target, slightly harder than walk-on)

## Men's standards

| Event | Target (scholarship) | Recruit (midpoint) | Walk-on |
|---|---|---|---|
| 100m | 10.40 | 10.55 | 10.70 |
| 200m | 21.20 | 21.45 | 21.70 |
| 400m | 47.50 | 48.00 | 48.50 |
| 800m | 1:53.00 | 1:55.00 | 1:57.00 |
| 110m Hurdles | 13.90 | 14.15 | 14.40 |
| 400m Hurdles | 52.00 | 53.50 | 55.00 |
| 1600m | 4:20.00 | 4:25.00 | 4:30.00 |
| 3000m | 8:40.00 | 9:02.50 | 9:25.00 |
| 3200m | 9:20.00 | 9:55.00 | 10:30.00 |
| 5K XC | 15:30.00 | 15:50.00 | 16:10.00 |
| Long Jump | 24'0" | 23'6" | 23'0" |
| Triple Jump | 48'0" | 47'6" | 47'0" |
| High Jump | 6'8" | 6'7" | 6'6" |
| Shot Put | 55'0" | 53'6" | 52'0" |
| Discus | 165'0" | 152'6" | 140'0" |

## Technical notes

- Edit the `swac_prairie_view_am` entry in `src/data/schoolStandards.ts`.
- Replace the current sparse `maleStandards` (only 1600m, 3200m, 5K XC) with the full table above.
- Use the existing event key names from the file (`100m`, `200m`, `400m`, `800m`, `1600m`, `3000m`, `3200m`, `5K XC`, `110m Hurdles`, `400m Hurdles`, `Long Jump`, `Triple Jump`, `High Jump`, `Shot Put`, `Discus`).
- Set `hasOfficialStandards: true` so the ⭐ verified badge appears in search results and on the school page.
- Leave `femaleStandards` unchanged.
