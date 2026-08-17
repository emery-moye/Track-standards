# "Track Targets" still appearing

## What the live site actually serves

Verified just now by fetching the published pages:

- `https://trackandfieldstandards.com/` returns `<title>Preferred Recruit Track Standards</title>`, canonical and `og:url` of `https://trackandfieldstandards.com/`, and `og:site_name` of Preferred Recruit Track Standards.
- The old `preferred-recruit-track-standards.lovable.app` URL 302-redirects to the custom domain and serves the same corrected tags.
- A search of the whole project finds no remaining "Track Targets" string in any page, component, `index.html`, `llms.txt`, `sitemap.xml`, or `robots.txt`.

The only place the old name still exists is `README.md`, which is repo documentation and is never served to crawlers.

So nothing on the live site says "Track Targets". What is showing is Google's stored snapshot from before the fix; the title in a search result comes from the last crawl, not from the current page.

## Plan

1. Clean up `README.md` so the old brand name is gone from the project entirely (cosmetic; has no effect on search results).
2. Publish, so the current corrected pages are what Google fetches on the next crawl.
3. Re-run URL Inspection on `https://trackandfieldstandards.com/` in Search Console after a few days and confirm the stored title has flipped.

## Notes

- Requesting indexing only queues the URL; Google controls the timing. Title refreshes commonly take several days to a couple of weeks after the canonical change.
- If you are seeing "Track Targets" somewhere other than a Google search result — a browser tab, a shared link preview, an AI chatbot answer, or a Bing result — tell me which one. Each of those has a separate cache and a different fix, and a browser tab showing it would mean a stale local cache rather than anything on the server.
