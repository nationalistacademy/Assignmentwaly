# Assignmentwaly — Assignment Articles & Student Resources

[![NodeJS with Webpack](https://github.com/nationalistacademy/Assignmentwaly/actions/workflows/webpack.yml/badge.svg)](https://github.com/nationalistacademy/Assignmentwaly/actions/workflows/webpack.yml)

Assignmentwaly is the assignment-focused publishing site in a three-site setup. It publishes original assignment articles, solved examples, study guidance and related student resources. Student-facing AIOU tools are hosted on AIOU Coaching; Assignmentwaly links visitors there rather than maintaining a separate duplicate tools portal.

## Product focus
- Assignment-focused articles, solved examples and independent study guidance.
- Original, source-checked educational and research articles.
- Link each relevant article to a useful free companion tool hosted on AIOU Coaching.
- Mobile-first accessibility, privacy-conscious browser tools, and human editorial approval.

## Current working features
- Responsive homepage at `index.html` with clear links to the AIOU Coaching tools hub.
- Assignment article links, tool discovery cards, mobile navigation and scroll progress indicator.
- **Assignment Builder** at `tools/assignment-builder.html`: assignment metadata, question/answer blocks, Urdu/English writing direction, word count, local browser draft save, TXT export and print/save PDF.
- The Assignment Builder stores drafts in the browser's local storage; it does not upload draft text to a server.

## Planned free tools
1. Study Planner — weekly study schedule and progress checklist.
2. Citation Helper — basic reference formatting from user-supplied source details, with verification reminders.
3. MCQ Practice Maker — user-created quizzes, explanations and local practice scoring.

Planned items are not live until implemented and tested.

## AdSense readiness and site quality

- [Public-site AdSense readiness audit](docs/ADSENSE-READINESS-AUDIT.md)
- Complete trust/legal corrections and the article-quality inventory before requesting an AdSense review.
- Assignmentwaly and AIOU Coaching remain separate brands with complementary roles; cross-link only when useful and never duplicate content for search manipulation.

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

## Organization and legal information

This repository is part of an independently operated project ecosystem. The sole-proprietor organization profile and policy drafts are maintained in [organization/](organization/README.md). Nationalist Academy is operated by Faiez Mehmood in Karachi, Pakistan; it is not an incorporated company, NGO, charity, university or government institution. The policy documents should be reconciled with the actual settings and data practices of each live website before publication.


## Blogger source archive and expansion plan

- [Blogger content inventory and backup audit](docs/BLOGGER-CONTENT-INVENTORY.md)
- [SEO + GEO roadmap](docs/SEO-GEO-ROADMAP.md)
- [Student-journey content optimization plan](docs/STUDENT-JOURNEY-CONTENT-PLAN.md)
- [Pakistan-wide organic search playbook](docs/PAKISTAN-ORGANIC-SEARCH-PLAYBOOK.md)
- [Student and visitor needs roadmap](docs/STUDENT-NEEDS-ROADMAP.md)
- [Public Blogger HTML archive](archive/blogger-export/README.md)

The repository now contains a read-only snapshot of the 149 public posts and 41 static pages discovered through Blogger feeds. Live Blogger pages/theme/DNS remain unchanged.
