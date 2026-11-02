# Assignmentwaly — 190-URL editorial decisions and implementation roadmap

**Prepared:** 2026-11-02  
**Scope:** 149 Blogger posts + 41 static pages = 190 public URLs  
**Branch:** `strategy/student-journey-pakistan-seo`  
**Purpose:** Turn the 190-URL editorial audit into a safe, evidence-led implementation sequence. This document is a proposed work plan, not permission to publish edits or delete/redirect URLs.

## 1. Audit completion status

| Workstream | Scope | Status |
|---|---:|---|
| Batch 01 posts | 50 posts | Content triage completed across the original high-risk report and remaining-post addendum |
| Batch 02 posts | 50 posts | Content-level triage completed |
| Batch 03 posts | 49 posts | Content-level triage completed |
| Static pages | 41 pages | All 41 fetched and reviewed |
| **Total** | **190 URLs** | **Editorial triage complete; source-level validation and live metrics gate remain** |

The archive snapshot is the source of truth for this audit. Batch 02 was reconstructed from public Blogger RSS; it is not a byte-for-byte original export. The snapshot does not include the Blogger theme, comments, private drafts, settings or binary media.

## 2. Editorial action decisions

The register assigns an editorial recommendation to every URL:

- **Improve:** 174 URLs — retain the URL for now, but correct facts, dates, programme mapping, content quality, trust, academic-integrity framing, or metadata as detailed in the batch reports.
- **Merge Candidate:** 16 URLs — compare overlap, canonical tags, inbound links and Search Console data before selecting a canonical destination. Do not delete or redirect yet.
- **Remove:** 0 URLs — no URL removal is approved at this stage.

### Merge-candidate shortlist

| Area | URLs / archive positions | Proposed action |
|---|---|---|
| Degree-attestation duplicate | Post position 6 | Compare with post position 4; retain one evidence-backed notice page only after validating the exact AIOU notice |
| Admission-guide overlap | Post positions 59 and 71 | Consolidate if both target the same admission intent; preserve the best-supported URL |
| Code 258 duplicate | Post positions 101 and 108 | Select one accurate course page after source and link review |
| Code 259 duplicate | Post positions 102 and 107 | Select one accurate course page after source and link review |
| Code 260 / ICT 260 overlap | Post positions 103 and 106 | Combine into one useful course hub unless the study guide and practice paper have genuinely distinct intent |
| Incorrect sitemap / BS page intent | Static page positions 1 and 2 | Restore sitemap URL to actual sitemap purpose; preserve BS landing page under its proper URL |
| Duplicate sitemap | Static page position 30 | Keep one functional sitemap and assess the second URL's links/canonical state |
| Guess-paper hubs | Static page positions 9 and 37 | Consolidate into one transparent guess-paper index; remove guarantees and unsupported metrics |
| Original-books hub | Static page position 38 and programme book pages 17–24 | Make one verified index linking to distinct programme-specific pages; do not duplicate entire catalogues |
| Associate Degree overlap | Static page positions 33 and 34 | Map current AD programme scope and consolidate overlapping BA/B.Com/AD intent only after programme verification |

The 16 Merge Candidate count in the CSV is URL-level and includes the individual endpoints in these duplicate groups. This shortlist describes groups, not automatic redirects.

## 3. Priority implementation sequence

### Phase 0 — Safety and trust corrections (P0)

Do these before metadata polish:

1. Remove ready-to-submit assignment sales, ghostwriting and contract-cheating language. Replace with ethical tutoring, explanation, proofreading, formatting guidance and feedback on student-authored work.
2. Remove pass/marks guarantees, fabricated tutor identities, fabricated testimonials, ratings, user counts, traffic figures and unsupported “five-year research” claims.
3. Remove unverified SMS shortcodes, fake portal subdomains, default CNIC/password instructions and invented contact details.
4. Correct misleading dates and programme-wide rules for workshops, assignment submission, exam-centre changes, roll slips, refunds and admissions.
5. Remove any public-facing examples that could expose or resemble real student identifiers. Never ask students to post CNIC, roll number, password or payment data in comments.

**Exit gate:** every high-risk operational claim is either backed by a current official AIOU notice/form or removed/reworded as unverified guidance.

### Phase 1 — Official source validation (P1)

Create a claim-to-source evidence sheet for:

- Current programme name, availability, eligibility, duration, fees and course-code mapping — use the current programme-specific AIOU prospectus.
- Assignment question papers, semester labels, deadlines and submission route — use the official AIOU Assignment QP portal and programme instructions.
- AAGHI credentials, password reset, workshop schedule and assignment upload — use current AAGHI/FAQ instructions; distinguish ODL, face-to-face and programme-specific workflows.
- Books, transcript, DMC, degree verification, refunds, correction forms, rechecking and appeals — use exact current AIOU forms and notices.
- HEC/IBCC/Foreign Office attestation — distinguish each body's role and current qualification-specific requirements.

Official starting points:
- https://www.aiou.edu.pk/prospectus
- https://www.aiou.edu.pk/assignments-qp
- https://aiou.edu.pk/guidance-help
- https://aiou.edu.pk/frequently-asked-questions-faqs
- https://aaghi.aiou.edu.pk/
- https://aiou.edu.pk/open-courses-ssc-program
- https://online.aiou.edu.pk/LIVE_SITE/examinations.asp

**Exit gate:** each time-sensitive or eligibility-related claim has a source URL, source date, checked date and the relevant programme/semester scope.

### Phase 2 — Programme and resource catalogue repair (P2)

1. Build one canonical programme index with verified programme title, current offering, prospectus link, semester and official course-code list.
2. For each resource row, record course code, official title, programme, semester, resource type, file status, rights/source and last-checked date.
3. Remove “all courses”, “all semesters”, “complete list” and “official PDF” labels unless the inventory proves those claims.
4. Check every download link and PDF manually. Confirm the file opens, matches the stated code/semester, and is lawfully shareable. Link to official AIOU-hosted PDFs where possible.
5. Repair malformed tables, corrupted Urdu/English text, placeholder buttons and dead/demo download links.

**Exit gate:** no broken/demo links; every resource has verified course and semester metadata.

### Phase 3 — URL consolidation and internal-link architecture (P3)

1. Export Search Console page/query data for at least 16 months and obtain a current URL inspection/canonical snapshot.
2. Review backlinks and internal links for each Merge Candidate group.
3. Choose a canonical URL based on existing search visibility, link equity, page quality and user intent—not title preference alone.
4. Only then plan 301 redirects where Blogger supports the required mapping; preserve old URLs when redirect behavior or evidence is uncertain.
5. Build internal links by student journey:
   - Admission → programme/prospectus → admission confirmation
   - New enrolment → books tracking → CMS/AAGHI login → tutor/workshops
   - Assignments → official question papers → writing guidance → upload instructions
   - Exam preparation → course pages → roll-number slip → result/rechecking
   - Completion → transcript → degree issuance/verification → HEC/IBCC guidance
6. Use contextual links, not repeated exact-match anchor text or sitewide keyword stuffing. Avoid doorway pages for cities/regions.

**Exit gate:** every important page has a clear parent/category, useful incoming links, relevant next step and canonical target.

### Phase 4 — Metadata and on-page SEO/GEO (P4)

After factual content and URL map are approved:

- Write unique title tags and meta descriptions that match the actual page and semester.
- Use one clear H1; organize H2/H3 around student questions and tasks.
- Add visible “Last checked” dates for time-sensitive content, with an editor/source note.
- Add breadcrumbs and structured data only where the visible page supports it; do not mark up unsupported ratings, reviews, courses or FAQs.
- Optimize image alt text descriptively; compress images and remove irrelevant banners.
- Use Pakistan-wide language only where the process is national. Do not create thin city doorway pages.
- Keep Urdu/English terminology consistent and explain acronyms at first use.
- Avoid repetitive keyword stuffing and promises of first-page rankings.

**Exit gate:** metadata, schema and headings accurately reflect final visible content.

### Phase 5 — Quality assurance and measurement (P5)

- Review mobile layout, download buttons, tables, Urdu rendering, keyboard accessibility and page speed.
- Validate canonical URLs, robots directives, sitemap coverage, redirects and internal links.
- Run structured-data validation and inspect Search Console indexing/crawl reports.
- Track clicks, impressions, CTR, average position, engagement and useful task completion by student-journey stage.
- Recheck high-risk operational pages whenever AIOU updates its calendar, prospectus, fees or portal.
- Keep a change log with editor, date, source evidence and rollback note.

## 4. Search Console / analytics gate

The previous connected Search Console attempt returned zero rows for the Assignmentwaly property. This is an unresolved connector/data-availability issue, not evidence of zero traffic.

Before merging or deleting pages, obtain:
- Search Console property access for `https://assignmentwaly.blogspot.com/`
- Page and query performance for 16 months (or the longest available period)
- Indexing/canonical data
- Backlink evidence from a reliable source
- Blogger page views only as a secondary signal, not as the sole ranking/quality measure

Until this is available, the 16 merge candidates remain candidates only.

## 5. Approval and deployment controls

- Work remains on `strategy/student-journey-pakistan-seo`.
- No live Blogger post/page/theme, DNS, production deployment or GitHub PR merge is included.
- Proposed corrections should first be prepared as reviewable drafts in the repository.
- Before any live update, present a change summary, affected URLs, source evidence, metadata changes, internal-link changes and rollback plan.
- Obtain explicit user approval before publishing, redirecting, deleting or changing the live theme.

## 6. Recommended immediate next task

Start Phase 0 with a **high-risk correction pack** for the 20 most harmful claims (ghostwriting offers, fake LMS/login instructions, invented SMS shortcodes, false admission/assignment dates, unsupported workshop rules, false fees/contact details and score guarantees). Draft changes in repository-only files for review; do not push to live Blogger until approved.
