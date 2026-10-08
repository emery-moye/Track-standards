# "Are you fast enough?" bottom bar on school standards pages

## What you'll see

When you click a school in your results and land on its standards page, a bar sits fixed at the bottom of the screen the whole time you read the standards. It looks and behaves exactly like the "Free Recruitment Quiz" bar on the home page — a soft white blurred strip with a purple gradient pill button — except the button now reads **"Are you fast enough? Find out here"**. Clicking it opens the same quiz page the free recruitment quiz buttons open.

The home page keeps its existing bar, and the "Apply Now" banner and footer on the school page stay where they are.

## What changes

- One page gets the new bar: the school standards page you reach by clicking a school.
- The bar is always visible while scrolling that page, so the phrase is there whether you're at the top of the table or the bottom.
- Extra space is added under the page footer so the bar never covers the copyright line or social links.
- Nothing else is touched: home page, results table, and the school page's existing "Ready to Take the Next Step?" banner keep their current buttons and links.

## Technical details

- `src/pages/SchoolPage.tsx`: add a footer element mirroring the home bar markup in `src/pages/Index.tsx` (lines 120-131) — `fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-border/30 py-5 px-6 z-20`, `container mx-auto`, centered content, single `Button` with `bg-gradient-to-r from-primary to-purple-600 ... text-white font-bold h-12 px-8 rounded-xl shadow-lg shadow-primary/25`, label "Are you fast enough? Find out here".
- Wrap the button in an `<a href="https://app.thepreferredrecruit.com/60seconds/?utm_source=website&utm_medium=standards&utm_campaign=standardsPR" target="_blank" rel="noopener noreferrer">` — same URL and tracking tags as the home page quiz buttons.
- Add `pb-28` to the page's outer `min-h-screen bg-background` wrapper so the fixed bar clears the existing footer.
- No new components, no data changes, no changes to `src/pages/Index.tsx`.

## Verification

- Type check passes.
- Browser check on a school standards page: bar visible at the bottom without scrolling, still visible after scrolling to the footer, and the button's link points to the quiz URL.
- Check at narrow (phone) width that the label fits or wraps cleanly and the bar stays on one line.
