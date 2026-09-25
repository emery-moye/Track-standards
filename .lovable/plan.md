# Columbia Official Standards (Men's & Women's)

Replace Columbia University's estimated standards with the official chart and add the star badge.

## Tier mapping
- Walk-on = "Try-Out" column
- Recruit = "Recruitment" column
- Target = slightly harder than recruit (e.g. 100m recruit 10.70 -> target 10.60)

Target step sizes: ~0.10 for 100m/short hurdles, ~0.20-0.30 for 200m/400m/300mH, ~0.50 for 400mH, 2s for 800m, 3-4s for 1600m, 8s for 3200m, 1-2" for jumps (HJ 1"), 3-6' for throws, +200-300 pts for multis.

## Events from the chart
100m, 200m, 400m, 800m, 1600m, 3200m, 110mH (men) / 100mH (women), 300mH, 400mH, Long Jump, Triple Jump, High Jump, Pole Vault, Hammer, Weight Throw, Shot Put, Discus, Javelin, Pentathlon, Decathlon (men), Heptathlon (women).

Examples: Men 100m 10.70 / 10.90 walk-on; Women 800m 2:11 / 2:14 walk-on; Men Shot Put 60'0" / 55'0" walk-on.

Existing events not on the chart (e.g. 1500m, Mile, 5000m, 10000m) will be removed so the page reflects only official marks.

## Technical
- Edit the `id: "704"` entry in `src/data/schoolStandards.ts`: replace `maleStandards` and `femaleStandards`, add `hasOfficialStandards: true`.
- Field marks written in feet/inches (e.g. 23-6 -> 23'6").
- Verify with a typecheck.
