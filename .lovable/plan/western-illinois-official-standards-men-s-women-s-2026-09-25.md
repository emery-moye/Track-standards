# Western Illinois Official Standards (Men's & Women's)

Replace Western Illinois' estimated standards with the official chart and add the star badge.

## Tier mapping
- Walk-on = "Walk-on Standard" column
- Recruit = "Scholarship Standard" column
- Target = slightly harder than recruit (e.g. men's 100m recruit 10.40 -> target ~10.30)

Target steps: ~0.10 for 100m/short hurdles, ~0.20-0.30 for 200m/400m/300mH/400mH, 1-2s for 800m, 3-4s for 1600m, 6-8s for 3200m, 1-2" for jumps, 3-6' for throws, +150-250 pts for multis, ~10s for 3K/5K.

## Events from the chart

**Men:** 100m (10.40/10.70), 200m (21.50/22.00), 400m (47.80/49.00), 800m (1:54.00/1:57.00), 1600m (4:24.00/4:29.00), 3200m (9:30.00/9:50.00), 110m Hurdles (14.60/14.90), 300m Hurdles (54.00/55.00), 400m Hurdles (54.00/55.00), High Jump (6'8"/6'5"), Pole Vault (16'0"/15'0"), Long Jump (23'6"/22'0"), Triple Jump (48'0"/46'0"), Javelin (180'0"/160'0"), Decathlon (6300/5500), 3000m (14:55/15:15), 5000m (15:25/15:50).

**Women:** 100m (11.80/12.40), 200m (25.00/25.50), 400m (57.00/58.00), 800m (2:15.00/2:18.00), 1600m (5:10.00/5:20.00), 3200m (11:00.00/11:25.00), 100m Hurdles (14.50/15.00), 300m Hurdles (62.00/65.00), 400m Hurdles (62.00/65.00), High Jump (5'6"/5'4"), Pole Vault (13'0"/12'0"), Long Jump (19'0"/18'0"), Triple Jump (39'0"/38'0"), Shot Put (43'0"/40'0"), Discus (150'0"/130'0"), Hammer (160'0"/140'0"), Heptathlon (4400/3800), 3000m (18:00/18:50), 5000m (18:40/19:30).

## Notes
- Men's Shot Put, Discus, and Hammer are blank on the chart, so those events will be removed from the men's table (page shows only official marks).
- Events not on the chart (1500m, Mile, 10000m) will be removed.
- Chart "3K"/"5K" rows map to the 3000m/5000m event keys.

## Technical
- Edit the `id: "167"` entry in `src/data/schoolStandards.ts`: replace `maleStandards` and `femaleStandards`, add `hasOfficialStandards: true` for the ⭐ badge.
- Verify with a typecheck and by opening the Western Illinois page in the preview.
