# Assignmentwaly — Plugin & Integration Map

**Status date:** 2026-11-02  
**Repository:** `nationalistacademy/Assignmentwaly`  
**Working branch:** `strategy/student-journey-pakistan-seo`

## Purpose

Use external tools to improve Assignmentwaly's research quality, technical quality, SEO/GEO discovery, accessibility, content operations and student-facing resources. Integrations must support the existing Blogger-first publishing model and the separate AIOU Coaching companion-tools model.

## Important architecture distinction

ChatGPT plugins/connectors are not npm packages and cannot simply be installed into this Git repository. A connected ChatGPT app gives the assistant permission to work with that provider in ChatGPT. A production integration inside the website or repository requires a separate, explicitly designed API/OAuth implementation, secure server-side credentials, provider terms review, privacy review and tests.

Do not add credentials, API keys, OAuth tokens, student data or private account exports to Git. Do not add paid APIs or services without owner approval. Do not make live Blogger, DNS, Cloudflare, production deployment, redirect, deletion or publishing changes without separate explicit approval.

## Existing connected tools and their appropriate roles

| Tool | Current connection status | Assignmentwaly use | Guardrail |
|---|---|---|---|
| GitHub | Connected | Repository source of truth, issues, branches, reviews, CI and documentation | Work on feature branches; never merge/deploy without approval |
| TinyFish | Connected | Read-only research and browser-based verification of public pages when useful | No logged-in account actions or submissions without explicit approval |
| Canva | Connected | Optional visual assets, infographics and social creative | Verify asset rights and brand consistency; human review |
| Data | Connected | Analyze audit CSVs, content inventories and performance exports | Do not infer traffic from missing data |
| Windsor.ai | Connected | Optional GA4/Search Console/marketing data aggregation | Connect only the specific data sources needed; read-only by default |
| Notion | Connected | Optional editorial knowledge base and task coordination | Repository Markdown remains canonical unless owner chooses otherwise |
| Product Design | Connected | UX review and prototype work for student tools | Do not redesign the live Blogger site without approval |
| Vercel | Connected | Optional preview/deployment tooling for separate web tools | No production project or deployment assumed; Blogger remains public publishing platform |
| Lovable | Connected | Optional prototype generation for independent student tools | Do not introduce paid backend/API dependencies without approval |
| Adobe | Connected | Optional PDF/document and visual asset production | Review export accuracy, accessibility and licensing |
| Gmail / Google Calendar | Connected | Operational correspondence and scheduling only when requested | Do not send messages or create events without user direction |
| Wix / Shopify | Connected | Not required for current Blogger education-publishing scope | Do not migrate or create duplicate storefront/site |

## Recommended additional connections (suggested, not yet connected)

| Tool | Why it may help | Current state |
|---|---|---|
| Firecrawl | Crawl and extract public pages at scale; compare live Blogger content with the repository archive | Suggested; owner must connect |
| Similarweb | Competitor and audience-market research; use as directional estimates, not first-party traffic truth | Suggested; owner must connect |
| Metricool | Optional social publishing calendar and channel analytics if Assignmentwaly actively uses supported social accounts | Suggested; owner must connect |

Ahrefs was previously suggested recently; do not re-suggest it in this cycle. Google Drive, Google Contacts and BigQuery were returned unavailable/disabled in the current account context. No Google Search Console direct connector was confirmed; use a user-provided export or an approved connected data source until access is verified.

## Tool-selection policy

1. Prefer tools already connected and no-cost/manual workflows where they meet the need.
2. Use official AIOU sources for institutional facts; third-party SEO tools cannot validate academic or administrative claims.
3. Use first-party Search Console and Analytics exports for site performance decisions. Third-party traffic estimates are supplementary.
4. Use crawler tools for discovery and QA, not to auto-publish or overwrite pages.
5. Do not use AI-generated content volume as a ranking strategy. Every article requires original value, source verification, editorial review and academic-integrity checks.
6. Do not collect student names, roll numbers, passwords, payment details or assignment drafts in analytics/marketing tools.
7. Do not add analytics tags, pixels, cookies or tracking scripts to Blogger until privacy notice, consent requirements, data retention and AdSense implications are reviewed.
8. Do not connect duplicate platforms (e.g. WordPress/Webflow/Wix) merely because they are available; Assignmentwaly remains Blogger-first unless the owner changes that decision.

## Workflow mapping

- **SEO/GEO research:** official AIOU sources + Search Console export/Windsor.ai + Similarweb (if connected) + manual SERP review.
- **Content inventory and crawl QA:** Blogger public feeds/archive + Firecrawl (if connected) + GitHub audit CSV.
- **Technical repository QA:** GitHub Actions + local dependency-free checks + review of generated HTML/XML.
- **UX and accessibility:** Product Design + Canva/Adobe assets where appropriate + manual mobile and keyboard testing.
- **Content visuals/social:** Canva/Adobe; Metricool only if social accounts are connected and owner approves publishing.
- **Reporting:** Data analysis of verified first-party exports; label estimates and missing data clearly.

## Approval gates

- Repository documentation and draft-only files may be prepared on the working branch.
- Creating or editing a live Blogger post/page/theme, changing DNS/Cloudflare, enabling tracking, connecting production accounts, publishing social posts, deploying production, changing redirects or deleting/merging URLs requires a separate explicit approval.
- A plugin suggestion is not an installation. The owner must complete the provider connection flow; only then may connected capabilities be used.
- No plugin can guarantee rankings, AdSense approval, traffic, grades or student outcomes.

## Next implementation steps

1. Owner connects Firecrawl, Similarweb and/or Metricool only if desired.
2. Verify the exact connected account scopes and data available before using them.
3. Add a read-only crawler/SEO evidence report for the 190-URL inventory.
4. Keep the 28 Phase 0 revised sections distinct from complete replacement HTML; the remaining 162 URLs stay tracked in the audit register.
5. Prepare full Blogger-safe HTML drafts only after page-level approval; do not publish them automatically.
