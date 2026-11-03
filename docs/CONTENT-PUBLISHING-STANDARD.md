# Assignmentwaly Content Publishing Standard

**Purpose:** Publish genuinely useful, accurate, mobile-first AIOU learning guidance for students in Pakistan. This standard applies whenever a draft HTML/code snippet or only a page title is supplied.

## 1. Intake and repository workflow
- If HTML/code is supplied, identify its intended page, current public permalink, title, and content purpose before editing.
- If only a title is supplied, search the Assignmentwaly repository and Blogger export for an existing matching page/post before creating anything. Prefer updating an existing canonical page over making a duplicate.
- Preserve existing Blogger permalink and source metadata unless a verified migration is explicitly approved.
- Work in a feature branch, commit changes, run checks, and open a draft PR. Do not publish to live Blogger or change Search Console, DNS, robots, theme, redirects, or sitemap settings without separate explicit approval.
- If the title is ambiguous or the repository contains multiple likely matches, ask one short clarification rather than choosing the wrong page.

## 2. Editorial mission and audience
- Serve AIOU students from Matric/SSC and HSSC through Associate Degree, BS, B.Ed, postgraduate and other programme levels where the source supports it.
- Solve a real student task: understand a process, find an official source, prepare an assignment, locate a course resource, check a deadline, or resolve a portal issue.
- Prefer practical explanations, examples, checklists, original diagrams/tables and next steps over generic keyword filler.
- Use clear English with helpful Urdu terms where they improve comprehension. Explain acronyms at first use.
- Do not encourage academic dishonesty or present purchased/ghostwritten work as student learning. Emphasize understanding, practice, feedback, proofreading and responsible use.

## 3. Research and factual verification
- Prioritize primary AIOU sources: official notices, prospectuses, admission portal, academic calendar, CMS/LMS guidance, assignment schedules and helpdesk.
- Verify dates, fees, eligibility, programme availability, contact details, payment methods and policy statements against the current official source.
- Distinguish the standard academic calendar from programme-specific notices, extensions and Phase-II admissions. Never infer that all programmes are open/closed from one general date.
- Remove unsupported fee estimates, late-fee amounts, WhatsApp numbers, SMS codes, programme codes, guarantees and claims.
- When information is uncertain or conflicting, state the uncertainty, link to the authoritative notice and tell the student what to check.
- Add a visible “last checked” date. A date is an editorial verification date, not an invented official update date.

## 4. SEO and GEO structure
- One page, one clear search intent and a descriptive natural title. Avoid keyword stuffing and repeated year variants.
- Put a concise answer-first summary near the top, including who the page applies to and the relevant semester/programme.
- Use a single visible H1 where the Blogger template permits it; use logical H2/H3 hierarchy.
- Add a table of contents only for long pages. Use descriptive anchor text and stable section IDs.
- Include direct official source links beside claims they support, not only in a references block.
- Write concise answer paragraphs, meaningful tables and genuine FAQs that answer likely follow-up questions.
- Use Pakistan context only when relevant (PKR, local semester dates, official regional process).
- Make facts extractable for search and AI systems: consistent entity names, definitions, direct answers, dates, scope and source attribution.
- Never promise first-page rankings, indexing, AI citations, AdSense approval or traffic.

## 5. Blogger theme and technical compatibility
- Use scoped CSS under a unique page wrapper; do not style global body, headings, tables or links.
- Keep HTML fragment-only: no html/head/body wrappers, no external JS dependencies, no scripts unless specifically required and reviewed.
- Use semantic HTML, descriptive links, readable contrast, visible keyboard focus and responsive layouts.
- Tables must be wrapped in horizontally scrollable containers on small screens; avoid fixed page widths.
- Avoid layout-breaking inline styles, excessive animations, huge images and intrusive callouts.
- Do not add a second canonical, robots meta tag, Article schema or FAQ schema to post body. These belong in the theme/template layer and must be checked for duplicates. Structured data must reflect visible page content.
- Keep official outbound links HTTPS, descriptive, and safe (new-tab links paired with noopener/noreferrer when used).

## 6. Internal linking and user journey
- Search the repository for relevant existing pages before adding links. Confirm each internal URL/path exists.
- Link to the next useful student action (prospectus, assignment schedule, books, course-code hub, workshop guide, contact), not generic repeated keyword anchors.
- Do not create doorway pages, near-duplicate course pages, empty category hubs or links to guessed URLs.
- Keep navigation useful on mobile and do not hide essential answers behind buttons or tabs.

## 7. Trust, rights and monetization
- Identify Assignmentwaly as an independent educational resource; never imply official AIOU affiliation.
- Do not invent authors, qualifications, expert reviews, testimonials, ratings, user counts or institutional endorsements.
- Link to official books/notices where appropriate; do not reproduce copyrighted material without permission. Summarize and explain in original language.
- Keep ads separate from content and navigation. Never ask users to click ads or obstruct the answer with ads.

## 8. QA before a draft PR
- Check links, heading order, IDs, HTML nesting, table responsiveness and mobile layout.
- Check that there is no unsupported current date/fee/contact claim and that the official source is linked.
- Confirm existing permalink is preserved and no duplicate page is created.
- Review the final rendered content for clarity, grammar, accessibility and student usefulness.
- Record what changed, what was verified, unresolved questions and the fact that live Blogger publication has not occurred.
