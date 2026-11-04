# Assignmentwaly Plus UI Page Migration

**Audit date:** 4 November 2026  
**Repository:** nationalistacademy/Assignmentwaly  
**Theme source:** `Blogger Template/Assignmentwaly.xml` (declares Plus UI v3.7.0)  
**Scope:** All 41 tracked Blogger page fragments under `content/pages/`.

## Migration rules
- Preserve each page's existing source metadata and public permalink.
- Convert custom visual markup to verified Plus UI native components where possible.
- Remove page-level styles, scripts and inline styling when not required; preserve working image/download URLs and substantive content.
- Use topic-specific structure. Educational guides may use answer-first summaries, tables, steps and FAQs; legal/contact/sitemap pages retain their appropriate purpose and length.
- Remove unsupported statistics, claims, placeholder links and stale dates during content review.
- Verify official AIOU claims and internal page destinations before changing them.
- Work in batches on a feature branch and draft PR. No live Blogger publishing.

## Page checklist

- [x] `content/pages/about-us.html`
- [x] `content/pages/advertise.html`
- [x] `content/pages/aiou-academic-schedule.html` — removed page CSS and inline styles; native table wrappers, alerts, notes, buttons and five FAQ accordions applied.
- [x] `content/pages/aiou-ad-english-odl-solved-assignments.html`
- [x] `content/pages/aiou-ad-gender-women-studies-solved.html`
- [x] `content/pages/aiou-ad-history-odl-solved-assignments.html`
- [x] `content/pages/aiou-ad-lis-odl-solved-assignments.html`
- [x] `content/pages/aiou-admissions-and-helpdesk.html` — converted to native Plus UI components; SEO metadata and permalink preserved.
- [x] `content/pages/aiou-assignments.html`
- [x] `content/pages/aiou-autumn-2025-question-papers.html`
- [x] `content/pages/aiou-ba-bcom-original-books-pdf.html`
- [x] `content/pages/aiou-babcom-solved-assignments-spring.html`
- [x] `content/pages/aiou-bed-15-25-4-solved-assignments.html`
- [x] `content/pages/aiou-fa-icom-original-books-pdf.html`
- [x] `content/pages/aiou-faicom-solved-assignments-spring.html`
- [x] `content/pages/aiou-guess-paper.html`
- [x] `content/pages/aiou-guess-papers-2026-matric-to-master.html`
- [x] `content/pages/aiou-ma-arabic-original-books-pdf.html`
- [x] `content/pages/aiou-ma-history-original-books-pdf.html`
- [x] `content/pages/aiou-ma-history-solved-assignments.html`
- [x] `content/pages/aiou-ma-islamic-studies-original-books.html`
- [x] `content/pages/aiou-ma-urdu-original-books-pdf.html`
- [x] `content/pages/aiou-matric-download-pdf-books-original.html`
- [x] `content/pages/aiou-matric-solved-assignments-spring.html`
- [x] `content/pages/aiou-mlis-library-information-science.html`
- [x] `content/pages/aiou-mlis-original-books-pdf-download.html`
- [x] `content/pages/aiou-msc-gender-and-women-studies.html`
- [x] `content/pages/aiou-msc-mass-communication-solved.html`
- [x] `content/pages/aiou-msc-pakistan-studies-solved.html`
- [x] `content/pages/aiou-msc-sociology-solved-assignments.html`
- [x] `content/pages/aiou-original-books.html`
- [x] `content/pages/associate-degree-solved-assignments.html`
- [x] `content/pages/bs-solved-assignments-spring-2026-all.html`
- [x] `content/pages/careers.html`
- [x] `content/pages/contact.html`
- [x] `content/pages/disclaimer.html`
- [x] `content/pages/dmca-copyright-notice.html`
- [x] `content/pages/privacy-policy.html`
- [x] `content/pages/sitemap.html`
- [x] `content/pages/sitemap_0924605372.html`
- [x] `content/pages/terms-and-conditions.html`

## QA status
- Theme CSS selectors inspected for note, alert, table, details, blockquote, tabs, button and steps components.
- Admissions page: no `<style>`, `<script>` or inline style; six FAQ accordions; native table wrapper; SEO description 153 characters; visible H1 42 characters; approximately 1,700 words. Internal destination live-check remains pending.
- All 41 page fragments have been migrated to the verified Plus UI HTML structure. Programme/resource pages retain their course tables and available resource links; placeholder `href="#"` downloads identified in the audit were changed to plain availability text.
- Custom page-level CSS, inline styles and page scripts were removed from the 41 fragments. Tables use the Plus UI wrapper (`<div class="table primary stripped hovered"><table>...</table></div>`); FAQ/disclosure sections use native `<details>` where appropriate.
- Added page-specific H1 and SEO META PACK comments. Meta descriptions were checked for 150–160 characters; H1 titles were kept below 60 characters.
- Spring 2026 and older semester pages are marked as archive/reference material rather than current deadline guidance.
- Rewrote About, Careers and Advertise pages to remove unsupported audience, staffing, availability, pricing, impression and performance claims.
- Replaced the raw XML content of `sitemap.html` with a human-readable navigation page. The separate Blogger `sitemap.xml` remains the XML sitemap.
- The page formerly named Careers contained an assignment-key template and has been rewritten as a careers/contributor information page.
- Rendered visual checks in Blogger light/dark and mobile modes: not yet performed.
- Internal links and retained Google Drive/Blogger image destinations have not all been live-opened; run link validation before publishing.
- Download targets were preserved where present, but file availability and permissions have not been independently confirmed.
- Live Blogger publication: not performed.
