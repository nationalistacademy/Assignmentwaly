# Free Google Indexing Fix Runbook — Assignmentwaly
Updated: 2026-11-03

This runbook uses only Blogger's built-in settings, Google Search Console, public browser inspection, and GitHub. No paid crawler or automation is required.

## Confirmed live blocker
Search Console URL Inspection live test reported `noindex` on the homepage. About and Contact were fetched successfully but Google selected the homepage as canonical. Fix these before requesting indexing.

## A. Blogger built-in settings (owner action)
1. Open Blogger for the correct Assignmentwaly blog.
2. Go to **Settings → Crawlers and indexing**.
3. Inspect **Enable custom robots.txt** and **Enable custom robots header tags**. Do not change robots.txt based on guesswork.
4. Under custom robots header tags, check **Home page**. It must not have `noindex`; use `all` (or leave custom header tags disabled if not intentionally needed).
5. For **Archive and search pages**, keep `noindex` (usually `noindex, noarchive`); do not globally index internal search/archive URLs.
6. For **Default for posts and pages**, choose `all` (not `noindex`).
7. Save only after recording the existing settings and confirming the effect.
8. In **Settings → Privacy**, confirm **Visible to search engines** is enabled.

## B. Verify canonicals before changing the theme
Use a free browser and view page source for:
- `https://assignmentwaly.blogspot.com/`
- `https://assignmentwaly.blogspot.com/p/about-us.html`
- `https://assignmentwaly.blogspot.com/p/contact.html`

Each page should have exactly one canonical:
- Homepage → `https://assignmentwaly.blogspot.com/`
- About → its own About URL
- Contact → its own Contact URL

If About/Contact canonical incorrectly resolves to the homepage, inspect the live theme head includable and any duplicate canonical tags. Make a backup before uploading a theme. Do not add a second canonical tag.

## C. Google Search Console (free)
1. Open the URL-prefix property `https://assignmentwaly.blogspot.com/`.
2. Run URL Inspection → **Test Live URL** for homepage, About, Contact.
3. Only when each is indexable and canonical is correct, use **Request Indexing** for these three pages.
4. Open **Sitemaps** and keep the working `https://assignmentwaly.blogspot.com/sitemap.xml`. Do not submit `/p/sitemap.html` as an XML sitemap.
5. Open the redirect error issue and inspect each example URL. Fix only broken internal links or actual redirect loops; don't change valid Blogger permalinks.
6. Use **Validate Fix** after correcting the underlying cause.

## D. Free verification
- Inspect page source and confirm the final response has no meta robots `noindex` on indexable pages.
- Confirm one self-referencing canonical per public page.
- Confirm `robots.txt` does not disallow the homepage or important public pages.
- Check Search Console Page indexing weekly. Google indexing can take days/weeks and is not guaranteed.

## Safety
Do not globally turn on indexing for search/archive pages. Do not remove noindex from utility, search, label, archive, login or duplicate parameter URLs indiscriminately. No paid API, subscription, or credits are needed.
