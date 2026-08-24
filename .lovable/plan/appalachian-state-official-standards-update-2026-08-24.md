# Appalachian State — Official Standards Update

Replace Appalachian State's men's and women's standards in `src/data/schoolStandards.ts` with the uploaded chart.

## Mapping rule

- **Target** = "Considered for Full Scholarship"
- **Recruit** = "Considered for Partial Scholarship"
- **Walk-on** = slightly easier than recruit (about 1.5% back on runs, one small step down on field marks)

## Men

| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 100m | 10.30 | 10.60 | 10.75 |
| 200m | 20.80 | 21.40 | 21.65 |
| 400m | 47.00 | 48.00 | 48.60 |
| 800m | 1:45.0 | 1:50.0 | 1:52.0 |
| 1600m | 4:05.0 | 4:10.0 | 4:15.0 |
| 3200m | 8:45.0 | 9:10.0 | 9:20.0 |
| 5k | 13:58.0 | 14:20.0 | 14:40.0 |
| 110m Hurdles | 13.50 | 14.20 | 14.45 |
| 300m Hurdles | 36.50 | 37.50 | 38.10 |
| 400m Hurdles | 51.00 | 53.00 | 54.00 |
| Pole Vault | 18'0" | 16'0" | 15'6" |
| High Jump | 7'0" | 6'8" | 6'6" |
| Long Jump | 25'0" | 24'0" | 23'6" |
| Triple Jump | 50'0" | 48'0" | 47'0" |
| Shot Put | 63'0" | 59'0" | 57'0" |
| Weight Throw | 70'0" | 55'9" | 53'6" |
| Discus | 190'0" | 175'0" | 168'0" |
| Javelin | 210'0" | 190'0" | 182'0" |
| Hammer | 230'0" | 210'0" | 201'0" |
| Decathlon | 7300 | 7000 | 6800 |

## Women

| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 100m | 11.30 | 11.70 | 11.85 |
| 200m | 23.20 | 24.20 | 24.50 |
| 400m | 53.00 | 55.50 | 56.20 |
| 800m | 2:04.0 | 2:12.0 | 2:15.0 |
| 1600m | 4:40.0 | 5:00.0 | 5:06.0 |
| 3200m | 10:20.0 | 10:50.0 | 11:05.0 |
| 5k | 16:50.0 | 17:50.0 | 18:15.0 |
| 100m Hurdles | 13.30 | 14.00 | 14.25 |
| 300m Hurdles | 41.00 | 43.00 | 43.75 |
| 400m Hurdles | 59.00 | 1:01.0 | 1:02.5 |
| Pole Vault | 14'0" | 13'0" | 12'6" |
| High Jump | 6'0" | 5'7" | 5'5" |
| Long Jump | 20'6" | 19'0" | 18'6" |
| Triple Jump | 41'6" | 40'0" | 39'0" |
| Shot Put | 50'0" | 45'0" | 43'0" |
| Weight Throw | 70'0" | 54'0" | 51'0" |
| Discus | 180'0" | 150'0" | 144'0" |
| Javelin | 170'0" | 130'0" | 124'0" |
| Hammer | 180'0" | 160'0" | 153'0" |
| Pentathlon | 4000 | 3500 | 3350 |
| Heptathlon | 5500 | 4800 | 4600 |

## Technical notes

- Edit the `id: "90"` entry (Appalachian State University) in `src/data/schoolStandards.ts`.
- Replace both `maleStandards` and `femaleStandards` with exactly the events above; drop events not on the chart (1500m, Mile, 5000m, 10000m) and add `1600m`, `5k`, `Weight Throw`, `Pentathlon`.
- `hasOfficialStandards` is already `true`, so the star stays.
