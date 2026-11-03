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


## 9. Reusable page architecture (default for every new or refreshed page)

Use this order where it fits the search intent; omit sections that do not help the reader rather than adding filler.

1. **Source metadata comment:** retain the existing Blogger source URL, title, publication date, update date, labels and author. Never invent metadata.
2. **One unique wrapper:** use a page-specific class such as `.aw-admission-guide` or `.aw-course-260`. Every CSS selector must begin with that wrapper.
3. **One visible H1:** descriptive and aligned with the page's actual purpose.
4. **Editorial meta line:** last checked date, author/team and intended audience. Do not confuse editorial review date with an official update date.
5. **Answer-first introduction:** explain in 2–4 sentences what the student can do here, who it applies to and the semester/programme scope.
6. **Important notice (only when needed):** deadline, eligibility, policy or safety caveat with a clear official-source link.
7. **Contents list:** for long pages only; anchors must match unique section IDs.
8. **Main answer sections:** use H2 for major questions/tasks and H3 for subtopics. Lead each section with the direct answer, then steps, examples or evidence.
9. **Useful components:** compact quick-link cards, checklists, responsive comparison tables, numbered steps, examples, diagrams or downloadable resources only where they add real value.
10. **Official sources:** place source links beside the claims they support. Include source owner/name and checked date for time-sensitive facts.
11. **FAQs:** answer real follow-up questions not already repeated verbatim in the article.
12. **Internal next steps:** link only to verified existing Assignmentwaly pages relevant to the student's next task.
13. **Editorial/disclaimer note:** independent-site statement and a concise correction route where appropriate.

## 10. Dark mode, contrast and theme isolation rules

- Define page colors as CSS custom properties on the unique wrapper; provide a readable light palette and dark overrides.
- Support the actual Blogger theme's dark-mode class/attribute after inspecting the live theme. Also use `prefers-color-scheme` only as a fallback; do not assume every Blogger theme uses the operating-system preference.
- Body text must remain comfortably readable; muted text must still have sufficient contrast. Links need a distinct color and visible keyboard focus.
- Do not hard-code dark text on light-only cards, tables or callouts. Use the wrapper's text, surface, border and muted tokens.
- Scope every rule: never write global `body`, `h1`, `h2`, `table`, `td`, `a`, `ol`, `li`, `.grid`, `.note` or generic class selectors in a page fragment.
- Avoid generic names likely to collide with the Blogger theme; prefer page-specific wrapper and component names.
- Reset ordered-list numbering only inside the component that owns it. Do not alter global list counters, marker styles or theme navigation lists.
- Tables must be inside a wrapper with horizontal scrolling, keyboard focus and a descriptive accessible label when appropriate. Keep row striping scoped to that table.
- Do not use broad selectors such as `table tr:nth-child(even)` outside the unique wrapper. A table must never change the theme's header, sidebar, footer or other widgets.
- Test light and dark mode, narrow mobile width, keyboard focus, long URLs, Urdu/English mixed text and table overflow before the PR.

## 11. Standard content quality gate

A page is ready for review only when:
- The page answers one clear student intent without keyword stuffing.
- All time-sensitive facts have current primary-source support and a visible checked date.
- The existing permalink is preserved and internal links are verified.
- HTML is fragment-only, semantic and valid; IDs are unique and heading levels are logical.
- CSS is fully scoped and the page remains readable in light/dark mode.
- Tables and numbered steps do not leak styles or counters into the Blogger theme.
- Mobile layout, accessibility, source links, disclaimer and copy quality have been checked.
- The PR records tests, limitations, unresolved facts and confirms that live Blogger was not changed.

## 12. SEO metadata, GEO answers and length discipline

- Prepare a separate SEO metadata pack: title, meta description, existing permalink, one primary query and a few natural secondary queries. Keep it outside the visible Blogger article body.
- Character ranges are drafting targets, not ranking rules. Aim for a concise meta description, but clarity and accuracy come first.
- Place the primary query naturally in the title/H1, opening answer and a relevant section. Never force fixed keyword density or repeat phrases to reach a percentage.
- Answer the main query in the first 2–4 sentences, then explain scope, exceptions, evidence and next steps.
- Use tables for real comparisons/schedules. Add 4–6 FAQs only when genuine, distinct follow-up questions exist.
- Length depends on complexity. A 1,500–2,000 word process guide may be useful; never add filler to hit a word count.
- Never invent statistics, percentages, dates, fees, success rates or guarantees. Use numbers only when supported by primary sources.
- Suggest image concepts and accurate alt text; never fabricate image URLs or imply an image already exists.
- Add internal links only after confirming each destination exists and supports the next student task.
- Prefer official AIOU sources for AIOU process, policy, eligibility, fee and schedule claims.

## 13. Plus UI / Blogger theme component verification

- Do not assume Plus UI v3.7.0 supports a class merely because the theme version is stated. Inspect the actual theme XML/CSS or a rendered live example before using classes such as note, alert, table, details, tabs, button or steps.
- Record which selectors/components were found and tested. If theme source is unavailable, use the unique-wrapper scoped fallback; do not claim unverified theme compatibility.
- Keep SEO metadata separate from the Blogger body. Do not add duplicate canonical, robots or structured-data tags to article HTML.
- Deliver the SEO pack, complete HTML fragment, image suggestions and verified internal-link recommendations as separate editor-facing sections.
- Repository drafting does not publish to Blogger. Live publication requires separate explicit approval.
