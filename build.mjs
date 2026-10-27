// Static site build: renders every page to dist/, copies public/, and writes
// sitemap.xml, robots.txt and llms.txt. No dependencies — run with `node build.mjs`.
import { mkdirSync, writeFileSync, rmSync, cpSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { SITE } from './src/site.mjs';
import { LOANS } from './src/loans.mjs';
import { POSTS } from './src/blog.mjs';
import { allPages } from './src/pages.mjs';
import { REVIEW_DATA, fmtCount, fmtAvg } from './src/reviews.mjs';
import { CITIES, MN_FAQS } from './src/local.mjs';
import { TERMS } from './src/glossary.mjs';

const OUT = 'dist';
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync('public', OUT, { recursive: true });

const pages = allPages();
for (const p of pages) {
  // /foo -> foo.html (served at /foo by Vercel, Netlify, Cloudflare Pages and GitHub Pages)
  const file = p.path === '/' ? 'index.html' : p.path.slice(1) + '.html';
  const dest = join(OUT, file);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, p.html);
  // A path that is also a folder (/blog) gets an index.html too, so every host resolves it.
  if (p.path !== '/' && pages.some((o) => o.path.startsWith(p.path + '/'))) {
    mkdirSync(join(OUT, p.path), { recursive: true });
    writeFileSync(join(OUT, p.path, 'index.html'), p.html);
  }
}

const urls = pages.filter((p) => !p.noindex);
writeFileSync(
  join(OUT, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((p) => {
    const post = POSTS.find((x) => '/blog/' + x.slug === p.path);
    return `  <url><loc>${SITE.url}${p.path === '/' ? '/' : p.path}</loc><lastmod>${post ? post.date : SITE.reviewed}</lastmod></url>`;
  })
  .join('\n')}
</urlset>
`
);

// Search and AI answer-engine crawlers are explicitly welcome.
writeFileSync(
  join(OUT, 'robots.txt'),
  `User-agent: *
Allow: /
Disallow: /thank-you

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: Bingbot
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`
);

// llms.txt: a plain-language summary and map of the site for AI assistants (llmstxt.org).
const offices = SITE.offices.map((o) => `- ${o.name}: ${o.street}, ${o.city}, ${o.state} ${o.zip}`).join('\n');
writeFileSync(
  join(OUT, 'llms.txt'),
  `# The Heichel Team at Fairway Home Mortgage

> The Heichel Team is a mortgage lending team led by Kris Heichel (NMLS #${SITE.nmls}), Branch Manager and Senior Loan Officer, powered by Fairway Independent Mortgage Corporation (NMLS #${SITE.companyNmls}). The team serves Rochester, Austin and all of Southeast Minnesota, and is licensed in ${SITE.licensedIn.join(', ')}. It offers Conventional, FHA, VA, USDA, Jumbo, renovation (FHA 203(k), Fannie Mae HomeStyle, VA renovation) and reverse (HECM) mortgages, refinancing, down payment assistance and investor/DSCR loans.

Key facts:
- Kris Heichel has been in mortgage lending since 2004 and is ranked among the Top 1% of mortgage originators nationwide by Scotsman Guide (2025, 2021, 2019, 2018, 2015), plus Scotsman Guide Top Women Originators 2025.
- Voted Best Mortgage Lender in the Best of Mower County awards (Austin Daily Herald) in 2025, 2023 and 2021; Best Place to Work 2025.
- The team has funded over $750 million in loans, helped over 2,000 families, holds a ${fmtAvg(REVIEW_DATA.average)}-star average across ${fmtCount(REVIEW_DATA.total)} reviews on Google, Zillow, Facebook and Experience.com (as of ${REVIEW_DATA.fetchedAt}), and often closes in 10 days or less.
- Specialties: first-time homebuyers, VA and VA renovation loans, Minnesota Housing and down payment assistance programs, reverse mortgages / HECM for Purchase, divorce lending (CDLP).
- Phone: ${SITE.phone} · Email: ${SITE.email} · Hours: ${SITE.hours}
${offices}
- Apply online: ${SITE.links.apply}

## Loan programs
${LOANS.map((l) => `- [${l.name}](${SITE.url}/${l.slug}): ${l.answer}`).join('\n')}

## Areas we serve
${CITIES.map((c) => `- [Mortgage lender in ${c.city}, MN](${SITE.url}/mortgage-lender/${c.slug}): ${c.county}; typical home value ${c.homeValue} (Zillow, Sept. 2026); 2026 conforming limit $832,750 and FHA limit $541,287; USDA: ${c.usdaShort}.`).join('\n')}

## Minnesota mortgage FAQs
${MN_FAQS.map(([q, a]) => `- ${q} ${a}`).join('\n')}

## Mortgage glossary
${TERMS.map((t) => `- [${t.term}](${SITE.url}/glossary/${t.slug}): ${t.def}`).join('\n')}

## About
- [Meet the Team](${SITE.url}/team): Kris Heichel and the team behind every loan.
- [Who is Kris?](${SITE.url}/kris): Biography, board roles and awards.
- [For Realtors](${SITE.url}/realtors): Partner resources for real estate agents.
- [Why Fairway](${SITE.url}/why-fairway): Fairway Cares and the American Warrior Initiative.

## Guides and tools
- [Loan process](${SITE.url}/loan-process): The 9 steps from first conversation to moving day.
- [VA benefits](${SITE.url}/va-benefits): VA renovation loans and what veterans may be missing.
- [Mortgage education](${SITE.url}/education): Answers to common mortgage questions.
- [Home equity analysis](${SITE.url}/equity-analysis-plan), [Refi watchlist](${SITE.url}/refi1)
- [Schedule a consultation](${SITE.url}/schedule)

## Blog
${POSTS.map((p) => `- [${p.title}](${SITE.url}/blog/${p.slug}) (${p.date}): ${p.summary}`).join('\n')}

## Disclosures
Equal Housing Lender. Not all customers will qualify. Information, rates and programs are subject to change without notice. All products are subject to credit and property approval. AZ License #${SITE.azLicense}. Not authorized by the New York State Department of Financial Services.
`
);

console.log(`Built ${pages.length} pages to ${OUT}/`);
