# Saginaw Valley State — Official Standards (Men & Women)

Replace Saginaw Valley State's (id `gliac_saginaw_valley`, GLIAC, D2) estimated standards with the official chart for both genders, and add the verified ⭐ (`hasOfficialStandards: true`).

## Tier mapping
- **Target** = Conference Podium ranking column
- **Walk-on** = Men / Women column
- **Recruit** = midpoint between target and walk-on

## Men's standards (target / recruit / walk-on)
| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 100m | 10.45 | 10.73 | 11.00 |
| 200m | 21.24 | 21.87 | 22.50 |
| 400m | 46.85 | 48.33 | 49.80 |
| 800m | 1:49.36 | 1:53.18 | 1:57.00 |
| 1600m | 4:04.75 | 4:13.88 | 4:23.00 |
| 3200m | 8:45.00 | 9:07.50 | 9:30.00 |
| 5000m (XC 5,000m) | 14:07.56 | 15:03.78 | 16:00.00 |
| 110m Hurdles | 13.76 | 14.28 | 14.80 |
| 300m Hurdles | 38.40 | 39.15 | 39.80* |
| 400m Hurdles | 53.75 | 55.38 | 57.00 |
| High Jump | 7'1.75" | 6'8.88" | 6'4" |
| Pole Vault | 16'8" | 15'4" | 14'0" |
| Long Jump | 23'9.5" | 22'7.75" | 21'6" |
| Triple Jump | 45'9.75" | 44'4.88" | 43'0" |
| Shot Put | 54'2.5" | 52'1.25" | 50'0" |
| Discus | 159'1" | 157'0.5" | 155'0" |
| Hammer | 195'6" | 172'9" | 150'0" |
| Javelin | 157'6" | 158'9" | 160'0"* |

## Women's standards (target / recruit / walk-on)
| Event | Target | Recruit | Walk-on |
|---|---|---|---|
| 100m | 11.81 | 12.16 | 12.50 |
| 200m | 24.25 | 24.98 | 25.70 |
| 400m | 55.47 | 56.74 | 58.00 |
| 800m | 2:08.90 | 2:15.45 | 2:22.00 |
| 1600m | 4:54.00 | 5:07.00 | 5:20.00 |
| 3200m | 10:14.22 | 10:59.61 | 11:45.00 |
| 5000m (XC 5,000m) | 16:31.51 | 18:00.76 | 19:30.00 |
| 100m Hurdles | 14.21 | 14.71 | 15.20 |
| 300m Hurdles | 45.00 | 46.25 | 47.50* |
| 400m Hurdles | 1:00.60 | 1:02.80 | 1:05.00 |
| High Jump | 5'6" | 5'4" | 5'2" |
| Pole Vault | 12'0" | 11'4.5" | 10'9" |
| Long Jump | 19'5.25" | 18'2.63" | 17'0" |
| Triple Jump | 38'8.25" | 36'4.13" | 34'0" |
| Shot Put | 46'1.5" | 42'0.75" | 38'0" |
| Discus | 143'0" | 129'0" | 115'0" |
| Hammer | 164'10" | 144'11" | 125'0" |
| Javelin | 123'2" | 114'1" | 105'0" |

## Notes / quirks
- *Men's 300m Hurdles podium is "-" on the chart → target derived slightly harder than walk-on (38.40).
- *Women's 300m Hurdles podium is "-" → target 45.00 derived from walk-on 47.50.
- *Men's Javelin: chart podium (157'6") is shorter than the walk-on mark (160'0") — entered as shown on the chart; flag to user.
- 3200m targets carry asterisks on the chart (8:45.00*, 10:14.22*) — values used as-is.
- XC 5,000m maps to the existing 5000m event.
- Events not on the chart are removed: 1500m, Mile, 10000m (both genders).

## Technical
- Edit `src/data/schoolStandards.ts` entry `gliac_saginaw_valley` (~lines 16606–16654); add `hasOfficialStandards: true`.
- Verify with `bunx tsgo --noEmit -p tsconfig.app.json`, then Playwright-check `/schools/saginaw-valley-state-university-track-standards` for the ⭐ and new marks.
