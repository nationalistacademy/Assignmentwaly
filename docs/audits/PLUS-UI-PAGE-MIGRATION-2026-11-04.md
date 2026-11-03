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

- [ ] `content/pages/about-us.html`
- [ ] `content/pages/advertise.html`
- [ ] `content/pages/aiou-academic-schedule.html`
- [ ] `content/pages/aiou-ad-english-odl-solved-assignments.html`
- [ ] `content/pages/aiou-ad-gender-women-studies-solved.html`
- [ ] `content/pages/aiou-ad-history-odl-solved-assignments.html`
- [ ] `content/pages/aiou-ad-lis-odl-solved-assignments.html`
- [x] `content/pages/aiou-admissions-and-helpdesk.html` — converted to native Plus UI components; SEO metadata and permalink preserved.
- [ ] `content/pages/aiou-assignments.html`
- [ ] `content/pages/aiou-autumn-2025-question-papers.html`
- [ ] `content/pages/aiou-ba-bcom-original-books-pdf.html`
- [ ] `content/pages/aiou-babcom-solved-assignments-spring.html`
- [ ] `content/pages/aiou-bed-15-25-4-solved-assignments.html`
- [ ] `content/pages/aiou-fa-icom-original-books-pdf.html`
- [ ] `content/pages/aiou-faicom-solved-assignments-spring.html`
- [ ] `content/pages/aiou-guess-paper.html`
- [ ] `content/pages/aiou-guess-papers-2026-matric-to-master.html`
- [ ] `content/pages/aiou-ma-arabic-original-books-pdf.html`
- [ ] `content/pages/aiou-ma-history-original-books-pdf.html`
- [ ] `content/pages/aiou-ma-history-solved-assignments.html`
- [ ] `content/pages/aiou-ma-islamic-studies-original-books.html`
- [ ] `content/pages/aiou-ma-urdu-original-books-pdf.html`
- [ ] `content/pages/aiou-matric-download-pdf-books-original.html`
- [ ] `content/pages/aiou-matric-solved-assignments-spring.html`
- [ ] `content/pages/aiou-mlis-library-information-science.html`
- [ ] `content/pages/aiou-mlis-original-books-pdf-download.html`
- [ ] `content/pages/aiou-msc-gender-and-women-studies.html`
- [ ] `content/pages/aiou-msc-mass-communication-solved.html`
- [ ] `content/pages/aiou-msc-pakistan-studies-solved.html`
- [ ] `content/pages/aiou-msc-sociology-solved-assignments.html`
- [ ] `content/pages/aiou-original-books.html`
- [ ] `content/pages/associate-degree-solved-assignments.html`
- [ ] `content/pages/bs-solved-assignments-spring-2026-all.html`
- [ ] `content/pages/careers.html`
- [ ] `content/pages/contact.html`
- [ ] `content/pages/disclaimer.html`
- [ ] `content/pages/dmca-copyright-notice.html`
- [ ] `content/pages/privacy-policy.html`
- [ ] `content/pages/sitemap.html`
- [ ] `content/pages/sitemap_0924605372.html`
- [ ] `content/pages/terms-and-conditions.html`

## QA status
- Theme CSS selectors inspected for note, alert, table, details, blockquote, tabs, button and steps components.
- Admissions page: no `<style>`, `<script>` or inline style; six FAQ accordions; native table wrapper; verified internal page links; SEO description 155 characters; visible H1 42 characters; approximately 1,700 words.
- Remaining 40 pages: pending migration and content/link QA.
- Rendered visual checks in Blogger light/dark and mobile modes: not yet performed.
- Live Blogger publication: not performed.
