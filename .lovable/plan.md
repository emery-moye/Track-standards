# USC Official Recruiting Standards

## Goal
Update the University of Southern California men’s and women’s tables from the supplied 2025–26 official charts, using only Recruit and Target tiers.

## Changes
1. **Replace USC’s standards**
   - Set each `recruit` value to the chart’s **Considered For Athletic Aid** mark.
   - Create a `target` value slightly harder than each recruit mark, using small event-appropriate improvements for races, jumps, throws, and the women’s heptathlon.
   - Do not add the chart’s **Invited Walk-On** values or any `walkon` values, so USC has no Walk-On column.

2. **Match the official charts**
   - Men: include the 18 listed events from 100m through Pole Vault.
   - Women: include the 19 listed events from 100m through Heptathlon, including Weight Throw.
   - Remove USC events not present in the applicable chart, including Mile, 5000m, and 10000m.
   - Mark USC with `hasOfficialStandards: true` so the verified ⭐ appears.

3. **Verify**
   - Confirm the project compiles.
   - Open USC’s school page and verify both tables show the chart-derived Recruit values, slightly harder Target values, no Walk-On column, only chart-listed events, and the ⭐ indicator.

## Notes
- Metric measurements shown in parentheses are duplicate conversions; displayed field marks will use the chart’s feet-and-inches values.
- The uploaded chart images are reference material only and will not be added to the page.
