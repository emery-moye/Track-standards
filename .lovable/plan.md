# UNLV Official Women's Standards

Replace UNLV's estimated women's marks with the uploaded official chart and add the verified-program star.

## Tier mapping
- Target = **Target Recruits Women**
- Recruit = **Scholarship Standard Women**
- Walk-on = **Walk-On Target Standard Women**

## Events
Use the chart's women's events: 100m, 200m, 400m, 800m, 1500m, 1600m, 3000m, 3200m, 100m Hurdles, 300m Hurdles, 400m Hurdles, Long Jump, Triple Jump, High Jump, Pole Vault, Shot Put, Discus, Javelin, and Hammer.

Use the imperial field-event rows shown in the chart; the following metric rows are duplicate equivalents and will not become separate events. Remove UNLV events absent from the official chart, including Mile, 5000m, 2 Mile, 10000m, and steeplechase.

Examples:
- 100m: 11.40 / 11.60 / 11.85
- 1600m: 4:50.00 / 5:00.00 / 5:15.00
- Long Jump: 20'0" / 19'6" / 18'6"
- Hammer: 180'0" / 170'0" / 140'0"

## Technical details
- Update the `mw_unlv` women's standards in `src/data/schoolStandards.ts`.
- Set `hasOfficialStandards: true` so UNLV displays the ⭐ indicator.
- Keep UNLV women-only; do not add men's standards.
- Verify the typecheck and the UNLV page in the preview, including the star, representative marks, and removal of non-chart events.
