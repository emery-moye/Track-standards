# UC Irvine Official Track & Field Standards

## Goal
Replace UC Irvine’s estimated men’s and women’s standards with the uploaded official chart, using each chart mark as the Walk-On tier and creating appropriately harder Recruit and Target tiers.

## Changes
1. **Update UC Irvine’s standards**
   - Replace the men’s and women’s event data in the existing UC Irvine entry (`id: "bw_uci"`).
   - Use the chart values exactly for **Walk-On**.
   - Set **Recruit** slightly harder than Walk-On and **Target** harder again, following the requested men’s 100m example: **10.40 Target / 10.60 Recruit / 10.75 Walk-On**.
   - Apply event-appropriate steps across races, hurdles, jumps, throws, and combined events so every tier progresses in the correct direction.

2. **Interpret the combined chart rows**
   - Split `1500m/1600m`, `3000m/3200m`, and `300H/400H` into separate searchable events using their respective left/right chart values.
   - Record `5000m (Woodward Park)` as the app’s `5000m` event.
   - Use the chart’s imperial feet-and-inches marks for field events.
   - Include all chart-listed events for each gender and remove UC Irvine events not represented by the official chart.

3. **Mark the program verified**
   - Set `hasOfficialStandards: true` so the official-standards star appears in search results and on UC Irvine’s standards page.

4. **Verify the result**
   - Confirm the project compiles.
   - Open UC Irvine’s standards page and verify both tables, tier ordering, chart event coverage, field-mark formatting, and the verified indicator.
   - Test a representative UC Irvine search match to confirm the new standards are used.

## Technical details
- Modify only UC Irvine’s entry in `src/data/schoolStandards.ts`.
- Time tiers get progressively faster; field and combined-event tiers get progressively higher.
- The uploaded chart remains reference material and will not be displayed on the site.
