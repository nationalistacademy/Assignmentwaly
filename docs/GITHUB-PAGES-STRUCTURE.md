# Assignmentwaly GitHub Pages structure and Blogger connection

**Repository:** `nationalistacademy/Assignmentwaly`  
**Scope-correction branch:** `fix/assignmentwaly-scope-separation`  
**Companion site:** `https://nationalistacademy.github.io/Assignmentwaly/`  
**Blogger source:** `https://assignmentwaly.blogspot.com/`

## Product boundary

Assignmentwaly is exclusively an AIOU assignment and student assignment-guidance resource.

Included:
- Programme-wise and course-code assignment directories.
- Solved-assignment explanations and original-answer preparation guidance.
- Assignment writing, formatting, presentation and referencing.
- Academic integrity, tutor-marked assignment and submission guidance.
- Assignment-related student FAQs and site policy pages.

Excluded — these belong to the separate AIOU Coaching project:
- Guess papers and exam preparation.
- Admissions pages and workflows.
- Assignment Builder and interactive tools.
- LMS, MCQ practice and mock tests.

## Current correction work

- Homepage rewritten around assignment discovery and writing guidance.
- Guide directory rewritten to include programme, formatting, integrity and submission sections.
- Sitemap reduced to the homepage and assignment-guide directory until additional in-scope pages are audited.
- Legacy guess-paper, original-books, Assignment Builder and 190-entry content-library pages are retained as repository history but marked `noindex, nofollow` and omitted from the curated sitemap.
- Automated scope checks are being updated to reject links and promotions for excluded categories.

## Blogger and archive policy

Blogger remains the publishing platform for existing posts and pages. The repository's export of 149 posts and 41 static pages is a historical backup and URL inventory, not a public navigation directory. Each URL must be reviewed for Assignmentwaly relevance before migration or indexing. Do not delete archive snapshots.

No live Blogger posts, theme, DNS, Search Console, AdSense or production settings are changed by this branch.

## Validation and release

Run both repository checks locally and confirm the GitHub Actions deployment workflow succeeds after merge. Verify the deployed homepage, guide links, sitemap and robots file. Do not claim a release based solely on a merged pull request.
