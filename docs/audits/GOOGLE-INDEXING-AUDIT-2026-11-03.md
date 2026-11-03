# Google Indexing Audit — Assignmentwaly
Date: 2026-11-03
Site: https://assignmentwaly.blogspot.com/
Search Console property: `assignmentwaly.blogspot.com` (accessible in the current Google account)

## Executive summary

The site is publicly reachable, but Google Search Console currently reports **0 indexed URLs and 182 not indexed URLs**. The strongest confirmed blocker is a homepage `noindex` directive. The About and Contact URLs are fetchable in a live URL test, but Google reports their canonical URL as the homepage, which can prevent those pages from being indexed as independent documents.

No production Blogger settings, theme, sitemap submissions, robots rules, or indexing requests were changed during this audit.

## Search Console findings

Read-only Page indexing report (2026-11-03):

| Status / reason | URLs |
|---|---:|
| Indexed | 0 |
| Excluded by `noindex` | 147 |
| Redirect error | 11 |
| Discovered — currently not crawled | 24 |
| **Not indexed total** | **182** |

Sitemap report:

| Sitemap | Status | Discovered/submitted | Notes |
|---|---|---:|---|
| `https://assignmentwaly.blogspot.com/sitemap.xml` | Success | 147 | Last downloaded 2026-10-26 in UI; connector data reports 2026-10-27 |
| `https://assignmentwaly.blogspot.com/p/sitemap.html` | Error | 0 | One sitemap error; this is an HTML page, not the XML sitemap to rely on |

The Windsor Search Console connector returned the same XML sitemap with 147 submitted and 0 indexed, no errors/warnings. Search Analytics connector rows for the last 28 days were all zero; use the Search Console UI reports as the authoritative source for this audit rather than treating the connector's zero rows as proof of no impressions/clicks.

## URL Inspection and live tests

| URL | Stored Google result | Live test (2026-11-03) | Important detail |
|---|---|---|---|
| Homepage `/` | Not indexed: excluded by noindex | Fetched successfully; noindex detected | User-declared canonical absent in stored report; live canonical is self |
| About `/p/about-us.html` | Redirect error | Fetched successfully; can be indexed | No noindex; Google live test reports canonical = homepage |
| Contact `/p/contact.html` | Redirect error | Fetched successfully; can be indexed | No noindex; Google live test reports canonical = homepage |

Public read-only crawl found HTTP 200 and readable content for homepage, About and Contact. Public `robots.txt` is accessible and contains the normal Blogger pattern: disallow `/search` and `/share-widget`, allow root, and declare the XML sitemap. The XML sitemap endpoint returns successfully.

The public crawl did not detect robots/canonical tags in its parsed output, while URL Inspection's live test detected a homepage noindex and canonical values. Treat Search Console's live test as the stronger diagnostic signal. Reconcile against the actual rendered HTML and Blogger settings before changing directives.

## Priority implementation plan

1. In Blogger **Settings → Crawlers and indexing**, inspect Custom robots header tags and per-page search visibility. The homepage must be indexable. Do not globally enable indexing for search, archive, or duplicate parameter URLs.
2. Inspect the Blogger theme's rendered head output. Ensure each static page has its own canonical URL:
   - About canonical should be `https://assignmentwaly.blogspot.com/p/about-us.html`
   - Contact canonical should be `https://assignmentwaly.blogspot.com/p/contact.html`
   - Homepage canonical should be `https://assignmentwaly.blogspot.com/`
3. Verify the 147 noindex URLs individually by type. Do not bulk-remove noindex until identifying whether any are intentional search/archive/feed/duplicate URLs.
4. Investigate the 11 redirect-error URLs from the Search Console issue detail. Keep existing permalinks; repair only proven bad internal links or redirect loops.
5. Keep the valid XML sitemap. After the canonical/noindex corrections, re-submit or refresh the XML sitemap only if Search Console requires it.
6. Run URL Inspection live tests and request indexing for the homepage, About and Contact after their directives/canonicals are corrected.
7. Monitor Page indexing validation; do not promise 100% URL coverage or instant indexing.

## Out of scope / safeguards

- No URL changes, deletions, redirects, theme uploads, robots.txt edits, sitemap removal, or Search Console settings changes were performed.
- Do not remove `/p/sitemap.html` until confirming whether anything references it; it is not the primary sitemap.
- AMP-invalid notices appeared in URL Inspection. These are a separate enhancement/compatibility issue; do not disable Blogger AMP or alter global theme code solely on this signal without a separate diagnosis.
- Indexing requests do not guarantee inclusion. Prioritize canonical, useful pages; not every known URL needs to be indexed.

## Evidence

- Search Console read-only audit and URL Inspection live tests, 2026-11-03.
- Public crawl of homepage, robots.txt, sitemap.xml, About and Contact, 2026-11-03.
- Google guidance: [Page indexing report](https://support.google.com/webmasters/answer/7440203), [URL Inspection](https://support.google.com/webmasters/answer/9012289), [Ask Google to recrawl URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl).
