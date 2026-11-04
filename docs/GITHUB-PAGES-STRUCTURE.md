# GitHub Pages structure and Blogger connection

**Repository:** `nationalistacademy/Assignmentwaly`  
**Working branch:** `feature/complete-linked-student-pages`  
**Companion site:** `https://nationalistacademy.github.io/Assignmentwaly/`  
**Blogger source:** `https://assignmentwaly.blogspot.com/`

## Roles

Blogger remains the publishing home for the existing posts and static pages. GitHub Pages is the companion website for free tools, standalone evergreen guides, navigation and discovery. Do not publish duplicate articles to both platforms merely to create extra search URLs.

## Current additions

- Homepage navigation now exposes Student Guides and Content Library.
- `guides/index.html` is the directory for standalone guides.
- Five detailed guides are rendered as full standalone HTML pages in `guides/`, sourced from the reviewed Blogger page fragments in `content/pages/`.
- `library.html` indexes the 149 captured posts and 41 static pages in the Blogger manifest and links each title to its original Blogger URL.
- `sitemap.xml` lists the GitHub Pages homepage, directory, library, five guides and Assignment Builder.
- `robots.txt` points crawlers to that sitemap.
- `scripts/check-linked-pages.mjs` checks required files, homepage links, guide count, 190 library entries and sitemap coverage.

## Content and canonical policy

The original Blogger URL remains the source URL for each Blogger post/page. The standalone GitHub guides are a curated companion edition for the five core guides, with canonical tags pointing to the GitHub Pages guide URL. Before expanding copies to additional Blogger content, check that the destination is genuinely useful as a standalone tool or guide and that its wording, metadata, links and canonical strategy are intentional.

The searchable content library is a navigation layer, not 190 new duplicated GitHub articles. The repository's archive files remain the backup snapshot for the source content. This avoids automatically publishing old, date-sensitive or unreviewed material as fresh standalone pages.

## Deployment and safety boundary

The Pages workflow validates both the original site and the new linked-page structure. The branch is submitted for review through a draft pull request. It does not alter Blogger live posts, Blogger theme, DNS, Search Console, AdSense or any production settings. GitHub Pages will not update from this feature branch unless it is merged to the configured deployment branch.
