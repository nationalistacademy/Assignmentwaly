# Assignmentwaly — Audit Reconciliation (2026-11-03)

- Site: https://assignmentwaly.blogspot.com/
- Repository branch: `strategy/student-journey-pakistan-seo`
- Editorial register: 190 URLs (149 posts, 41 static pages)
- Final editorial decisions: 173 Improve; 17 Merge Candidate
- Firecrawl job: `01a199da-7b68-7169-8baf-1a272a37e5b3` — completed, 190/190 documents, 950 credits.
- Extracted distinct internal Blogger `.html` links from crawl results: 246
- Register URLs matched in extracted links: 183/190
- Register URLs not found in extracted links: 7
- Additional internal links not in register: 63
- Duplicate URLs in CSV: 0

## Interpretation

The crawl document count is not a count of unique, indexable Blogger pages. Link extraction includes navigation and links found within page content. An absent URL in this extraction does not prove a page is offline or deindexed. Extra links may be legacy, utility, duplicate, orphaned or published pages. Validate HTTP status, canonical, robots and Blogger page/post state before changing anything.

## Register URLs not found in extracted links

- https://assignmentwaly.blogspot.com/p/sitemap_0924605372.html
- https://assignmentwaly.blogspot.com/p/aiou-guess-papers-2026-matric-to-master.html
- https://assignmentwaly.blogspot.com/p/aiou-ad-english-odl-solved-assignments.html
- https://assignmentwaly.blogspot.com/p/aiou-ad-history-odl-solved-assignments.html
- https://assignmentwaly.blogspot.com/p/aiou-ad-lis-odl-solved-assignments.html
- https://assignmentwaly.blogspot.com/p/aiou-ad-gender-women-studies-solved.html
- https://assignmentwaly.blogspot.com/p/aiou-autumn-2025-question-papers.html

## Additional URLs discovered

The crawl surfaced 63 additional internal `.html` URLs outside the editorial register. They require classification and individual validation before adding them to the editorial inventory. Do not treat this count as 63 additional published/indexable posts.

## Main audit risks

1. Remove any ready-to-submit assignment/ghostwriting/contract-cheating positioning. Keep ethical learning support that preserves student authorship.
2. Remove unsupported score guarantees, fabricated tutor identities, testimonials, ratings, user counts and research claims.
3. Verify time-sensitive AIOU dates, fees, workshop attendance, assignment routes, refunds, exam-centre rules, books dispatch and portal instructions against current official sources.
4. Verify programme, semester and course-code mapping for every resource. Test downloads and confirm reuse permissions.
5. Avoid publishing personal student identifiers or requesting sensitive student credentials in public channels.
6. Keep all 17 Merge Candidates as candidates until Search Console, canonical, backlink and internal-link evidence is reviewed.
7. Perform technical checks for canonical/robots, metadata, H1 hierarchy, internal/broken links, image alt text, structured data, mobile layout, accessibility and page speed. The crawl reconciliation does not certify these factors.

## Draft coverage

The existing Phase 0 pack contains revised sections for 28 pages (20 posts, 8 static pages), not complete replacement HTML. The other 162 URLs remain in the audit register and still need page-by-page draft work.

## Prioritized goals

- P0: complete high-risk trust, integrity and factual corrections.
- P1: verify the programme/course/resource catalogue and every file link.
- P2: obtain 16-month Search Console data, indexing/canonical evidence and backlink evidence before URL consolidation.
- P3: build student-journey navigation and contextual internal links.
- P4: polish titles, descriptions, headings, breadcrumbs and only evidence-supported schema.
- P5: test mobile/Urdu rendering, accessibility, speed, links and structured data; establish first-party measurement.

## Social media

Metricool now detects connected network records, but the brand label is `faiez_hafeez`. Social implementation remains deferred per owner instruction. No social content, schedule or publishing action is included in this audit.

## Approval boundary

Repository-only work on the feature branch. No live Blogger changes, redirects, deletions, DNS/Cloudflare updates, production deployment, tracking tags or social publishing without separate explicit approval.


## Technical crawl observations (metadata-level)

Across the 190 returned documents, the crawler reported HTTP status distribution: **173 HTTP 200** and **17 HTTP 404**. These counts include the sitemap/homepage/crawled URLs and should not be equated with the 190 editorial register rows.

Metadata availability in the returned scrape records:
- Title: 189/190
- Meta description: 172/190
- Viewport: 189/190
- Keywords: 172/190
- Open Graph title and description: 172/190 and 172/190
- Robots metadata exposed: 1/190
- Canonical field exposed by this scrape metadata: 0/190

**Interpretation:** a field not surfaced in Firecrawl metadata is not proof that the underlying HTML lacks it. Canonical and robots directives require direct HTML/head inspection before making SEO conclusions. The crawl markdown parser detected multiple top-level H1 headings on 8 documents; manually verify the actual rendered heading structure before changing templates.

### URLs returning HTTP 404 in the crawl

- https://assignmentwaly.blogspot.com/p/about.html
- https://assignmentwaly.blogspot.com/p/aiou-admissions.html
- https://assignmentwaly.blogspot.com/p/aiou-date-sheets.html
- https://assignmentwaly.blogspot.com/p/aiou-results.html
- https://assignmentwaly.blogspot.com/p/aiou-tutors.html
- https://assignmentwaly.blogspot.com/p/aiou-certificates.html
- https://assignmentwaly.blogspot.com/p/aiou-past-papers.html
- https://assignmentwaly.blogspot.com/p/aiou-international.html
- https://assignmentwaly.blogspot.com/p/career.html
- https://assignmentwaly.blogspot.com/p/payments.html
- https://assignmentwaly.blogspot.com/p/unsolved-assignments.html
- https://assignmentwaly.blogspot.com/2026/04/aiou-change-of-books-application.html
- https://assignmentwaly.blogspot.com/2026/04/aiou-undelivered-books-application.html
- https://assignmentwaly.blogspot.com/2026/04/aiou-correction-change-address.html
- https://assignmentwaly.blogspot.com/2026/04/solved-assignment-417-aiou-spring-2026.html
- https://assignmentwaly.blogspot.com/2026/04/aiou-correction-name-father-name-dob.html
- https://assignmentwaly.blogspot.com/2026/04/aiou-transcript-application-2026.html

These 404s should be checked against Blogger Pages/Posts and current internal links. If they are intentionally retired, decide whether to remove internal links or provide a relevant replacement. Do not create redirects blindly; preserve relevant backlinks and confirm URL ownership first.

### Immediate technical priorities

1. Resolve or remove internal links to confirmed 404 destinations after verifying their intended replacement.
2. Inspect all 17 404 destinations individually; some may be old URLs, renamed pages or genuinely missing content.
3. Check title/description completeness on the 18 documents where those fields were not returned; distinguish sitemap/utility documents from actual pages.
4. Inspect canonical and robots directives from raw HTML, as scrape metadata alone is inconclusive.
5. Review the homepage's navigation and placeholder menu labels, then test the live menu on mobile and desktop.
