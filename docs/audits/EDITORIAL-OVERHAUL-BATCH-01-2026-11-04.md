# Assignmentwaly editorial overhaul — Batch 01

**Date:** 4 November 2026  
**Repository:** `nationalistacademy/Assignmentwaly`  
**Branch:** `content/assignmentwaly-editorial-overhaul-2026-11-04`  
**Public site:** https://assignmentwaly.blogspot.com/  
**Scope of this batch:** editorial corrections to the academic schedule and assignments hub, plus a reusable scoped style layer in the Plus UI theme source.

## Why this batch was needed

The earlier 41-page migration standardised markup but did not complete the deeper editorial rewrite requested for every page. A fresh spot-check found that `content/pages/aiou-academic-schedule.html` contained advertising-page copy, the assignments hub included unsupported operational claims, and the guess-paper hub still contained unverified performance claims and unavailable placeholders.

## Completed in this batch

- Rebuilt `content/pages/aiou-academic-schedule.html` as an AIOU academic calendar guide with separate ODL, F2F and MPhil/MS/PhD schedule sections.
- Rebuilt `content/pages/aiou-assignments.html` around official question-paper sources, programme-specific submission routes, AAGHI LMS guidance, academic integrity and missing-marks help.
- Added scoped, responsive, theme-variable-based styles under `.aw-article` in `Blogger Template/Assignmentwaly.xml`.
- Applied the shared `.aw-article` wrapper and `.aw-lead` first-answer styling to both rewritten pages.
- Preserved both existing Blogger page paths and source URLs.
- Added page-specific SEO metadata and internal/external source links.

## Primary sources used

- AIOU academic calendar: https://www.aiou.edu.pk/academiccalender
- AIOU MPhil/MS/PhD calendar: https://aiou.edu.pk/academiccalenderii
- AIOU online admission calendar: https://online.aiou.edu.pk/LIVE_SITE/AdmissionCalender_New.asp
- AIOU assignments and question papers: https://www.aiou.edu.pk/assignments-qp
- AIOU assignment FAQ and LMS submission guidance: https://aiou.edu.pk/frequently-asked-questions-faqs
- AIOU assignment schedule: https://www.aiou.edu.pk/assignment-schedule
- AIOU helpdesk: https://support.aiou.edu.pk/

## Editorial rules for the remaining pages

1. Preserve each existing Blogger permalink unless a separate redirect/canonical decision is approved.
2. Write to the actual page intent. Legal, contact, about, sitemap and advertiser pages should not be padded to 1,500 words.
3. Use 1,500+ words for substantial student guides where the subject supports that depth; do not add filler to meet a numeric target.
4. Never invent dates, fees, course codes, download files, statistics, success rates or student counts.
5. Distinguish current notices from archive/reference material and state the semester, programme and mode where relevant.
6. Use official AIOU sources for operational claims. A source link is a verification starting point; record the exact notice and scope for high-impact facts.
7. Treat solved answers as study examples. Encourage original student work, citations and academic integrity; do not promote copying or ghostwriting.
8. Keep SEO metadata separate from visible post copy. Keep H1 concise and descriptions within the agreed character range.
9. Use existing Plus UI components for notes, alerts, tables, steps and accordions. Use the new `.aw-article` styles only inside the wrapper.
10. No AI-detector evasion claims or promises. Content quality must come from original explanation, research, usefulness and fact-checking.

## Remaining page batches

- **Batch 02 — High-risk programme pages:** verify programme availability, course codes, semester labels, assignment tables and download destinations across the programme-specific assignment pages.
- **Batch 03 — Books, guess papers and past papers:** remove unsupported claims, separate current from archived material, verify official/public source links and replace empty download placeholders with truthful availability notes.
- **Batch 04 — Admissions and student process guides:** verify current admissions, fees, deadlines, roll number slips, book dispatch, workshops and results against the relevant official AIOU service.
- **Batch 05 — Trust and navigation pages:** review About, Careers, Advertise, Contact, legal notices and sitemap for accuracy, clarity, privacy and working navigation.

## QA status

- SEO description length and H1 length checked for the two rewritten pages.
- Both pages use the shared wrapper and native Plus UI note/alert/table/steps/details components.
- No page-level `<style>`, `<script>` or inline `style=` attributes in the two rewritten pages.
- Six FAQ accordions on each rewritten page have matching opening and closing tags.
- The academic schedule guide is over 1,500 words; the assignments guide is over 1,500 words.
- Rendered Blogger preview in light/dark mode and mobile widths is **not yet verified**.
- Theme XML parser validation and browser rendering are **not yet verified**.
- All retained internal/external links and any downloadable files still need live link checks.
- No Blogger live publishing, theme upload, DNS, Search Console or production setting changes were made.
