# Assignmentwaly — AIOU Assignments & Student Resources

Assignmentwaly is an independent student-resource website focused on AIOU assignments. Its scope is assignment discovery and guidance: programme-wise and course-code resources, assignment writing, formatting, academic integrity, tutor-marked assignment guidance and submission information.

## Project boundary

**Belongs in Assignmentwaly**
- Programme-wise assignment directories and course-code assignment resources.
- Solved-assignment explanations and guidance for preparing original answers.
- Assignment formatting, presentation, referencing and academic integrity.
- Tutor-marked assignment (TMA), tutor feedback and submission guidance.
- Student-facing assignment FAQs, About, Contact and legal/policy pages.

**Belongs in the separate AIOU Coaching project**
- Guess papers and exam-preparation papers.
- Admissions content and workflows.
- Assignment Builder and other interactive student tools.
- LMS, MCQ practice, mock tests and learning applications.

Do not duplicate these excluded features or content in Assignmentwaly.

## GitHub Pages structure

- `index.html` — assignment-focused homepage.
- `guides/` — programme-specific and evergreen assignment guidance.
- `archive/blogger-export/` — historical Blogger source snapshots; preserve as backup, not as an automatically promoted public content catalogue.
- `library.html` and legacy guide/tool files — retained for historical reference but marked noindex and excluded from the curated sitemap while scope migration is in progress.
- `sitemap.xml` and `robots.txt` — curated GitHub Pages crawl entry points.

Blogger remains the existing publishing platform at https://assignmentwaly.blogspot.com/. Do not change live Blogger posts, theme, DNS, Search Console or AdSense settings without explicit approval.

## Quality and SEO requirements

- Use clear programme, semester and course-code labels.
- Verify assignment instructions and deadlines against current official AIOU sources.
- Distinguish official university information from independent guidance.
- Avoid unsupported marks, results, popularity or success-rate claims.
- Use original explanations, transparent references and student-first language.
- Keep pages mobile-friendly, accessible, fast and internally linked.
- Do not create duplicate pages merely to target similar keywords.
- Keep the sitemap limited to indexable, in-scope pages.

## Development checks

Run:
```bash
node scripts/check-static-site.mjs
node scripts/check-linked-pages.mjs
```

The linked-pages check enforces Assignmentwaly's scope boundary in addition to basic navigation and sitemap checks.

## Deployment

The GitHub Pages workflow is configured to validate and deploy the repository root on pushes to `main` and manual dispatch, subject to the repository's Pages settings and successful workflow completion. A merge alone does not prove deployment; verify the Actions run and published URL.

## Source archive

The repository contains a historical export of 149 Blogger posts and 41 static pages (190 URLs in total). This is a backup/inventory, not approval to expose every archived URL as a current Assignmentwaly landing page. Classify and curate each URL before migration or indexing.
