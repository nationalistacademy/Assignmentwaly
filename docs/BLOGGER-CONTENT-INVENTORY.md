# Blogger content inventory and backup audit

**Capture date:** 2026-11-02  
**Source:** https://assignmentwaly.blogspot.com/  
**Scope:** public published Blogger posts and static pages only.

## Backup status

- **149 posts** captured from the public Atom JSON feed (102 in first feed response + 47 in the second).
- **41 static pages** captured from the public pages feed.
- All **190 entries** are preserved in four combined standalone HTML archive documents under `archive/blogger-export/`: three post batches (50, 50 and 49 entries) and one static-pages file (41 entries).
- Each archived entry preserves its original Blogger content HTML and includes source URL, title, publication/update dates, labels and author metadata in the surrounding HTML.
- [Complete URL and metadata manifest](../archive/blogger-export/manifest.json).

This archive is a public content-body snapshot, not a full Blogger account export. It does not contain theme XML, private drafts, comments, Blogger settings, page-level template chrome, or binary copies of Blogger-hosted images. Image URLs are retained in the HTML. A separate Blogger dashboard export should be kept by the owner as an additional recovery copy.

## Initial site-wide observations

1. The archive contains a broad mix of programme pages, course-code pages, admissions/helpdesk guidance, books, workshops, exam resources, student applications and legal/trust pages.
2. Many URLs are semester- or year-specific. Dates, fees, admission windows, workshop rules, books tracking details and exam procedures need an official-source check and a visible last-verified date.
3. Course-code and programme pages need a duplicate/thin-content review. Keep one useful canonical resource per genuine student intent; do not mass-delete or mass-redirect before Search Console and URL-level review.
4. Some content titles and service wording may imply ready-to-submit assignments or paid assignment writing. Reframe toward explanations, worked learning examples, feedback on student-authored drafts, proofreading, citations and formatting. Students retain authorship of assessed work.
5. Legal/trust pages must describe actual Blogger, forms, analytics, cookies, advertising and data-handling settings. Do not claim compliance, confidentiality, reviews, expert verification or security controls without evidence.
6. The About/contact/trust path, broken links, contradictory counters and unsupported service claims require priority review based on the earlier public-site audit.

## URL-level review workflow

For each row in the manifest, assign one disposition only after inspection:

- **Keep:** accurate, original, useful and current.
- **Improve:** useful intent but needs fact-checking, structure, examples, accessibility or source citations.
- **Merge:** materially overlapping intent; preserve the best URL and prepare a redirect/canonical plan for owner review.
- **Archive/noindex candidate:** obsolete or low-value but may have historical/user value; review indexing and inbound links first.
- **Remove candidate:** harmful, unlawful, misleading or irreparable; require owner approval and a redirect plan.

Do not infer indexing from sitemap inclusion. Validate Search Console indexing, clicks, impressions and queries before making URL consolidation decisions. No live Blogger changes are part of this repository task.

## Priority audit sequence

- **P0 — Trust and factual safety:** privacy/terms/about/contact accuracy; remove fabricated metrics; verify official notices and dates; remove credential-like examples or sensitive sample data; clarify academic-integrity boundaries.
- **P1 — Content quality:** inspect every URL, identify thin/duplicate/outdated pages, verify source citations and rights to PDFs/images, fix broken internal links and malformed tables.
- **P2 — Technical SEO and UX:** titles/descriptions, canonical consistency, sitemap/indexing, breadcrumbs, mobile navigation, page speed, accessibility, image alt text and structured-data validation.
- **P3 — Coverage:** fill genuine student-intent gaps with original, source-led guides and practical free tools.

**Status:** Backup captured and inventory established. The 190-page editorial/technical audit is not yet complete; per-URL dispositions remain pending review.
