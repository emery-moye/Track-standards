# Samford University — Official Standards (Men's & Women's)

Replace Samford's estimated standards with their official conference-scoring charts, using:

- **Target** = 3rd place mark
- **Recruit** = 6th place mark
- **Walk-on** = the chart's listed walk-on standard (or 8th place where no walk-on mark is given)
- Mark the program as verified so the star badge appears

## Women's standards

| Event | Target (3rd) | Recruit (6th) | Walk-on |
|---|---|---|---|
| 100m | 11.69 | 11.89 | 12.00 |
| 200m | 24.00 | 24.53 | 25.00 |
| 400m | 55.55 | 56.30 | 57.50 |
| 800m | 2:09 | 2:12 | 2:15 |
| Mile | 4:48 | 4:55 | 5:05 |
| 3000m | 9:52 | 10:06 | 10:45 |
| 3000m Steeplechase | 11:03 | 11:22 | 12:20 |
| 5000m | 17:09 | 17:22 | 18:30 |
| 10000m | 38:16 | 38:45 | 40:00 |
| 100m Hurdles | 13.54 | 14.24 | 14.80 |
| 300m Hurdles | 42.40 | 42.90 | 44.00 |
| 400m Hurdles | 60.10 | 61.78 | 64.00 |
| High Jump | 5'6" | 5'5" | 5'4" |
| Pole Vault | 12'6" | 12'0" | 11'6" |
| Long Jump | 19'2" | 18'6" | 18'0" |
| Triple Jump | 39'2" | 38'0" | 37'0" |
| Shot Put | 47'0" | 45'6" | 42'0" |
| Discus | 150'0" | 146'0" | 135'0" |
| Hammer | 180'0" | 168'0" | 150'0" |
| Javelin | 150'0" | 135'0" | 120'0" |
| Heptathlon | 4600 | 4300 | 4050 |

## Men's standards

| Event | Target (3rd) | Recruit (6th) | Walk-on |
|---|---|---|---|
| 100m | 10.65 | 10.77 | 10.90 |
| 200m | 21.50 | 21.72 | 21.90 |
| 400m | 47.74 | 48.31 | 49.00 |
| 800m | 1:51 | 1:52.5 | 1:55 |
| Mile | 4:05 | 4:11 | 4:19 |
| 3000m | 8:12 | 8:28 | 9:10 |
| 3000m Steeplechase | 9:05 | 9:15 | 9:45 |
| 5000m | 14:20 | 14:35 | 15:20 |
| 10000m | 30:00 | 30:40 | 31:00 (8th — no walk-on listed) |
| 110m Hurdles | 14.04 | 14.44 | 14.75 |
| 300m Hurdles | 37.50 | 37.90 | 39.00 |
| 400m Hurdles | 53.80 | 54.78 | 56.50 |
| High Jump | 6'9" | 6'7" | 6'4" |
| Pole Vault | 17'6" | 16'0" | 14'6" |
| Long Jump | 23'9" | 23'0" | 22'0" |
| Triple Jump | 50'0" | 48'6" | 46'0" |
| Shot Put | 52'0" | 49'6" | 48'0" |
| Discus | 158'0" | 149'0" | 140'0" |
| Hammer | 190'0" | 173'0" | 155'0" |
| Javelin | 200'0" | 192'0" | 165'0" |
| Decathlon | 6700 | 6600 | 6300 (8th — no walk-on listed) |

Men's throws come from the chart's college implements (16# shot, 3K discus, 16# hammer) and are entered as listed.

## Technical notes

- Edit the `socon_samford` entry in `src/data/schoolStandards.ts`.
- Set `hasOfficialStandards: true` so the ⭐ shows in results and on the school page.
- Add `3000m` and `3000m Steeplechase` keys; keep the existing `1500m` and `1600m` entries derived from the official Mile marks (Mile minus ~2.0s for 1600m, and the standard 1500m conversion) so those searchable events stay populated.
- Drop event keys that no longer appear on the official chart.
