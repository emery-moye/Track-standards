# Remove UC Berkeley Walk-On Tier

## Goal
Strip all walk-on standards from UC Berkeley's men's and women's data so the walk-on column is hidden on the school page, while keeping the target and recruit tiers unchanged.

## Current state
- UC Berkeley (`id: "50"`) is in `src/data/schoolStandards.ts` and has `hasOfficialStandards: true`.
- Both `maleStandards` and `femaleStandards` contain `walkon` values for nearly every event.
- The existing table components (`SchoolStandardsTable.tsx`, `SchoolDetailsModal.tsx`) already hide the walk-on column when no event has a valid walk-on value.

## Changes
1. **Data edit — `src/data/schoolStandards.ts`**
   - Remove the `walkon` property from every event in UC Berkeley's `maleStandards`.
   - Remove the `walkon` property from every event in UC Berkeley's `femaleStandards`.
   - Leave `target` and `recruit` untouched.

2. **Verification**
   - Run a build to confirm the file compiles.
   - Load `http://localhost:8080/schools/uc-berkeley-track-standards` in the preview and confirm:
     - The Walk-On column is no longer shown in either the Men's or Women's table.
     - Target and Recruit values remain visible.
     - The ⭐ verified badge is still present.

## Notes
- No UI component changes are required; the hide-when-empty behavior is already implemented.
- UC Berkeley's `hasOfficialStandards` flag stays `true` because the target and recruit tiers are still official.
