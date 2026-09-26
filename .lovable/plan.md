# Utah Valley Official Recruiting Standards

## Goal
Replace Utah Valley University’s estimated men’s and women’s standards with the supplied official chart.

## Changes
1. **Map the official tiers**
   - Use each chart **Scholarship** mark as `recruit`.
   - Use each chart **Walk-On** mark as `walkon`.
   - Create a `target` mark slightly harder than Scholarship, using small event-appropriate improvements for races, jumps, throws, and combined events.

2. **Match the chart’s event list**
   - Add the charted events from 100m through the combined events for each gender.
   - Map `100/110mH` to women’s 100m Hurdles and men’s 110m Hurdles.
   - Include women’s Pentathlon and Heptathlon, plus men’s Heptathlon and Decathlon; omit the black/blank combined-event cells.
   - Remove Utah Valley events not shown on the chart, including 1500m, Mile, 3000m, 5000m, 2 Mile, 10000m, 400m Hurdles, and steeplechase events.

3. **Show official status**
   - Mark Utah Valley with `hasOfficialStandards: true` so the verified star appears beside the school name.

4. **Verify**
   - Confirm the project compiles.
   - Open Utah Valley’s page and verify the official star, chart-derived Recruit and Walk-On values, slightly harder Target values, correct event list, and combined events.

## Technical details
- Preserve the chart’s displayed precision and feet/inches notation.
- Keep tier ordering valid: Target harder than Recruit, and Recruit harder than Walk-On.
- The uploaded chart is reference material only and will not be displayed on the page.
