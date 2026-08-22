# Cal Berkeley — Official Men's and Women's Standards

Replace UC Berkeley's estimated track and field standards with the official chart uploaded by the user, mark the program verified, and apply the requested tier mapping.

## Tier mapping

- **Walk-on** = chart's **Scholarship Consideration** column
- **Recruit** = chart's **Target** column
- **Target** = slightly better than chart's **Target** column (consistent improvement deltas by event type)

## Improvement deltas for Target tier

| Event type | Delta (track = faster, field = farther/higher) |
|---|---|
| 100m / 100m Hurdles / 110m Hurdles | -0.20s |
| 200m | -0.40s |
| 400m | -0.70s |
| 800m | -2.00s |
| 1600m | -4.00s |
| 3200m | -8.00s |
| 300m Hurdles | -0.40s |
| 400m Hurdles | -1.00s |
| High Jump | +3" |
| Pole Vault | +6" |
| Long Jump | +6" |
| Triple Jump | +1'0" |
| Shot Put | +1'0" |
| Discus | +2'0" |
| Hammer | +2'0" |
| Javelin | +2'0" |

## Men's standards to apply

| Event | Walk-on | Recruit | Target |
|---|---|---|---|
| 100m | 10.60 | 10.45 | 10.25 |
| 200m | 21.50 | 21.00 | 20.60 |
| 400m | 47.50 | 46.50 | 45.80 |
| 800m | 1:51.00 | 1:49.00 | 1:47.00 |
| 1600m | 4:08.00 | 4:05.00 | 4:01.00 |
| 3200m | 9:00.00 | 8:50.00 | 8:42.00 |
| 110m Hurdles | 13.90 | 13.60 | 13.40 |
| 300m Hurdles | 37.50 | 36.50 | 36.10 |
| 400m Hurdles | 52.00 | 51.00 | 50.00 |
| High Jump | 7'0" | 7'2" | 7'5" |
| Pole Vault | 16'6" | 17'0" | 17'6" |
| Long Jump | 24'6" | 25'6" | 26'0" |
| Triple Jump | 50'0" | 52'0" | 53'0" |
| Shot Put | 60'0" | 65'0" | 66'0" |
| Discus | 185'0" | 200'0" | 202'0" |
| Hammer | 215'0" | 225'0" | 227'0" |
| Javelin | 200'0" | 225'0" | 227'0" |

## Women's standards to apply

| Event | Walk-on | Recruit | Target |
|---|---|---|---|
| 100m | 11.70 | 11.45 | 11.25 |
| 200m | 24.00 | 23.50 | 23.10 |
| 400m | 54.50 | 53.50 | 52.80 |
| 800m | 2:10.00 | 2:06.00 | 2:04.00 |
| 1600m | 4:50.00 | 4:45.00 | 4:41.00 |
| 3200m | 10:20.00 | 10:10.00 | 10:02.00 |
| 100m Hurdles | 13.90 | 13.50 | 13.30 |
| 300m Hurdles | 42.50 | 41.70 | 41.30 |
| 400m Hurdles | 59.50 | 58.00 | 57.00 |
| High Jump | 5'9" | 5'11" | 6'2" |
| Pole Vault | 13'0" | 14'0" | 14'6" |
| Long Jump | 19'6" | 20'6" | 21'0" |
| Triple Jump | 40'6" | 42'6" | 43'6" |
| Shot Put | 47'0" | 50'0" | 51'0" |
| Discus | 155'0" | 165'0" | 167'0" |
| Hammer | 175'0" | 198'0" | 200'0" |
| Javelin | 150'0" | 160'0" | 162'0" |

## Events kept but not on the chart

Keep existing values for events not shown in the uploaded chart:
- 1500m
- Mile
- 5000m
- 10000m
- Decathlon (men)
- Heptathlon (women)

## Technical notes

- Edit the UC Berkeley entry (`id "50"`) in `src/data/schoolStandards.ts`.
- Set `hasOfficialStandards: true` so the star badge appears in results and on the school page.
- Use feet/inches format for all field events (jumps and throws) to match the rest of the site.
- 1600m and 3200m replace the current values for those events.
