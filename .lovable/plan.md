# Homepage shows "URL is not on Google"

## What Search Console actually reports

The stored inspection for `https://trackandfieldstandards.com` is not an error state:

- Coverage: **Alternate page with proper canonical tag**
- Google-selected canonical: `https://preferred-recruit-track-standards.lovable.app/`
- Canonical declared by the page at crawl time: the same lovable.app URL
- robots: allowed, indexing: allowed, fetch: successful
- Last crawl: **2026-08-11**

So Google is not blocking the page. At the last crawl the homepage still declared the old `.lovable.app` canonical, so Google folded it into that URL and now reports the custom-domain URL as "not on Google" (the duplicate).

The site is not invisible either: over the last 28 days Search Console reports 8,034 clicks and 124,495 impressions, with school pages ranking in the top positions.

## Why the report is out of date

The canonical was corrected after that crawl. The live page now serves `<link rel="canonical" href="https://trackandfieldstandards.com/" />` and matching `og:url`, and the old lovable.app URL 302-redirects to the custom domain. Google has simply not re-crawled the homepage since.

## Plan

1. Sweep the project for any remaining `preferred-recruit-track-standards.lovable.app` references in canonical tags, Open Graph URLs, JSON-LD, `sitemap.xml`, `robots.txt`, and `llms.txt`, so no page still points Google at the old host. Fix any that are found.
2. Confirm the sitemap lists the homepage and school pages under the custom domain only.
3. Publish, so the corrected canonicals are what Google fetches next.
4. In Search Console, run URL Inspection on `https://trackandfieldstandards.com/` and click **Request Indexing**. Re-inspect after a few days; the canonical should flip to the custom domain and coverage should change from "Alternate page" to indexed.

## Notes

- No further code change is needed if step 1 finds nothing stale — this is a re-crawl timing issue, not a bug.
- Recrawl and canonical consolidation typically take a few days to a couple of weeks; requesting indexing speeds up the homepage only.
- The URL Inspection API can read Google's stored status but cannot submit an indexing request, so step 4 must be done by you in the Search Console UI.
