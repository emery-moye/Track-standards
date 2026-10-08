# Point the Free Recruitment Quiz buttons to the new /60seconds/ page

## What changes

Both quiz buttons on the home page will open the new page instead of the old quiz page:

1. The **Free Recruitment Quiz** button in the bottom bar.
2. The **Learn More** button inside the **Need Help With Recruitment?** card.

The new destination is the link you gave, with the existing tracking tags kept so traffic from this site is still credited:

`https://app.thepreferredrecruit.com/60seconds/?utm_source=website&utm_medium=standards&utm_campaign=standardsPR`

## What stays the same

- Button labels, styling, and the "opens in a new tab" behavior are unchanged.
- The school pages' **Apply Now** button keeps its own separate link — it isn't a quiz button.

## Technical details

- Both links live in `src/pages/Index.tsx` and currently share the same `href` (`.../quiz/?utm_source=website&utm_medium=standards&utm_campaign=standardsPR`): the card's "Learn More" anchor and the footer's "Free Recruitment Quiz" anchor. Both `href` values are replaced with the new URL plus the same three UTM parameters.
- `src/pages/SchoolPage.tsx` uses a different URL (`.../page_3tfle/`) for "Apply Now" and is not touched.
- After the edit: type check with `bunx tsgo --noEmit -p tsconfig.app.json`, then load the home page in the preview and confirm both buttons' links resolve to the new address.
- The stored note about the quiz button's tracking URL will be updated to the new address so future changes use it.
