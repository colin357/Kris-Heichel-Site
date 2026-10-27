# yourwaymortgage.com — The Heichel Team

Rebuild of [yourwaymortgage.com](https://yourwaymortgage.com/) (Kris Heichel, The Heichel Team at Fairway Home Mortgage) as a fast static site. The design, colors, imagery, copy and URLs match the original. Changes were made only for readability and AEO (answer engine optimization).

## Quick start

```bash
npm run build   # renders everything to dist/ (Node 18+, no dependencies)
npm run serve   # preview at http://localhost:8080
```

## Where things live

| Path | What |
| --- | --- |
| `src/site.mjs` | Business facts: phone, offices, NMLS, links, form endpoint. **Edit here first.** |
| `src/loans.mjs` | Loan program content (one entry per program page) |
| `src/blog.mjs` | Blog posts |
| `src/pages.mjs` | Page layouts for every other page |
| `src/lib.mjs` | Header, footer, schema.org graph, shared components |
| `public/` | CSS, JS (nav, forms, reviews slider, Calendly), optimized images |
| `build.mjs` | Writes `dist/`, plus `sitemap.xml`, `robots.txt` and `llms.txt` |

To add a blog post, add an object to `POSTS` in `src/blog.mjs` and rebuild. Do the same in `LOANS` to add a loan program.

## Deploying

- **Netlify**: connect the repo. `netlify.toml` sets the build and redirects. Forms work automatically through Netlify Forms; turn on email notifications in the Netlify dashboard.
- **Vercel**: connect the repo. `vercel.json` sets the build, clean URLs and redirects. Forms need an endpoint: set the `FORM_ENDPOINT` env var (for example, a Formspree form URL).
- **Other hosts**: run `FORM_ENDPOINT=https://formspree.io/f/xxxx npm run build` and upload `dist/`.

Pages are written as `slug.html`, which these hosts serve at `/slug`. That keeps every original URL working (`/fha`, `/kris`, `/blog/...`).

## What changed vs. the original

**Readability**
- Larger, darker body text (17px Mulish on #2f323a) in place of light-gray Century Gothic.
- A darker gold for small text on light backgrounds, so it passes contrast. The brand gold is kept for buttons.
- Larger hero stats, clearer section labels, FAQ answers that work as native accordions, and a reviews slider (all reviews stay in the page HTML for search and AI crawlers).
- Responsive, accessible navigation with dropdowns, a skip link, focus states and reduced-motion support.
- Images went from ~214 MB to ~6 MB (WebP, resized, lazy-loaded).

**AEO / SEO**
- A "Quick answer" paragraph and an "at a glance" facts table at the top of every loan page.
- FAQ sections with `FAQPage` schema on the home page, loan pages, education, refi watchlist and blog posts.
- A full schema.org graph: `FinancialService` business with both offices, `Person` for Kris (NMLS, awards, board roles, credentials), `LoanOrCredit` per program, `BlogPosting`, `HowTo` (loan process), and `BreadcrumbList`.
- "Reviewed by Kris Heichel, NMLS #27180" with an updated date on program pages and posts.
- `llms.txt` (a site summary for AI assistants), a `robots.txt` that explicitly allows AI and search crawlers, and `sitemap.xml`.
- A comparison table on `/loan-programs`, and key takeaways at the top of each blog post.

**Fixes**
- `/reverse-purchase` returned 404 and now has a real Reverse Mortgage / HECM for Purchase page.
- Broken "Learn more" links on `/kris` (Austin Chamber, Mower County CEO, Port Authority) are fixed.
- The intro on `/investor-builder` was a copy-paste of the DPA text and has been replaced.
- The duplicate paragraph on `/kris` that said Kris started in both 2001 and 2004 is merged to 2004.
- The FAQ answer saying a mortgage credit pull is a "soft hit" is corrected (it's a hard inquiry; rate-shopping inquiries in a short window count as one).
- `/investing` (linked from a blog post), `/blog/author/*` and `/store/*` now redirect.
- The quizzes (`/quiz`, `/refi-quiz`, `/iq` and the VA quiz) were removed; their URLs redirect to `/education` and `/refi1`, and the homebuyer and refinancing tips moved to those pages.
- The Hidden Market CE class promo was removed.

## Things to confirm with the client

- The career start year: 2004 (team page) versus 2001 (one paragraph on the old /kris page). The footer also says "since 2003."
- The Agent Handbook PDF (142 MB) is still linked from its current host, because it's too large for the repo. A compressed copy could be self-hosted.
- The form destination (Netlify Forms or a `FORM_ENDPOINT`) and who receives the notifications.
