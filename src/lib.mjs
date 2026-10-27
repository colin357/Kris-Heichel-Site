// Shared building blocks: layout, navigation, schema helpers and reusable sections.
import { SITE } from './site.mjs';
import { REVIEW_DATA, fmtCount, fmtAvg } from './reviews.mjs';

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const strip = (s = '') => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
export const abs = (path) => SITE.url + (path === '/' ? '/' : path);
export const img = (name, alt, { cls = '', w, h, eager = false, sizes } = {}) =>
  `<img src="/img/${name}.webp" alt="${esc(alt)}"${cls ? ` class="${cls}"` : ''}${w ? ` width="${w}"` : ''}${h ? ` height="${h}"` : ''}${eager ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"'}${sizes ? ` sizes="${sizes}"` : ''}>`;

/* ---------- Navigation ---------- */
export const NAV = [
  { label: 'Apply Now', href: SITE.links.apply, external: true },
  { label: 'Schedule a Meeting', href: '/schedule' },
  {
    label: 'About Us',
    children: [
      ['Meet the Team', '/team'],
      ['Who is Kris?', '/kris'],
      ['Areas We Serve', '/mortgage-lender'],
      ['For Realtors', '/realtors'],
      ['Why Fairway', '/why-fairway'],
    ],
  },
  {
    label: 'Loan Programs',
    children: [
      ['All Loan Programs', '/loan-programs'],
      ['Conventional', '/conventional'],
      ['FHA', '/fha'],
      ['VA', '/va'],
      ['USDA', '/usda'],
      ['Jumbo', '/jumbo'],
      ['Fixed-Rate', '/fixed-rate'],
      ['Adjustable-Rate (ARM)', '/adjustable-rate'],
      ['Renovation', '/renovation'],
      ['Reverse Mortgage (HECM)', '/reverse-purchase'],
      ['Down Payment Assistance', '/dpa'],
      ['First-Generation Buyers', '/first-generation'],
      ['Investor & Builder', '/investor-builder'],
    ],
  },
  {
    label: 'Education',
    children: [
      ['Mortgage Education & Blog', '/education'],
      ['Our Loan Process', '/loan-process'],
      ['Mortgage Glossary', '/glossary'],
      ['VA Benefits', '/va-benefits'],
      ['Home Equity Analysis', '/equity-analysis-plan'],
      ['Refi Watchlist', '/refi1'],
    ],
  },
];

const ICON = {
  phone: '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
  facebook: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M14 8.5V6.8c0-.8.5-1 1-1h2.5V2h-3.4C10.4 2 9.6 4.7 9.6 6.4v2.1H7.5V12h2.1v10H14V12h3l.5-3.5z"/></svg>',
  instagram: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.8a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2zm6-8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM21.9 7c-.1-1.6-.4-3-1.6-4.2S17.6 1.2 16 1.1C14.3 1 9.7 1 8 1.1 6.4 1.2 5 1.5 3.8 2.7S2.2 5.4 2.1 7C2 8.7 2 13.3 2.1 15c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.7.1 6.3.1 8 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.7.1-6.3 0-8zm-2.3 10a3.1 3.1 0 0 1-1.8 1.8c-1.2.5-4.1.4-5.8.4s-4.6.1-5.8-.4A3.1 3.1 0 0 1 4.4 17c-.5-1.2-.4-4.1-.4-5.4s-.1-4.6.4-5.8a3.1 3.1 0 0 1 1.8-1.8C7.4 3.5 10.3 3.6 12 3.6s4.6-.1 5.8.4a3.1 3.1 0 0 1 1.8 1.8c.5 1.2.4 4.1.4 5.8s.1 4.2-.4 5.4z"/></svg>',
  linkedin: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.5 9.75h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4z"/></svg>',
  google: '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M21.6 10.2H12v3.9h5.5c-.5 2.5-2.6 3.9-5.5 3.9a6 6 0 1 1 3.9-10.6l2.9-2.8A10 10 0 1 0 12 22c5.8 0 9.9-4.1 9.9-9.8 0-.7-.1-1.3-.3-2z"/></svg>',
};

function header(path) {
  const items = NAV.map((item) => {
    if (!item.children) {
      const cur = item.href === path ? ' aria-current="page"' : '';
      const ext = item.external ? ' target="_blank" rel="noopener"' : '';
      return `<li><a href="${item.href}"${cur}${ext}>${esc(item.label)}</a></li>`;
    }
    const sub = item.children
      .map(([l, h]) => `<li><a href="${h}"${h === path ? ' aria-current="page"' : ''}>${esc(l)}</a></li>`)
      .join('');
    return `<li><button class="nav-top" type="button" aria-expanded="false">${esc(item.label)}</button><ul class="subnav">${sub}</ul></li>`;
  }).join('');
  return `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <div class="wrap header-inner">
    <a class="brand" href="/" aria-label="The Heichel Team home"><img src="/img/logo.svg" alt="The Heichel Team, powered by Fairway Home Mortgage" width="168" height="80"></a>
    <button class="nav-toggle" type="button" aria-controls="site-nav" aria-expanded="false"><span class="sr-only">Menu</span><span></span><span></span><span></span></button>
    <nav class="nav" id="site-nav" aria-label="Main">
      <ul>${items}</ul>
      <a class="btn btn-outline header-phone" href="tel:${SITE.phoneE164}">${ICON.phone} ${SITE.phone}</a>
    </nav>
  </div>
</header>`;
}

function footer() {
  const offices = SITE.offices.map((o) => `${esc(o.street)}, ${o.city}, ${o.state} ${o.zip}`).join('<br>');
  const legal = SITE.legal.map(([l, h]) => `<li><a href="${h}" target="_blank" rel="noopener">${esc(l)}</a></li>`).join('');
  return `<section class="footer-features" aria-label="Tools and credentials">
  <div class="wrap">
    <div class="footer-tools">
      <a href="/loan-programs"><strong>Loan Programs</strong><span>Compare every option side by side</span></a>
      <a href="/loan-process"><strong>Our Loan Process</strong><span>Nine steps from first call to moving day</span></a>
      <a href="/refi1"><strong>Refi Watchlist</strong><span>Track rates &amp; get notified</span></a>
    </div>
    <div class="grid grid-4">
      <div><h3>Awards &amp; Recognition</h3><ul>
        <li>Named to the Scotsman Guide Top Originators list</li>
        <li>President’s Club and Chairman’s Club recognition</li>
        <li>Voted “Best Mortgage Lender” – Best of Mower County</li>
        <li>Five Star Mortgage Professional recognition</li></ul></div>
      <div><h3>Experience &amp; Expertise</h3><ul>
        <li>20+ years in mortgage lending</li>
        <li>Specialized in helping first-time homebuyers</li>
        <li>VA loan expert serving military families</li>
        <li>Reverse mortgage specialist helping retirees</li>
        <li>Certified Divorce Lending Professional (CDLP)</li></ul></div>
      <div><h3>Customer Service</h3><ul>
        <li>${fmtAvg(REVIEW_DATA.average)}-star average review rating</li>
        <li>${fmtCount(REVIEW_DATA.total)}+ client reviews across Google, Zillow, Facebook and Experience.com</li>
        <li>Satisfaction scores above company averages</li>
        <li>Repeat and referral rates above industry benchmarks</li></ul></div>
      <div><h3>Community Involvement</h3><ul>
        <li>Partnered with local housing nonprofits</li>
        <li>First-time homebuyer education workshops</li>
        <li>Supported veteran housing initiatives</li>
        <li>Active in local chambers of commerce and real estate associations</li></ul></div>
    </div>
  </div>
</section>
<footer class="site-footer">
  <div class="wrap footer-grid">
    <div>
      <img class="footer-logo" src="/img/logo-white.webp" alt="The Heichel Team" width="180" height="86" loading="lazy">
      <p>The Heichel Team at Fairway Home Mortgage offers personalized home loans in Rochester, Austin &amp; Southeast Minnesota. FHA, VA, USDA, Conventional &amp; more. Get pre-approved today.</p>
      <ul class="social">
        <li><a href="${SITE.links.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${ICON.facebook}</a></li>
        <li><a href="${SITE.links.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICON.instagram}</a></li>
        <li><a href="${SITE.links.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${ICON.linkedin}</a></li>
        <li><a href="${SITE.links.google}" target="_blank" rel="noopener" aria-label="Google Business Profile">${ICON.google}</a></li>
      </ul>
    </div>
    <div>
      <h2>Contact</h2>
      <address>
        <strong>Kris Heichel with Fairway Home Mortgage</strong><br>
        NMLS# ${SITE.nmls} · Corporate NMLS #${SITE.companyNmls}<br>
        Licensed in ${SITE.licensedIn.join(', ')}<br><br>
        ${offices}<br><br>
        Phone: <a href="tel:${SITE.phoneE164}">${SITE.phone}</a><br>
        Email: <a href="mailto:${SITE.email}">${SITE.email}</a><br>
        Hours: ${SITE.hours}<br>
        Serving Minnesota and beyond since ${SITE.since}
      </address>
    </div>
    <div>
      <h2>Contact Us</h2>
      ${form('footer-contact', [
        { name: 'name', label: 'Name', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'message', label: 'Message', type: 'textarea' },
      ], { submit: 'Send', btnClass: 'btn-light' })}
    </div>
    <div>
      <h2>Areas We Serve</h2>
      <ul class="footer-links">
        <li><a href="/mortgage-lender/rochester-mn">Rochester, MN</a></li>
        <li><a href="/mortgage-lender/austin-mn">Austin, MN</a></li>
        <li><a href="/mortgage-lender/albert-lea-mn">Albert Lea, MN</a></li>
        <li><a href="/mortgage-lender/owatonna-mn">Owatonna, MN</a></li>
        <li><a href="/glossary">Mortgage Glossary</a></li>
      </ul>
      <h2 style="margin-top:1.5rem">Legal</h2>
      <ul class="footer-links">${legal}<li><a href="/photo-credits">Photo Credits</a></li></ul>
    </div>
  </div>
  <div class="wrap legal">
    <img class="awards-strip" src="/img/awards-strip.webp" alt="Awards and achievements: Scotsman Guide Top Originator, Best of Mower County, CDLP, Five Star, Minnesota Housing Top Producing Loan Officer and more" loading="lazy" width="520" height="72">
    <p>© ${new Date().getFullYear()} The Heichel Team, powered by Fairway Independent Mortgage Corporation. All rights reserved.</p>
    <p>This is not an offer to enter into an agreement. Not all customers will qualify. Information, rates and programs are subject to change without notice. All products are subject to credit and property approval. Other restrictions and limitations may apply. Equal Housing Lender. AZ License #${SITE.azLicense}.</p>
    <p>This site is not authorized by the New York State Department of Financial Services. No mortgage solicitation activity or loan applications for properties located in the State of New York can be facilitated through this site.</p>
    <img class="ehl" src="/img/equal-housing.webp" alt="Equal Housing Opportunity" loading="lazy" width="200" height="23">
  </div>
</footer>`;
}

/* ---------- Schema.org ---------- */
export const BUSINESS_ID = SITE.url + '/#business';
export const KRIS_ID = SITE.url + '/#kris';

export function baseGraph() {
  const offices = SITE.offices.map((o, i) => ({
    '@type': ['FinancialService', 'LocalBusiness'],
    '@id': `${SITE.url}/#office-${o.city.toLowerCase()}`,
    name: `The Heichel Team – ${o.city}, MN`,
    parentOrganization: { '@id': BUSINESS_ID },
    telephone: SITE.phoneE164,
    email: SITE.email,
    url: SITE.url + '/',
    image: abs('/img/team-office.webp'),
    address: { '@type': 'PostalAddress', streetAddress: o.street, addressLocality: o.city, addressRegion: o.state, postalCode: o.zip, addressCountry: 'US' },
    openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: SITE.hoursSpec.days, opens: SITE.hoursSpec.opens, closes: SITE.hoursSpec.closes },
  }));
  return [
    {
      '@type': ['FinancialService', 'Organization'],
      '@id': BUSINESS_ID,
      name: SITE.legalName,
      alternateName: ['The Heichel Team', 'Your Way Mortgage', 'Heichel Team Fairway Mortgage'],
      url: SITE.url + '/',
      logo: abs('/img/logo.svg'),
      image: abs('/img/team-office.webp'),
      description: SITE.description,
      telephone: SITE.phoneE164,
      email: SITE.email,
      foundingDate: String(SITE.since),
      slogan: SITE.tagline,
      address: { '@type': 'PostalAddress', streetAddress: SITE.offices[1].street, addressLocality: 'Rochester', addressRegion: 'MN', postalCode: SITE.offices[1].zip, addressCountry: 'US' },
      areaServed: [
        ...SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
        ...['Minnesota', 'Iowa', 'Wisconsin', 'South Dakota', 'Colorado', 'Arizona', 'Michigan'].map((name) => ({ '@type': 'State', name })),
      ],
      openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: SITE.hoursSpec.days, opens: SITE.hoursSpec.opens, closes: SITE.hoursSpec.closes },
      parentOrganization: { '@type': 'Organization', name: 'Fairway Independent Mortgage Corporation', url: 'https://www.fairway.com/', identifier: `NMLS #${SITE.companyNmls}` },
      employee: { '@id': KRIS_ID },
      subOrganization: offices.map((o) => ({ '@id': o['@id'] })),
      sameAs: [SITE.links.facebook, SITE.links.instagram, SITE.links.linkedin, SITE.links.google, SITE.links.reviews],
      knowsAbout: ['Conventional loans', 'FHA loans', 'VA loans', 'VA renovation loans', 'USDA loans', 'Jumbo loans', 'Renovation loans (FHA 203(k), Fannie Mae HomeStyle)', 'Reverse mortgages (HECM)', 'Down payment assistance', 'Minnesota Housing programs', 'Refinancing', 'DSCR investor loans', 'Divorce lending'],
      hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Home loan programs', url: abs('/loan-programs') },
      aggregateRating: { '@type': 'AggregateRating', ratingValue: REVIEW_DATA.average, reviewCount: REVIEW_DATA.total, bestRating: 5, worstRating: 1 },
    },
    ...offices,
    {
      '@type': 'Person',
      '@id': KRIS_ID,
      name: 'Kris Heichel',
      jobTitle: 'Branch Manager & Senior Loan Officer',
      description: 'Kris Heichel is a Southeast Minnesota mortgage loan officer (NMLS #27180) and Branch Manager of The Heichel Team at Fairway Home Mortgage in Rochester and Austin, MN, recognized among the Top 1% of mortgage originators nationwide by Scotsman Guide.',
      identifier: { '@type': 'PropertyValue', propertyID: 'NMLS', value: SITE.nmls },
      image: abs('/img/kris-headshot.webp'),
      url: abs('/kris'),
      telephone: SITE.phoneE164,
      email: SITE.email,
      worksFor: { '@id': BUSINESS_ID },
      hasCredential: [
        { '@type': 'EducationalOccupationalCredential', name: 'Certified Divorce Lending Professional (CDLP)' },
        { '@type': 'EducationalOccupationalCredential', name: 'NMLS Licensed Mortgage Loan Originator #27180' },
      ],
      award: [
        'Scotsman Guide Top Originators (2025, 2021, 2019, 2018, 2015)',
        'Scotsman Guide Top Women Originators (2025)',
        'Best of Mower County: Best Mortgage Lender – Austin Daily Herald (2025, 2023, 2021)',
        'Star Tribune Top 200 Workplaces in Minnesota (2025)',
        'Minnesota Housing Top Producing Loan Officer',
        'Fairway President’s Club (2017)',
        'Austin Area Chamber of Commerce Small Business of the Year (2020)',
        'Homes for Heroes Circle of Giving Award (2021)',
      ],
      memberOf: [
        { '@type': 'Organization', name: 'Austin Area Chamber of Commerce (Board, First Vice Chair)', url: 'https://www.austincoc.com/' },
        { '@type': 'Organization', name: 'Mower County CEO Board' },
        { '@type': 'Organization', name: 'Austin Port Authority' },
        { '@type': 'Organization', name: 'Austin/Mower County Homeownership Fund Board' },
        { '@type': 'Organization', name: 'Southeast Minnesota Realtors Membership Committee', url: 'https://www.semnrealtors.com/' },
      ],
      knowsAbout: ['Mortgage lending', 'First-time homebuyer programs', 'VA loans', 'Jumbo loans', 'Reverse mortgages', 'Down payment assistance'],
      sameAs: [SITE.links.linkedin, SITE.links.facebook, SITE.links.instagram, SITE.links.reviews],
    },
    {
      '@type': 'WebSite',
      '@id': SITE.url + '/#website',
      url: SITE.url + '/',
      name: 'The Heichel Team | Fairway Home Mortgage',
      publisher: { '@id': BUSINESS_ID },
      inLanguage: 'en-US',
    },
  ];
}

export const faqSchema = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: strip(q), acceptedAnswer: { '@type': 'Answer', text: strip(a) } })),
});

/* ---------- Page shell ---------- */
export function page({ path, title, description, body, crumbs, schema = [], ogImage = 'kris-hero', type = 'WebPage', extraHead = '', mainEntity }) {
  const url = abs(path);
  const graph = [...baseGraph()];
  const webpage = {
    '@type': type,
    '@id': url + '#webpage',
    url,
    name: title,
    description,
    isPartOf: { '@id': SITE.url + '/#website' },
    about: { '@id': BUSINESS_ID },
    inLanguage: 'en-US',
    dateModified: SITE.reviewed,
    primaryImageOfPage: abs(`/img/${ogImage}.webp`),
    ...(mainEntity ? { mainEntity } : {}),
  };
  if (crumbs) {
    webpage.breadcrumb = { '@id': url + '#breadcrumb' };
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': url + '#breadcrumb',
      itemListElement: [['Home', '/'], ...crumbs].map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(p) })),
    });
  }
  graph.push(webpage, ...schema);
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c');
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta property="og:type" content="${type === 'BlogPosting' ? 'article' : 'website'}">
<meta property="og:site_name" content="The Heichel Team | Fairway Home Mortgage">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${abs(`/img/${ogImage}.webp`)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#12505b">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Mrs+Saint+Delafield&family=Mulish:wght@400;600;700&family=Questrial&display=swap">
<link rel="stylesheet" href="/css/styles.css">
<link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-friendly site summary">
${extraHead}<script type="application/ld+json">${json}</script>
</head>
<body>
${header(path)}
<main id="main">
${body}
</main>
${footer()}
<script>window.SITE_FORM_ENDPOINT=${JSON.stringify(SITE.formEndpoint)};</script>
<script src="/js/main.js" defer></script>
</body>
</html>
`;
}

/* ---------- Components ---------- */
export function breadcrumbs(crumbs) {
  const all = [['Home', '/'], ...crumbs];
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol>${all
    .map(([n, p], i) => (i === all.length - 1 ? `<li aria-current="page">${esc(n)}</li>` : `<li><a href="${p}">${esc(n)}</a></li>`))
    .join('')}</ol></nav>`;
}

export function pageHero({ title, lede = '', crumbs, eyebrow = '', variant = '' }) {
  return `<section class="page-hero ${variant}"><div class="wrap">
${crumbs ? breadcrumbs(crumbs) : ''}
${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}<h1>${title}</h1>
${lede ? `<p class="lede">${lede}</p>` : ''}
</div></section>`;
}

/** Generic form. fields: {name,label,type,required,options,placeholder,half} */
export function form(name, fields, { submit = 'Send!', btnClass = 'btn-teal', note = '', hidden = {} } = {}) {
  const action = SITE.formEndpoint || '/thank-you';
  const f = (fl) => {
    const id = `${name}-${fl.name}`;
    const req = fl.required ? ' required' : '';
    const lbl = `<label for="${id}">${esc(fl.label)}${fl.required ? ' <span class="req" aria-hidden="true">*</span>' : ''}</label>`;
    let input;
    if (fl.type === 'textarea') input = `<textarea id="${id}" name="${fl.name}"${req}></textarea>`;
    else if (fl.type === 'select')
      input = `<select id="${id}" name="${fl.name}"${req}><option value="">Select…</option>${fl.options.map((o) => `<option>${esc(o)}</option>`).join('')}</select>`;
    else input = `<input id="${id}" name="${fl.name}" type="${fl.type || 'text'}"${fl.autocomplete ? ` autocomplete="${fl.autocomplete}"` : ''}${req}>`;
    return `<div class="field">${lbl}${input}</div>`;
  };
  // pair up fields marked half
  let out = '';
  for (let i = 0; i < fields.length; i++) {
    if (fields[i].half && fields[i + 1]?.half) {
      out += `<div class="form-row">${f(fields[i])}${f(fields[i + 1])}</div>`;
      i++;
    } else out += f(fields[i]);
  }
  const hid = Object.entries(hidden).map(([k, v]) => `<input type="hidden" name="${k}" value="${esc(v)}">`).join('');
  return `<form class="form" name="${name}" method="POST" action="${action}" data-form data-netlify="true" netlify-honeypot="company">
<input type="hidden" name="form-name" value="${name}"><input type="hidden" name="page" value="">${hid}
<p class="hp"><label>Leave this empty <input name="company" tabindex="-1" autocomplete="off"></label></p>
${out}
${note ? `<p class="form-note">${note}</p>` : ''}
<div><button class="btn ${btnClass}" type="submit">${esc(submit)}</button></div>
<p class="form-status" role="status" aria-live="polite"></p>
</form>`;
}

export const RATE_OPTIONS = ['2% - 3%', '3% - 4%', '4% - 5%', '5% - 6%', '6% - 7%', 'Over 7%'];
export const CREDIT_OPTIONS = ['< 620', '620 - 640', '640 - 700', '700 - 740', '740 +'];

export const contactFields = [
  { name: 'first_name', label: 'First Name', required: true, half: true, autocomplete: 'given-name' },
  { name: 'last_name', label: 'Last Name', required: true, half: true, autocomplete: 'family-name' },
  { name: 'email', label: 'Email', type: 'email', required: true, half: true, autocomplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', half: true, autocomplete: 'tel' },
  { name: 'subject', label: 'Subject', required: true },
  { name: 'message', label: 'Message', type: 'textarea', required: true },
];

export const calendly = () => `<div class="calendly-box" data-calendly="${SITE.links.calendly}">
<div class="calendly-fallback"><p>Pick a time that works for you.</p><a class="btn btn-teal" href="${SITE.links.calendly}" target="_blank" rel="noopener">Open the scheduler</a></div>
</div>`;

/** "Have Questions?" block used at the bottom of program pages. */
export function haveQuestions(formName = 'have-questions') {
  return `<section class="section bg-mist-soft" id="contact"><div class="wrap">
<h2 class="center">Have Questions?</h2>
<p class="lede center">Book a time on Kris’s calendar or send the team a message. Call <a href="tel:${SITE.phoneE164}">${SITE.phone}</a> any weekday, 8am–8pm.</p>
<div class="grid grid-2" style="margin-top:2rem">
  <div class="card"><h3 class="label center">Book a Call</h3>${calendly()}</div>
  <div class="card"><h3 class="label center">Send Us a Message</h3>${form(formName, contactFields)}</div>
</div></div></section>`;
}

export function faqList(faqs, { cols = 2 } = {}) {
  return `<div class="faq${cols === 1 ? ' faq-1' : ''}">${faqs
    .map(([q, a]) => `<details><summary>${esc(q)}</summary><div class="faq-a">${a.startsWith('<') ? a : `<p>${a}</p>`}</div></details>`)
    .join('')}</div>`;
}

export function ctaStrip(title = 'Ready to see where you stand?', text = 'Get pre-approved or ask a question. No pressure, no jargon.') {
  return `<div class="cta-strip"><div><h2>${title}</h2><p>${text}</p></div>
<div class="btn-row" style="margin:0"><a class="btn btn-gold" href="${SITE.links.apply}" target="_blank" rel="noopener">Start Your Application</a><a class="btn btn-ghost" href="/schedule">Free Consultation</a></div></div>`;
}

export const REVIEWS = [
  ['As a first time home buyer, I really appreciated how Kris took her time to go over everything at the pace that made me comfortable. Throughout the entire process of buying my home she communicated often with me and my Realtor. I always felt like I was getting personal service. Kris is the epitome of customer service and a true professional. I’m in my first home because of her and her team.', 'Eric J S', 'Rochester, MN', '2026-04-11'],
  ['Fairway and their team worked tirelessly throughout the entire process, making it a smooth transition in buying our new home. Communication from the team couldn’t be better and updates from start to finish all the way. The team was friendly and caring, I feel they were on my side every step.', 'James E', 'Albert Lea, MN', '2026-04-05'],
  ['Kris went above and beyond, starting with a pre-approval letter on a weekend. There was great communication throughout the loan process updating me. My questions were answered very quickly. Very professional and personable. I highly recommend working with Kris and her team.', 'Lorri L H', 'Austin, MN', '2026-03-14'],
  ['Responsive. Concise. Fair. Great and easy to use website and app. It was a great experience working with you guys, probably couldn’t have gone smoother. Thanks again.', 'Robert T J', 'Avon, MN', '2026-03-03'],
  ['The overall experience was very comfortable from start to finish. Kris and her team made it very easy to work with and answered any questions or concerns to keep us very informed.', 'Christopher G', 'Dodge Center, MN', '2026-04-28'],
  ['Such a great process, it went so fast and smooth. Everyone was so friendly, helpful answering any questions I had, overall amazing process from start to finish!', 'Chelsey F', 'Dodge Center, MN', '2026-04-27'],
  ['Everyone was so friendly, kept me informed of the progress and broke it down easily for a first time homebuyer who doesn’t understand.', 'Chelsey F', 'Dodge Center, MN', '2026-04-27'],
  ['The team was easy to communicate with and everyone responded quickly.', 'Isaac S', 'Austin, MN', '2026-04-21'],
];

const fmtDate = (d) => new Date(d + 'T12:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
export { fmtDate };

export function reviewsSection() {
  // Latest synced reviews first, then the hand-picked ones from the original site.
  const synced = REVIEW_DATA.reviews.map((r) => [r.text, r.name, r.city, r.date, r.source, r.rating]);
  const seen = new Set(synced.map((r) => r[1]));
  const all = [...synced, ...REVIEWS.filter((r) => !seen.has(r[1])).map((r) => [...r, '', 5])];
  const stars = (n) => '★'.repeat(Math.round(n)) + '☆'.repeat(5 - Math.round(n));
  const cards = all.map(
    ([t, n, c, d, src, rating]) => `<figure class="review"><span class="stars" aria-label="${rating} out of 5 stars">${stars(rating)}</span><blockquote><p>“${esc(t)}”</p></blockquote>
<figcaption><strong>${esc(n)}</strong>${c ? esc(c) + ' · ' : ''}<time datetime="${d}">${fmtDate(d)}</time>${src ? ' · via ' + esc(src) : ''}</figcaption></figure>`
  ).join('');
  const sources = REVIEW_DATA.bySource.map((x) => `<li><strong>${fmtAvg(x.average)}</strong> ${esc(x.name)} <span>(${fmtCount(x.count)})</span></li>`).join('');
  return `<section class="section" aria-labelledby="reviews-h"><div class="wrap">
<div class="banner"><div><span class="eyebrow">Serving Minnesota and beyond since ${SITE.since}</span><h2 id="reviews-h">What people are saying about us.</h2></div>
<a class="btn btn-teal arrow" href="${SITE.links.reviews}" target="_blank" rel="noopener">Read All ${fmtCount(REVIEW_DATA.total)} Reviews</a></div>
<hr class="rule">
<div class="rating-summary">
  <p class="rating-big"><span class="rating-num">${fmtAvg(REVIEW_DATA.average)}</span><span class="stars" aria-hidden="true">★★★★★</span><span>average from ${fmtCount(REVIEW_DATA.total)} reviews for Kris Heichel</span></p>
  <ul class="rating-sources" aria-label="Ratings by source">${sources}</ul>
  <p class="form-note">Synced from <a href="${REVIEW_DATA.source}" target="_blank" rel="noopener">Experience.com</a>, which combines Kris’s reviews from each source. Updated <time datetime="${REVIEW_DATA.fetchedAt}">${fmtDate(REVIEW_DATA.fetchedAt)}</time>.</p>
</div>
<div class="slider" data-slider>
  <div class="slider-track reviews" tabindex="0" role="region" aria-roledescription="carousel" aria-label="Client reviews">${cards}</div>
  <div class="slider-controls">
    <button type="button" class="slider-btn" data-dir="-1" aria-label="Previous reviews">‹</button>
    <div class="slider-dots" aria-hidden="true"></div>
    <button type="button" class="slider-btn" data-dir="1" aria-label="Next reviews">›</button>
  </div>
</div>
</div></section>`;
}
