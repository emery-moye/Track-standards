# TCU — Official Standards

Replace the current estimated standards for `texas-christian-university` with the chart marks, and add the verified star.

## Mapping rule
- **Walk-on** = "High School Walk-on Standard"
- **Recruit** = "High School Scholarship Consideration"
- **Target** = "Transfer Scholarship Consideration"

Metric marks are converted to the file's feet/inches format. Transfer distance rows are listed at 1500m/3000m; those are converted to 1600m/3200m (x1.0667) so each event has all three tiers. Events with no high-school marks (3000ST, 10,000m) show a target only. Cross-country rows are omitted.

## Men

| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 100m | 10.30 | 10.40 | 10.50 |
| 200m | 20.80 | 21.20 | 21.50 |
| 400m | 46.50 | 47.10 | 47.60 |
| 800m | 1:48.60 | 1:49.80 | 1:51.50 |
| 1600m | 3:58.40 | 4:11.00 | 4:15.00 |
| 3200m | 8:30.10 | 9:10.00 | 9:15.00 |
| 3000m Steeple | 9:08.50 | - | - |
| 5000m | 13:50.30 | 14:40.00 | 15:00.00 |
| 10000m | 29:05.30 | - | - |
| 110m Hurdles | 13.70 | 13.70 | 14.20 |
| 300m Hurdles | - | 36.80 | 38.45 |
| 400m Hurdles | 51.00 | 51.70 | 52.70 |
| High Jump | 7'1" | 7'0.5" | 6'9" |
| Pole Vault | 17'0.75" | 16'10" | 16'4.75" |
| Long Jump | 25'1.25" | 24'9.5" | 23'11.5" |
| Triple Jump | 51'10" | 51'2" | 49'4" |
| Shot Put | 59'0.75" | 57'1.75" | 54'10" |
| Discus | 186'4" | 174'0" | 164'1.75" |
| Hammer | 213'3" | 180'0" | 174'0" |
| Javelin | 223'1" | 197'0" | 191'0" |
| Decathlon | 7450 | 6900 | 6500 |

## Women

| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 100m | 11.25 | 11.38 | 11.65 |
| 200m | 23.00 | 23.28 | 23.70 |
| 400m | 52.80 | 53.30 | 55.00 |
| 800m | 2:05.50 | 2:07.00 | 2:10.00 |
| 1600m | 4:37.40 | 4:53.00 | 4:58.00 |
| 3200m | 9:36.00 | 10:40.00 | 11:00.00 |
| 3000m Steeple | 10:26.00 | - | - |
| 5000m | 16:10.00 | 16:40.00 | 17:20.00 |
| 10000m | 33:20.00 | - | - |
| 100m Hurdles | 13.30 | 13.50 | 13.90 |
| 300m Hurdles | - | 42.75 | 43.85 |
| 400m Hurdles | 58.00 | 59.10 | 61.00 |
| High Jump | 5'11.25" | 5'9" | 5'5" |
| Pole Vault | 13'7.25" | 13'1.5" | 12'7.5" |
| Long Jump | 20'6" | 20'4.25" | 19'4.5" |
| Triple Jump | 42'6" | 41'6" | 40'6.25" |
| Shot Put | 53'7.75" | 46'1" | 44'0.75" |
| Discus | 188'8" | 187'0" | 151'0" |
| Hammer | 196'10" | 173'0.75" | 164'1.75" |
| Javelin | 164'0" | 151'0" | 145'0" |
| Heptathlon | 5700 | 5400 | 5000 |

## Technical notes
- Edit the `texas-christian-university` entry in `src/data/schoolStandards.ts`; replace both `maleStandards` and `femaleStandards`.
- Add `hasOfficialStandards: true` for the ⭐ badge.
- Missing tiers are simply omitted from the event object so the tables render "-".
