# Assignmentwaly — Free Study & Research Tools

Assignmentwaly is a tools-first learning project. The public site is designed around free browser-based utilities and original educational articles. Existing repository history is preserved.

## Product focus
- Free student-facing tools that work without paid AI APIs or mandatory accounts.
- Original, source-checked educational and research articles.
- A working free companion resource for each article before publication.
- Mobile-first accessibility, privacy-conscious browser tools, and human editorial approval.

## Current working features
- Tools-first responsive homepage at `index.html`.
- Searchable tools directory, mobile navigation and scroll progress indicator.
- **Assignment Builder** at `tools/assignment-builder.html`: assignment metadata, question/answer blocks, Urdu/English writing direction, word count, local browser draft save, TXT export and print/save PDF.
- The Assignment Builder stores drafts in the browser's local storage; it does not upload draft text to a server.

## Planned free tools
1. Study Planner — weekly study schedule and progress checklist.
2. Citation Helper — basic reference formatting from user-supplied source details, with verification reminders.
3. MCQ Practice Maker — user-created quizzes, explanations and local practice scoring.

Planned items are not live until implemented and tested.

## Article publishing standard
A new article and its free companion are one release unit. Build and test the companion first; then research and write the article from primary/official sources; fact-check; review accessibility, mobile UX and SEO; and obtain human approval before publication. We do not attempt to manipulate AI-detector scores or disguise AI use. No detector result guarantees search performance.

See:
- [Multi-agent tasking specification](docs/agent-tasking.md)
- [Original article + free companion workflow](docs/original-article-workflow.md)
- [Academic integrity standard](docs/academic-integrity.md)
- [Privacy and data-handling baseline](docs/privacy-data-handling.md)
- [Product roadmap](docs/roadmap.md)
- [Service catalogue](docs/service-catalogue.md)

## Local checks
Run the dependency-free smoke check from the repository root:

```bash
node scripts/check-static-site.mjs
```

## Deployment — GitHub Pages
The workflow at `.github/workflows/deploy-pages.yml` validates and deploys the repository root to GitHub Pages on pushes to `main` and manual dispatch.

1. Open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Check **Actions → Deploy Assignmentwaly to GitHub Pages**.
4. After a successful run, use the published URL in the `github-pages` environment.

Expected default address: https://nationalistacademy.github.io/Assignmentwaly/ — only after Pages is enabled and deployment succeeds. No Vercel project is currently connected to this repository in the available account context.

## Responsible use
Assignmentwaly tools support learning and independent work. Learners remain responsible for their own assessed submissions, facts and citations. We do not promise marks, grades, admissions or guaranteed outcomes. Avoid entering sensitive personal information into browser tools, especially on shared devices.
