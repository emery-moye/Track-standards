# "Track Targets" still appearing

## What the live site actually serves

Verified just now by fetching the published pages:

- `https://trackandfieldstandards.com/` returns `<title>Preferred Recruit Track Standards</title>`, canonical and `og:url` of `https://trackandfieldstandards.com/`, and `og:site_name` of Preferred Recruit Track Standards.
- The old `preferred-recruit-track-standards.lovable.app` URL 302-redirects to the custom domain and serves the same corrected tags.
- A search of the whole project finds no remaining "Track Targets" string in any page, component, `index.html`, `llms.txt`, `sitemap.xml`, or `robots.txt`.

The only place the old name still exists is `README.md`, which is repo documentation and is never served to crawlers.

So nothing on the live site says "Track Targets". What is showing is Google's stored snapshot from before the fix; the title in a search result comes from the last crawl, not from the current page.

## It is showing in Microsoft Edge

Edge search results come from **Bing**, which keeps its own index and cache, completely separate from Google. Requesting indexing in Google Search Console does nothing for Bing, so Bing is still serving its old crawl of the page.

There is no code change that speeds this up — the served HTML is already correct.

## Plan

1. Clean up `README.md` so the old brand name is gone from the project entirely (cosmetic; has no effect on search results).
2. Publish, so the current corrected pages are what both crawlers fetch next.
3. In **Bing Webmaster Tools** (bing.com/webmasters), add and verify `trackandfieldstandards.com`, submit `https://trackandfieldstandards.com/sitemap.xml`, then use **URL Inspection > Request Indexing** on the homepage. Bing usually refreshes within a few days after that.
4. Keep waiting on the Google side; the Search Console request is already queued.

## Notes

- If what you are seeing is the **Edge browser tab title** rather than a search result, that is a stale local cache — hard-refresh with Ctrl+Shift+R, or clear cached files in Edge settings, and it will show the correct name immediately.
- Bing also powers DuckDuckGo, Yahoo, and Copilot answers, so fixing the Bing index corrects all of those at once.
- Neither search engine lets anyone force an instant re-crawl; requesting indexing only queues the URL.
