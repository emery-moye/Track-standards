# Norfolk State Official Recruiting Standards

## Goal
Replace Norfolk State University's (`meac_norfolk_state`) estimated men's and women's standards with the supplied official charts and show the verified star.

## Changes

1. **Women (chart with Target Times / Scholarship Standard / Walk-On Standard)**
   - Target Times → `target`, Scholarship Standard → `recruit`, Walk-On Standard → `walkon` (used as-is).
   - Events: 100m, 200m, 400m, 800m, 1600m, 3200m, 100m Hurdles, 300m Hurdles, 400m Hurdles, Long Jump, Triple Jump, Pole Vault, High Jump, Shot Put, Discus, Javelin, Hammer.
   - Convert metric field marks to feet/inches for consistency: SP 14.00m → 45'11", DT 50m → 164'0", JV 45m → 147'8", HT 60m → 196'10".
   - Triple Jump walk-on "11.50M" → 37'9" (metric conversion).
   - Remove off-chart events: 1500m, 3000m, 5000m, Heptathlon.

2. **Men (chart with Scholarship Standard / Walk-On Standard)**
   - Scholarship Standard → `recruit`, Walk-On Standard → `walkon`, `target` slightly harder than recruit (e.g. 100m 10.55 → 10.45).
   - Events: 100m, 200m, 400m, 800m, 1600m, 3200m, 110m Hurdles, 300m Hurdles, 400m Hurdles, Long Jump, Triple Jump, High Jump, Javelin, Shot Put, Discus, Pole Vault.
   - Use the 39" 110m hurdles row (14.05/14.35), the 12lb shot put row (58'0"/55'0"), and the 1.6kg discus row (165'0"/150'0") — the 42" hurdles, 16lb shot, and 2.0kg discus rows are college-implement variants, not separate events.
   - Remove off-chart event: 1500m.

3. **Show official status**
   - Set `hasOfficialStandards: true` so the ⭐ appears.

4. **Verify**
   - Run the type check.
   - Confirm the school page shows the star, correct event lists, chart values, and valid tier ordering (target harder than recruit harder than walk-on).

## Technical details
- Update only the `meac_norfolk_state` entry in `src/data/schoolStandards.ts` (near line 10812).
- Metric conversion: 1m = 39.3701".
