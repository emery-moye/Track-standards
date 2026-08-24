# Eastern Michigan — Official Standards

Replace the estimated standards for `mac_eastern_michigan` in `src/data/schoolStandards.ts` with the chart marks and add the verified star.

## Mapping
- Target = "Target Recruits"
- Recruit = "Scholarship Standard"
- Walk-on = "Invited Walk-On"

Where the chart lists two implement weights, the high-school implement is used (110mH 39", Shot 12lb, Discus 1.6kg, Hammer 12lb, Weight 35lb men / HS weight women). Metric marks converted to feet/inches.

## Men

| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 100m | 10.40 | 10.55 | 10.70 |
| 200m | 20.75 | 21.25 | 21.50 |
| 400m | 46.80 | 47.75 | 48.50 |
| 800m | 1:50.50 | 1:51.50 | 1:52.50 |
| 1500m | 3:48.00 | 3:51.00 | 3:57.00 |
| Mile | 4:04.00 | 4:08.00 | 4:16.00 |
| 3000m | 8:20.00 | 8:35.00 | 8:45.00 |
| 3200m | 8:55.00 | 9:12.00 | 9:24.00 |
| 5000m | 14:20.00 | 14:40.00 | 15:05.00 |
| 110m Hurdles | 13.60 | 13.90 | 14.10 |
| 300m Hurdles | 36.50 | 37.70 | 38.50 |
| 400m Hurdles | 51.50 | 53.50 | 54.50 |
| High Jump | 6'11.5" | 6'8.75" | 6'5.5" |
| Pole Vault | 17'2.75" | 16'4.75" | 15'1" |
| Long Jump | 24'7.25" | 23'9.5" | 23'3.5" |
| Triple Jump | 50'10.25" | 49'2.5" | 47'7" |
| Shot Put | 67'3.25" | 63'4" | 59'0.75" |
| Discus | 223'1" | 190'3" | 180'5" |
| Hammer | 209'11" | 200'1" | 190'3" |
| Javelin | 214'10" | 196'10" | 182'1" |
| Weight Throw | 62'4" | 60'8.5" | 56'9" |
| Decathlon | 7200 | 6600 | 6000 |

## Women

| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 100m | 11.65 | 11.80 | 12.00 |
| 200m | 23.85 | 24.30 | 24.50 |
| 400m | 54.50 | 55.50 | 56.50 |
| 800m | 2:09.50 | 2:12.00 | 2:14.50 |
| 1500m | 4:26.50 | 4:31.50 | 4:42.00 |
| Mile | 4:48.00 | 4:53.00 | 5:05.00 |
| 3000m | 9:45.00 | 10:00.00 | 10:25.00 |
| 3200m | 10:25.00 | 10:40.00 | 11:05.00 |
| 5000m | 16:45.00 | 17:05.00 | 17:50.00 |
| 100m Hurdles | 13.70 | 13.90 | 14.10 |
| 300m Hurdles | 42.00 | 43.50 | 44.50 |
| 400m Hurdles | 60.00 | 62.25 | 63.50 |
| High Jump | 5'8.75" | 5'7" | 5'5" |
| Pole Vault | 13'1.5" | 12'3.5" | 11'9.75" |
| Long Jump | 19'8.25" | 19'0.5" | 18'6.5" |
| Triple Jump | 41'0.25" | 39'8.5" | 38'6.75" |
| Shot Put | 50'10.25" | 48'2.75" | 45'7.25" |
| Discus | 164'0" | 154'2" | 144'4" |
| Javelin | 147'8" | 131'3" | 124'8" |
| Hammer | 189'5" | 177'2" | 164'0" |
| Weight Throw | 57'5" | 54'1.5" | 49'2.5" |
| Heptathlon | 5350 | 5000 | 4600 |

## Technical notes
- Edit the `mac_eastern_michigan` entry; replace both `maleStandards` and `femaleStandards` entirely.
- Set `hasOfficialStandards: true` for the star badge.
- Events not on the chart (10000m) are dropped.
