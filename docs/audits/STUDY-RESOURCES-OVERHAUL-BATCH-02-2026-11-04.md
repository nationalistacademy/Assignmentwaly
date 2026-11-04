# Assignmentwaly study resources — Batch 02

**Date:** 4 November 2026  
**Repository:** `nationalistacademy/Assignmentwaly`  
**Branch:** `content/assignmentwaly-study-resources-batch-02-2026-11-04`  
**Scope:** Guess papers, original books and programme-wise assignment guidance.

## Pages rewritten

- `content/pages/aiou-guess-paper.html` — 1,500+ word revision guide; removed claims about guaranteed/high-probability questions and unsupported five-year analysis; added course-code matching, syllabus checks and practical revision methods.
- `content/pages/aiou-guess-papers-2026-matric-to-master.html` — retained as a short directory page; removed four generic download buttons that all pointed to the same unrelated placeholder post; clearly states that course-specific files are not listed unless verified.
- `content/pages/aiou-original-books.html` — 1,500+ word guide; replaced unsupported counts and exam-percentage claims with the official AIOU course-code search, programme/level portal and edition-checking workflow.
- `content/pages/aiou-bed-15-25-4-solved-assignments.html` — 1,500+ word B.Ed guide; removed stale Spring 2026 due dates, unsupported pass/handwriting claims and external CSS dependencies; added programme-scheme checks, assignment-writing and LMS guidance.
- `content/pages/bs-solved-assignments-spring-2026-all.html` — 1,500+ word BS guide; clarified that old Spring 2026 dates are historical, added course-code matching, subject-specific answer planning, LMS guidance and privacy-safe submission checks.

## Shared theme styling

The scoped responsive `.aw-article` style layer is included in `Blogger Template/Assignmentwaly.xml` in this branch. The pages use a common article wrapper and first-answer lead style, while native Plus UI classes provide tables, notes, alerts, steps and FAQ accordions.

## Official sources referenced

- AIOU Soft Books search: https://online.aiou.edu.pk/LIVE_SITE/books%20soft_NSII.asp
- AIOU Soft Books by programme/level: https://online.aiou.edu.pk/LIVE_SITE/Soft_Books_NSII.asp
- AIOU Books / E-Books: https://www.aiou.edu.pk/books
- AIOU Prospectus: https://www.aiou.edu.pk/prospectus
- AIOU Assignments (QP): https://www.aiou.edu.pk/assignments-qp
- AIOU Examination Department: https://www.aiou.edu.pk/examination
- AIOU Helpdesk: https://support.aiou.edu.pk/
- AAGHI LMS: https://aaghi.aiou.edu.pk/

## Static QA performed

- Five updated page fragments have an `.aw-article` wrapper.
- No page-level `<style>`, `<script>` or inline `style=` attributes in the five updated page fragments.
- H1 and meta description lengths checked; all five updated pages have H1 under 60 characters and descriptions in the 150–160 character range.
- The four substantial guides (guess papers, original books, B.Ed and BS) each exceed 1,500 words. The 2026 Matric-to-Master page is intentionally a concise directory, not a padded article.
- FAQ accordion opening and closing tags match on each page.
- The four broken/identical placeholder download links on the 2026 guess-paper directory were removed.
- Shared CSS added to the theme source in this branch so the new wrapper is not dependent on the still-unmerged Batch 01 PR.

## Not yet verified

- Rendered Blogger preview in light mode, dark mode and mobile widths.
- XML parser validation of the complete Blogger theme.
- Every retained course-specific post URL and every old PDF destination.
- Whether individual course-code PDFs are current for Autumn 2026; this batch directs students to the official searchable portal rather than asserting every old static PDF is current.
- Programme-specific BS and B.Ed course lists against each current intake prospectus.

## Safety and publishing boundary

No Blogger live publishing, theme upload, DNS, Search Console, sitemap, robots, AdSense or production settings were changed. This branch is intended for draft review only. Do not merge or publish until rendered QA and retained-link checks are complete.
