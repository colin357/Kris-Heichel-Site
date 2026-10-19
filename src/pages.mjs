// Every page on the site. Each entry: { path, html }.
import { SITE } from './site.mjs';
import { LOANS } from './loans.mjs';
import { POSTS, CATEGORIES } from './blog.mjs';
import {
  page, pageHero, breadcrumbs, img, esc, abs, form, faqList, faqSchema, haveQuestions, ctaStrip, quiz, calendly,
  reviewsSection, contactFields, RATE_OPTIONS, CREDIT_OPTIONS, BUSINESS_ID, KRIS_ID, fmtDate,
} from './lib.mjs';

const apply = (label = 'Start Your Application', cls = 'btn-gold') =>
  `<a class="btn ${cls}" href="${SITE.links.apply}" target="_blank" rel="noopener">${label}</a>`;

/* ================= Shared FAQ content ================= */
const HOME_FAQS = [
  ['Do I have to get pre-approved before house hunting?', 'You don’t have to, but you really should. Pre-approval shows sellers you’re serious, helps you know what you can afford, and saves you from falling in love with homes that aren’t in the cards. Think of it as a financial flashlight for your home search.'],
  ['How much money do I need to buy a house?', 'It depends on the loan, the market and your situation. Some buyers can get in with as little as 3% down (or $0 down with VA and USDA loans). Others may want to put 20% down to skip mortgage insurance. We’ll help you find the sweet spot that makes the most sense for your wallet and your goals.'],
  ['What’s the deal with interest rates right now?', 'They change daily, kind of like gas prices but with more financial consequences. We’ll show you your actual rate options based on your credit, income and goals, not whatever you just saw on Google.'],
  ['Is it even worth buying right now?', 'Totally fair question. There’s no one-size-fits-all answer. We’ll walk through your finances, goals and lifestyle to see if buying makes sense or if waiting is smarter. We don’t push. We advise.'],
  ['What is a rate buy-down and should I do it?', 'A buy-down means you pay more upfront to get a lower rate and monthly payment. Sometimes it’s worth it, sometimes it’s a waste. We’ll run the break-even math with you to see if it pays off in your situation.'],
  ['What credit score do I need to qualify?', 'Generally, a 620 gets you in the door for most conventional loans, and FHA can go lower. Better scores mean better rates. We’ve helped clients with all kinds of credit scenarios, and if your score isn’t where you want it, we can help build a plan to improve it.'],
  ['Can I still get a loan if I’m self-employed?', 'Yes. And no, you don’t need to show a W-2. We get creative with tax returns, bank statements, 1099s, you name it. We understand how business owners work and we know how to present your income properly.'],
  ['What’s the difference between a pre-qualification and a pre-approval?', 'Pre-qualification is a rough estimate. Pre-approval is backed by actual documentation and a credit review. Sellers trust the latter, and so should you. We can help with both, but pre-approval is where the magic happens.'],
  ['How long does the loan process take?', 'On average, about 30 days. Sometimes faster (our team often closes in 10 days or less), sometimes longer, especially if you’re refinancing or the property has quirks. We’ll keep you in the loop the whole time so you’re never left guessing.'],
  ['Will applying for a mortgage hurt my credit?', 'A little, but not in a scary way. A mortgage credit check is a hard inquiry that usually lowers your score by only a few points, and multiple mortgage inquiries within a short rate-shopping window are generally counted as one.'],
  ['Can I use gift money for my down payment?', 'Yes. In most cases, you can use funds from a family member or close friend. Just be ready to show a paper trail and a simple gift letter. We’ll help you get it all dialed in.'],
  ['What if I don’t have a perfect job history?', 'You don’t need to be perfect. Lenders usually want two years of consistent income, but that doesn’t mean you had to stay at the same job the whole time. We’ll take a look and see how your story adds up.'],
  ['Can you help me refinance to get rid of PMI?', 'Absolutely. If your home has gained value or you’ve paid down enough of the loan, we’ll show you how to ditch PMI and lower your monthly payment.'],
  ['Do I need 20 percent down to avoid PMI?', 'Not always. VA loans have no PMI, and there are other creative options. Sometimes it actually makes sense to pay PMI so you can buy sooner. We’ll help you look at the big picture.'],
];

const EDU_FAQS = [
  ['How do I qualify for a loan?', 'Qualifying for a loan depends on several factors including your credit score, income, employment history and debt-to-income ratio. We evaluate these factors to determine your eligibility and the best loan options for you.'],
  ['How can I improve my chances of getting approved for a loan?', 'Improving your credit score, reducing existing debts and ensuring a stable income can enhance your loan approval chances. The best way to set yourself up for success is to get pre-approved early so we can look at your situation and give you a plan custom fit to your needs.'],
  ['Do I need 20% down to buy a home?', 'No, you do not need 20% down to buy a home. There are loan programs that allow lower down payments, even as little as 3% down for qualified buyers. When you put less than 20% down you will have PMI (private mortgage insurance). PMI is a useful tool for homebuyers and is not something to be afraid of.'],
  ['Can I get a loan if I have low credit?', 'Yes, it’s possible to get a loan with low credit, though the options and interest rates may vary compared to those with higher credit scores. We offer a range of products for different credit profiles and can provide guidance on how to improve your credit to qualify for better terms.'],
  ['What is PMI, and is it bad?', 'PMI, or private mortgage insurance, is insurance lenders require from borrowers who put down less than 20% on a conventional loan. It protects the lender in case of default. PMI is not a bad thing; it’s a powerful homebuying tool. With decent credit, PMI can be inexpensive and it lets buyers purchase without a 20% down payment.'],
];

const REFI_FAQS = [
  ['How do I know if refinancing is right for me?', 'If interest rates have dropped, your financial situation has improved, or you want to adjust your loan term, refinancing might make sense. Our loan officers can help you weigh the benefits and determine if it’s a good fit.'],
  ['What do I need to get started with a refinance?', 'You’ll need documents like pay stubs, tax returns and details about your current mortgage. Our team will guide you through everything you need to gather.'],
  ['Are there any costs associated with refinancing?', 'Yes, refinancing involves costs like appraisal fees and closing costs. We’ll help you calculate whether the savings from refinancing outweigh the upfront expenses, and how long it takes to break even.'],
  ['How long does the refinancing process take?', 'The refinancing process typically takes 30–45 days, but timelines can vary. Our team works efficiently to get you to the finish line as quickly as possible.'],
  ['Can I refinance if my credit score isn’t perfect?', 'While a higher credit score can qualify you for better rates, there are still options for those with less-than-perfect credit. Let us explore the best solution for your situation.'],
];

/* ================= Home ================= */
function home() {
  const goals = [
    ['help-purchase', 'Purchase the Smart Way', '/quiz', 'Brick home with arched front entry'],
    ['help-equity', 'Tap Into Your Equity Without Selling', '/equity-analysis-plan', 'Bright open-concept kitchen'],
    ['help-investment', 'Buy an Investment Property', '/investor-builder', 'Two-story home with stone accents'],
    ['help-pmi', 'Eliminate Your Mortgage Insurance', '/refi-quiz', 'Living room with large windows'],
    ['help-payoff', 'Pay Off Your Home Faster (Save Thousands)', '/refi-quiz', 'Cozy living room with fireplace'],
  ];
  const body = `
<section class="hero" style="background-image:url('/img/hero-house.webp')">
  <div class="wrap hero-inner">
    <div>
      <h1>Reliable Mortgage Solutions Tailored To You</h1>
      <p class="lede">The Heichel Team at Fairway Home Mortgage helps families in Rochester, Austin and all of Southeast Minnesota buy, build, renovate and refinance. We’ve made the home loan process simple and smooth for over 20 years.</p>
      <div class="btn-row">${apply()}<a class="btn btn-teal" href="/schedule">Free Consultation</a></div>
    </div>
    ${img('kris-hero', 'Kris Heichel, Branch Manager and Senior Loan Officer, smiling in her office', { cls: 'hero-photo', eager: true, w: 550, h: 510 })}
  </div>
  <ul class="stats wrap" aria-label="By the numbers">
    <li>Funded over<strong>$100 million</strong>in home loans</li>
    <li>Helped<strong>500+ families</strong>achieve homeownership</li>
    <li>Closed<strong>200+ loans</strong>in a single year</li>
    <li>Maintained a<strong>95%+</strong>on-time closing rate</li>
    <li>Ranked in the<strong>Top 1%</strong>of loan officers nationally</li>
  </ul>
</section>

<section class="section-tight"><div class="wrap">
  ${quiz('purchase', { heading: 'Check Your Buying Readiness in 60 Seconds', sub: 'No credit pull. Instant results.' })}
</div></section>

<section class="section-tight bg-teal"><div class="wrap banner">
  <h2>Your VA Benefit Can Do <em>More</em> Than You Think</h2>
  <a class="btn btn-gold arrow" href="/va-benefits">Learn More About VA Loans</a>
</div></section>

<section class="section"><div class="wrap">
  <h2>What We Can Help You Achieve</h2><hr class="rule">
  <div class="grid grid-5">${goals.map(([i, t, h, a]) => `<a class="goal-card" href="${h}">${img(i, a, { w: 300, h: 300 })}<span class="label">${t}</span><span class="more">Let’s Go</span></a>`).join('')}</div>
</div></section>

<section class="section-tight bg-slate"><div class="wrap split">
  <div>
    <h2>Stay Ready to Refi</h2>
    <span class="eyebrow">Get notified when rates drop</span>
    <p>Get notified when it’s the right time to refinance. Smart alerts based on your current loan and goals.</p>
  </div>
  <div>${form('refi-watchlist-home', [
    { name: 'name', label: 'Name', required: true, half: true, autocomplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, half: true, autocomplete: 'email' },
    { name: 'current_rate', label: 'Current Rate', type: 'select', options: RATE_OPTIONS, required: true },
  ], { submit: 'Join The List', btnClass: 'btn-gold' })}</div>
</div></section>

<section class="section bg-mist"><div class="wrap">
  <div class="center"><span class="eyebrow">Rochester’s trusted mortgage team</span><h2>Meet the Heichel Team</h2></div>
  <div class="split" style="margin-top:2rem;align-items:start">
    <div>
      <p>At The Heichel Team in Rochester and Austin, MN, we help homebuyers and homeowners navigate the mortgage process with clarity, speed and confidence. As part of Fairway Home Mortgage, we combine local expertise with nationwide strength to deliver an experience that’s anything but ordinary.</p>
      <p>With over <strong>$750 million in funded loans</strong> and more than <strong>30 years of combined mortgage experience</strong>, our team has helped <strong>over 2,000 families</strong> purchase or refinance their homes. We specialize in VA, FHA, Conventional, Jumbo and Reverse Mortgage financing, so no matter where you are in life, we have a solution built for you.</p>
      <p><a href="/kris">Kris Heichel</a> is a <strong>Top 1% Mortgage Originator recognized by the Scotsman Guide</strong>, one of the most prestigious rankings in the mortgage industry. As First Vice Chair of the Austin Area Chamber of Commerce board, Kris is deeply rooted in the communities she serves.</p>
    </div>
    <div>
      <p>That commitment shows up in the numbers: a <strong>4.9-star rating from hundreds of verified reviews</strong>, and a reputation built one family at a time.</p>
      <p>Whether you’re a first-time homebuyer, VA borrower, move-up buyer or looking to refinance, our team delivers personalized solutions and fast closings, often in 10 days or less. We’re known for heart-driven service, clear communication and creative loan strategies that make the complex feel simple.</p>
      <p>Outside of work, our team is fueled by the same things that matter most to our clients: traveling, great food and making memories with family. Serving Rochester and all of Southeast Minnesota, our goal is simple: become the #1 local mortgage team, one family, one home, one closing at a time.</p>
    </div>
  </div>
  <div class="grid grid-2" style="margin-top:2rem">
    <div class="photo-card">${img('team-office', 'The Heichel Team standing outside their Fairway Home Mortgage office in Austin, MN', { w: 700, h: 525 })}<a class="btn btn-gold" href="/team">Meet the Team</a></div>
    <div class="photo-card">${img('house-stone', 'Two-story stone and siding home with a three-car garage', { w: 700, h: 525 })}${apply('Start Your Application', 'btn-teal')}</div>
  </div>
</div></section>

<section class="section bg-teal"><div class="wrap split">
  ${img('hidden-market', 'The Hidden Market: Understanding Reverse Mortgages course cover, hosted by Agent Excel', { cls: 'rounded', w: 600, h: 338 })}
  <div>
    <h2>The Hidden Market</h2>
    <span class="eyebrow">Understanding Reverse Mortgages | 3 MN Realtor CE Credits</span>
    <p><strong>Realtors: your next opportunity may already be in your database.</strong></p>
    <p>Discover another strategy for creating possibilities when traditional financing may not be the best fit. This 3-credit Minnesota CE course will help you understand how reverse mortgages can open new conversations with past clients, buyers and sellers, and give you another valuable tool for your real estate business.</p>
    <p class="eyebrow">Taught by Kelly Kelly | Hosted by Agent Excel<br>$10 registration | 3 MN CE credits</p>
    <a class="btn btn-gold" href="${SITE.links.hiddenMarketClass}" target="_blank" rel="noopener">Register for the Class</a>
  </div>
</div></section>

${reviewsSection()}

<section class="section-tight"><div class="wrap split">
  <div>
    <h2>What Is the Mortgage Application Process Like?</h2>
    <p>The mortgage application process typically involves filling out an application, submitting documentation such as proof of income and assets, undergoing a credit check, and getting an appraisal of the property. The lender then reviews your application and approves or denies your loan. If approved, you sign the loan agreement and complete any other necessary paperwork before closing on the loan.</p>
    <a class="btn btn-teal" href="/loan-process">See Our 9-Step Process</a>
  </div>
  ${img('family-new-home', 'Young family with a baby in their new home', { cls: 'rounded', w: 600, h: 400 })}
</div></section>

<section class="section-tight"><div class="wrap split">
  ${img('house-modern-stone', 'Modern home with stone exterior at dusk', { cls: 'rounded', w: 500, h: 400 })}
  <div>
    <h2>Rate Update</h2>
    <p>Today’s average mortgage rates by loan type. Rates change daily; <a href="/schedule">talk with us</a> for a quote based on your credit, down payment and goals.</p>
    <iframe class="embed-frame" title="Current mortgage rate index" src="${SITE.links.rateWidget}" height="482" loading="lazy"></iframe>
  </div>
</div></section>

<section class="section bg-mist" aria-labelledby="faq-h"><div class="wrap">
  <div class="center"><span class="eyebrow">The mortgage industry is like a foreign language…</span><h2 id="faq-h">Frequently Asked Questions</h2>
  <p class="lede">Just what you need to know to make smart moves with your mortgage.</p></div>
  <div style="margin-top:2rem">${faqList(HOME_FAQS)}</div>
</div></section>`;
  return page({
    path: '/',
    title: 'Kris Heichel | The Heichel Team | Fairway Mortgage | Rochester & Austin, MN',
    description: SITE.description,
    body,
    schema: [faqSchema(HOME_FAQS)],
  });
}

/* ================= Loan programs ================= */
function loanPrograms() {
  const crumbs = [['Loan Programs', '/loan-programs']];
  const main = LOANS.filter((l) => !['dpa', 'first-generation', 'investor-builder'].includes(l.slug));
  const special = LOANS.filter((l) => ['dpa', 'first-generation', 'investor-builder'].includes(l.slug));
  const card = (l) => `<a class="card card-link" href="/${l.slug}"><h3>${esc(l.name)}</h3><p>${esc(l.card)}</p><p class="fit"><strong>Good fit for:</strong> ${esc(l.fit)}</p><span class="more">Learn more</span></a>`;
  const compare = `<table class="facts"><caption>Compare loan programs at a glance</caption>
<thead><tr><th scope="col">Program</th><th scope="col">Minimum down</th><th scope="col">Mortgage insurance</th><th scope="col">Typical credit</th></tr></thead><tbody>
<tr><th scope="row"><a href="/conventional">Conventional</a></th><td>3%</td><td>PMI under 20% down; removable</td><td>620+</td></tr>
<tr><th scope="row"><a href="/fha">FHA</a></th><td>3.5% (580+)</td><td>Upfront + annual MIP</td><td>500–580+</td></tr>
<tr><th scope="row"><a href="/va">VA</a></th><td>$0</td><td>None (one-time funding fee)</td><td>Flexible</td></tr>
<tr><th scope="row"><a href="/usda">USDA</a></th><td>$0</td><td>Guarantee fee + annual fee</td><td>~640</td></tr>
<tr><th scope="row"><a href="/jumbo">Jumbo</a></th><td>10% (primary)</td><td>Varies</td><td>Higher</td></tr>
<tr><th scope="row"><a href="/reverse-purchase">Reverse (HECM)</a></th><td>Age 62+; equity required</td><td>FHA-insured</td><td>Financial assessment</td></tr>
</tbody></table>`;
  const body = `${pageHero({ title: 'Available Loan Programs', lede: 'From first homes to forever homes, fixer-uppers to retirement, here’s every way The Heichel Team can finance your next move in Southeast Minnesota and beyond.', crumbs })}
<section class="section"><div class="wrap">
  <div class="answer"><span class="label">Quick answer</span><p>The Heichel Team offers Conventional, FHA, VA, USDA, Jumbo, fixed- and adjustable-rate, renovation (HomeStyle® and FHA 203(k)) and reverse (HECM) mortgages, plus down payment assistance, first-generation homebuyer programs and investor and builder loans. The right fit depends on your credit, down payment, property and goals.</p></div>
  ${compare}
  <div class="grid grid-3">${main.map(card).join('')}</div>
  <h2 style="margin-top:3rem">Specialty &amp; Assistance</h2><hr class="rule">
  <div class="grid grid-3">${special.map(card).join('')}</div>
  <div class="cta-strip" style="margin-top:3rem"><div><h2>Real estate agent?</h2><p>Download our Agent Handbook for program guidelines and partner resources.</p></div><a class="btn btn-gold" href="${SITE.links.agentHandbook}" target="_blank" rel="noopener">Get a Copy</a></div>
</div></section>`;
  return page({
    path: '/loan-programs',
    title: 'Mortgage Loan Programs | Rochester & Austin, MN | The Heichel Team',
    description: 'Compare Conventional, FHA, VA, USDA, Jumbo, ARM, renovation and reverse mortgages, plus down payment assistance and investor loans, from The Heichel Team at Fairway in Southeast Minnesota.',
    body,
    crumbs,
    schema: [{
      '@type': 'ItemList',
      name: 'Home loan programs offered by The Heichel Team',
      itemListElement: LOANS.map((l, i) => ({ '@type': 'ListItem', position: i + 1, name: l.name, url: abs('/' + l.slug) })),
    }],
  });
}

function loanPage(l) {
  const path = '/' + l.slug;
  const crumbs = [['Loan Programs', '/loan-programs'], [l.name, path]];
  const sections = l.sections.map(([h, t]) => `<h3 class="label">${esc(h)}</h3>${t.startsWith('<') ? t : `<p>${t}</p>`}`).join('');
  const body = `${pageHero({ title: esc(l.h1), crumbs, eyebrow: l.eyebrow })}
<section class="section"><div class="wrap">
  <div class="split" style="align-items:start">
    <div>
      <p class="lede" style="color:var(--ink)">${l.intro}</p>
      <div class="answer"><span class="label">Quick answer</span><p>${l.answer}</p></div>
      <h2 class="label">Highlights</h2>
      <ul class="checks">${l.highlights.map((h) => `<li>${esc(h)}</li>`).join('')}</ul>
      ${l.note ? `<p class="form-note">${esc(l.note)}</p>` : ''}
    </div>
    <div>
      ${img(l.image[0], l.image[1], { cls: 'rounded shadow cover loan-photo', w: 560, h: 420 })}
      <table class="facts" style="margin-top:28px"><caption>${esc(l.name)} at a glance</caption><tbody>
      ${l.facts.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}
      </tbody></table>
    </div>
  </div>
</div></section>
<section class="section bg-teal"><div class="wrap"><div class="card" style="color:var(--ink)">
  ${sections}
  <p style="margin-top:1.5rem"><a class="more" href="${SITE.links.agentHandbook}" target="_blank" rel="noopener">Download the Agent Handbook</a>${l.related ? ` &nbsp;·&nbsp; <a class="more" href="${l.related[0]}">${esc(l.related[1])}</a>` : ''}</p>
</div></div></section>
<section class="section"><div class="wrap wrap-narrow">
  <h2 class="center">${esc(l.name)} FAQs</h2>
  <div style="margin-top:1.5rem">${faqList(l.faqs, { cols: 1 })}</div>
  <p class="reviewed center">Reviewed by <a href="/kris">Kris Heichel</a>, Branch Manager &amp; Senior Loan Officer, NMLS #${SITE.nmls} · Updated <time datetime="${SITE.reviewed}">${fmtDate(SITE.reviewed)}</time>. Program guidelines change; contact us for current requirements.</p>
</div></section>
<section class="section-tight"><div class="wrap">${ctaStrip(['dpa', 'first-generation', 'investor-builder'].includes(l.slug) ? 'Could these programs work for you?' : `Is ${/^(FHA|[AEIOU])/.test(l.name) ? 'an' : 'a'} ${esc(l.name.replace(/ \(.*\)/, ''))} right for you?`, 'Get a side-by-side comparison of your options in one quick conversation.')}</div></section>
${haveQuestions()}`;
  return page({
    path,
    title: l.title,
    description: l.description,
    body,
    crumbs,
    ogImage: l.image[0],
    schema: [
      faqSchema(l.faqs),
      {
        '@type': l.slug === 'dpa' || l.slug === 'first-generation' ? 'FinancialProduct' : 'LoanOrCredit',
        '@id': abs(path) + '#product',
        name: l.name,
        description: l.answer,
        url: abs(path),
        provider: { '@id': BUSINESS_ID },
        areaServed: SITE.areaServed.map((name) => ({ '@type': 'Place', name })),
        ...(l.slug === 'dpa' || l.slug === 'first-generation' ? {} : { loanType: 'Mortgage' }),
      },
    ],
  });
}

/* ================= About ================= */
const TEAM = [
  ['Julie Maloney', 'Branch Executive Assistant', 'team-julie-maloney'],
  ['Melony Berndt', 'Production Partner', 'team-melony-berndt'],
  ['Holly Johnson', 'Production Partner', 'team-holly-johnson'],
  ['Bri Masching', 'Marketing Specialist', 'team-bri-masching'],
  ['Andrea Barrera', 'Operations Manager', 'team-andrea-barrera'],
  ['Claire Heichel', 'Branch Closer and Funder', 'team-claire-heichel'],
  ['Holly Schmitz', 'Client Care Specialist', 'team-holly-schmitz'],
];

function team() {
  const crumbs = [['About Us', '/team']];
  const body = `<section class="page-hero page-hero-teal"><div class="wrap">
${breadcrumbs(crumbs)}<span class="eyebrow">About us</span><h1>Meet Our Team</h1>
<p class="lede">Providing reliable mortgage solutions with unwavering dedication, knowledge and experience for easy home buying or refinancing at any milestone.</p>
</div></section>
<section class="section"><div class="wrap split">
  ${img('team-office', 'The Heichel Team outside their Fairway Home Mortgage branch', { cls: 'rounded shadow', w: 600, h: 400 })}
  <div>
    <p>The Heichel Team at Fairway Mortgage helps homebuyers in Rochester, Austin and Southeast Minnesota confidently navigate the mortgage process and get into the right home.</p>
    <p>Whether you’re a first-time buyer, using MN Housing assistance, a veteran exploring VA benefits, or planning your next move, we make the process simple, clear and stress-free from application to closing.</p>
    <p>Our team specializes in low down payment options, down payment assistance programs, and strategic financing solutions like rate buydowns and bridge loans. We’ll walk you through your options so you understand exactly what’s possible and what it takes to get there.</p>
    <p><strong>What sets us apart?</strong> Local expertise, fast closings, and a team that actually answers the phone. We keep you and your agent informed every step of the way so there are no surprises. We don’t just close loans. We help you move forward with confidence.</p>
    <div class="btn-row"><a class="btn btn-teal" href="/quiz">Take the 60-Second Quiz</a><a class="btn btn-outline" href="/schedule">Talk with Kris</a></div>
  </div>
</div></section>
<section class="section bg-mist-soft"><div class="wrap split">
  ${img('kris-portrait', 'Kris Heichel, Branch Manager and Loan Officer', { cls: 'rounded shadow', w: 500, h: 500 })}
  <div>
    <h2>Kris Heichel</h2>
    <span class="eyebrow">Branch Manager &amp; Loan Officer · NMLS #${SITE.nmls}</span>
    <p>With over two decades of experience in the mortgage industry, Kris serves as the Branch Manager and Senior Loan Officer for The Heichel Team, powered by Fairway Independent Mortgage Corporation (NMLS #${SITE.companyNmls}), in Rochester and Austin, Minnesota.</p>
    <p>A proud Southeast Minnesota native, Kris began her career in 2004 and has since earned recognition among the Top 1% of Mortgage Originators nationwide, as well as multiple President’s Club and Chairman’s Club honors within Fairway. Specializing in customized lending solutions, from first-time homebuyer programs to complex and jumbo loans, Kris approaches every transaction with expertise, efficiency and care.</p>
    <p>Her relentless dedication and client-first mindset have made her a trusted partner to both homebuyers and real estate professionals across the region.</p>
    <p><a href="mailto:${SITE.email}">${SITE.email}</a> · <a href="tel:${SITE.phoneE164}">${SITE.phone}</a> · <a href="https://share.google/QmDU4eyLjmMqLDWPP" target="_blank" rel="noopener">Google Business Profile (5.0 ★, 274 reviews)</a></p>
    <a class="btn btn-teal" href="/kris">More About Kris</a>
  </div>
</div></section>
<section class="section"><div class="wrap">
  <h2 class="center">The People Behind Your Loan</h2>
  <div class="team-grid" style="margin-top:2rem">${TEAM.map(([n, r, i]) => `<figure class="member">${img(i, `${n}, ${r} at The Heichel Team`, { w: 300, h: 400 })}<figcaption><strong>${n}</strong><span>${r}</span></figcaption></figure>`).join('')}</div>
</div></section>
<section class="section-tight"><div class="wrap">${ctaStrip()}</div></section>`;
  return page({
    path: '/team',
    title: 'Meet The Heichel Team | Mortgage Lenders in Rochester & Austin, MN',
    description: 'Meet Kris Heichel and The Heichel Team at Fairway Home Mortgage: local mortgage experts in Rochester, Austin and Southeast Minnesota known for fast closings and clear communication.',
    body,
    crumbs,
    ogImage: 'team-office',
    type: 'AboutPage',
    schema: TEAM.map(([n, r]) => ({ '@type': 'Person', name: n, jobTitle: r, worksFor: { '@id': BUSINESS_ID } })),
  });
}

function kris() {
  const crumbs = [['About Us', '/team'], ['Who is Kris?', '/kris']];
  const boards = [
    ['Austin Area Chamber of Commerce Board, First Vice Chair', 'A membership-based organization dedicated to promoting and supporting local businesses through advocacy, networking and community initiatives that strengthen the Austin, Minnesota area.', 'https://www.austincoc.com/'],
    ['Mower County CEO Board, Board Member', 'A program that connects high school students with local business leaders to inspire entrepreneurship and develop real-world business skills through hands-on learning and mentorship.', 'https://mowercountyceo.com/'],
    ['Austin Port Authority, Board Member', 'Fosters economic development in Austin, Minnesota by supporting business expansion, redevelopment projects and job creation through strategic partnerships and community investment.', 'https://www.ci.austin.mn.us/economic-development/port-authority'],
    ['Austin/Mower County Homeownership Fund Board, Board Member', 'A regional nonprofit initiative focused on expanding affordable homeownership opportunities in Austin and Mower County through education, down payment assistance and strategic partnerships.', 'https://www.austinhra.org/assistant-programs/section-8-home-ownership/austin-mower-county-homeownership-fund/'],
    ['SEMR Membership Committee', 'The membership committee of the Southeast Minnesota Realtors® network, tasked with member outreach, professional development and strengthening the local real estate community.', 'https://www.semnrealtors.com/'],
  ];
  const awards = [
    ['Top Originators Nationwide – Scotsman Guide, 2025, 2021, 2019, 2018, 2015', 'A national ranking recognizing the highest-performing residential mortgage originators in the U.S., widely regarded as the industry’s gold standard.', 'https://www.scotsmanguide.com/rankings/top-originators/'],
    ['Best of Mower County: Best Mortgage Lender – Austin Daily Herald, 2025, 2023, 2021', 'A community vote by the regional newspaper honoring top local businesses.', 'https://www.austindailyherald.com/contests/best-of'],
    ['Top Women Originators Nationwide – Scotsman Guide, 2025', 'A special category within Scotsman Guide highlighting outstanding female mortgage originators nationally.', 'https://www.scotsmanguide.com/rankings/top-originators-2/'],
    ['Top 200 Places to Work – Minnesota Star Tribune, 2025', '', ''],
    ['Minnesota Housing: Top Producing Loan Officer – Certificate of Recognition', 'Recognizes Minnesota loan officers who close the highest number of homebuyer loans through the agency’s single-family homeownership programs.', 'https://www.mnhousing.gov/content/assets/mhfa_269191/native?channelToken=294436b7dd6c4570988cae88f0ee7c90'],
    ['President’s Club Award – Fairway Independent Mortgage Corporation, 2017', 'Fairway’s internal recognition for its top-performing originators company-wide.', 'https://www.fairway.com/'],
    ['Certified Coach (Fairway Mortgage), 2021–2022', 'A Fairway designation indicating advanced standards in coaching, mentorship and leadership.', ''],
    ['Small Business of the Year – Austin Area Chamber of Commerce, 2020', 'Recognizing outstanding business performance, community contribution and leadership in the Austin, MN area.', 'https://www.austincoc.com/austin-awards/'],
    ['Circle of Giving Award – Homes for Heroes, 2021', 'Recognition for committed financial support and sponsorship of home-buying heroes: veterans, first responders and more.', 'https://www.homesforheroes.com/'],
    ['Best of the Best Mortgage Lenders', 'Recognized for outstanding service and results.', ''],
    ['Chamber Certificate of Recognition', 'For leadership and service to the community.', ''],
  ];
  const item = ([t, d, u]) => `<li><strong>${esc(t)}</strong>${d ? `<p>${esc(d)}${u ? ` <a href="${u}" target="_blank" rel="noopener">Learn more</a>` : ''}</p>` : ''}</li>`;
  const gallery = [
    ['kris-gallery-1', 'Kris Heichel with family wearing leis on vacation'],
    ['kris-gallery-2', 'The Heichel Team at a holiday gathering in a greenhouse'],
    ['kris-gallery-3', 'Kris Heichel at a formal event'],
    ['kris-gallery-4', 'Kris Heichel outdoors on a sunny day'],
    ['kris-gallery-5', 'The Heichel Team at a team event'],
    ['kris-gallery-6', 'Kris Heichel with friends in a garden'],
    ['kris-gallery-8', 'Kris Heichel with a large group at a lodge'],
    ['kris-gallery-9', 'The Heichel Team posing together'],
  ];
  const body = `<section class="page-hero page-hero-photo" style="background-image:url('/img/kris-about.webp')"><div class="wrap" style="padding-top:20px;padding-bottom:20px">
${breadcrumbs(crumbs)}<span class="eyebrow">About</span><h1>Who is Kris?</h1>
<p class="lede">Kris Heichel is the Branch Manager and Senior Loan Officer of The Heichel Team, powered by Fairway Independent Mortgage Corporation, with offices in Rochester and Austin, Minnesota. She has more than 20 years of mortgage experience and is ranked among the Top 1% of mortgage originators nationwide.</p>
</div></section>
<section class="section"><div class="wrap split">
  ${img('kris-gallery-1', 'Kris Heichel with family on vacation', { cls: 'rounded shadow', w: 600, h: 600 })}
  <div>
    <h2>A Southeast Minnesota native, lending since 2004</h2>
    <p>A proud Southeast Minnesota native, Kris brings a deep understanding of her community and a passion for helping families achieve their dream of homeownership. Since beginning her mortgage career in 2004, Kris has built a reputation as one of the most trusted and knowledgeable lenders in the region.</p>
    <p>She has been consistently recognized among the Top 1% of Mortgage Originators nationwide and has earned numerous Fairway honors, including President’s Club and Chairman’s Club distinctions. Her expertise spans a wide range of loan programs, from conventional and jumbo loans to first-time homebuyer and down payment assistance options, allowing her to provide personalized, strategic guidance for every client.</p>
  </div>
</div></section>
<section class="section-tight"><div class="wrap split split-rev">
  ${img('kris-gallery-2', 'The Heichel Team at a holiday gathering', { cls: 'rounded shadow', w: 600, h: 450 })}
  <div>
    <p>Kris is known for her tireless work ethic, integrity, and ability to make even the most complex loan process feel seamless. She leads her team with a client-first mindset and a deep commitment to excellence, ensuring that every borrower and business partner experiences the highest level of service and care.</p>
    <p>Even when she’s not in the office, Kris’s dedication to her clients rarely pauses. Whether she’s spending time with family, relaxing by the pool, enjoying fine dining or soaking up the sunshine, her passion for helping others achieve homeownership is never far from mind.</p>
    <p>For Kris, mortgage lending isn’t just what she does; it’s who she is. She’s built her career on trust, communication and an unwavering drive to help people move forward confidently toward their goals.</p>
  </div>
</div></section>
<section class="section-tight"><div class="wrap"><div class="card bg-mist-soft center">
  <h2 class="label">Hobbies</h2>
  <ul class="quiz-badges" style="justify-content:center"><li>Flower shopping and gardening</li><li>Fine dining</li><li>Vacationing near the ocean</li><li>Walking her dogs</li><li>Helping families get into their dream home, truly…</li></ul>
</div>
<div class="gallery" style="margin-top:20px">${gallery.slice(2).map(([i, a]) => img(i, a, { w: 300, h: 300 })).join('')}</div>
</div></section>
<section class="section bg-mist-soft"><div class="wrap">
  <div class="center"><span class="eyebrow">Memberships</span><h2>Boards &amp; Leadership Roles</h2></div>
  <ul class="award-list grid-2 grid" style="margin-top:2rem">${boards.map(item).join('')}</ul>
</div></section>
<section class="section" id="awards"><div class="wrap">
  <div class="center"><span class="eyebrow">Recognition</span><h2>Awards &amp; Achievements</h2></div>
  <div class="award-badges" style="margin:2rem 0">
    ${img('award-top-originator-2025', 'Scotsman Guide Top Originators 2025 badge', { w: 110, h: 110 })}
    ${img('award-top-women-2025', 'Scotsman Guide Top Women Originators 2025 badge', { w: 112, h: 110 })}
    ${img('award-best-of-mower', 'Best of Mower County 2025 award', { w: 110, h: 110 })}
    ${img('award-top-places-2025', 'Star Tribune Top Workplaces 2025 badge', { w: 102, h: 110 })}
    ${img('award-mn-housing', 'Minnesota Housing Top Producing Loan Officer 2024', { w: 180, h: 99 })}
  </div>
  <ul class="award-list grid grid-2">${awards.map(item).join('')}</ul>
</div></section>
<section class="section-tight"><div class="wrap">${ctaStrip('Work with Kris', 'Get a personalized plan from one of the top loan officers in the country.')}</div></section>`;
  return page({
    path: '/kris',
    title: 'Kris Heichel, NMLS #27180 | Top 1% Loan Officer | Rochester & Austin, MN',
    description: 'Kris Heichel is Branch Manager and Senior Loan Officer of The Heichel Team at Fairway Home Mortgage, a Scotsman Guide Top 1% originator serving Rochester, Austin and Southeast Minnesota since 2004.',
    body,
    crumbs,
    ogImage: 'kris-headshot',
    type: 'ProfilePage',
    mainEntity: { '@id': KRIS_ID },
  });
}

function realtors() {
  const crumbs = [['For Realtors', '/realtors']];
  const body = `${pageHero({ title: 'Partner With Us for Smarter Success', crumbs, eyebrow: 'For real estate professionals', variant: 'page-hero-teal' })}
<section class="section"><div class="wrap split">
  <div>
    <p>At the Heichel Team, we’re dedicated to helping real estate professionals grow and close more deals with confidence. We equip our partners with specialized loan programs and innovative marketing tools designed to simplify transactions and deliver an exceptional client experience.</p>
    <p>Our tailored mortgage solutions include exclusive rates, fast-track pre-approvals, and flexible financing options that fit every client’s unique goals. Plus, our technology provides real-time market insights, secure document sharing and seamless communication, keeping every transaction efficient and stress-free.</p>
    <p>Join forces with us to access the resources, expertise and personalized support that help you stand out in today’s competitive market. Your success is our mission, and together, we’ll raise the standard for real estate excellence.</p>
    <h2 class="label">What agents get</h2>
    <ul class="checks"><li>Fast-track pre-approvals, including weekends</li><li>Proactive updates to you and your buyer from application to closing</li><li>Closings often in 10 days or less</li><li>Specialty programs: VA renovation, HomeStyle®, 203(k), HECM for Purchase, DPA, DSCR</li><li>Co-marketing materials and Minnesota CE classes like “The Hidden Market”</li></ul>
    <div class="btn-row"><a class="btn btn-gold" href="#contact">Request Marketing Materials</a><a class="btn btn-outline" href="${SITE.links.agentHandbook}" target="_blank" rel="noopener">Download the Agent Handbook</a></div>
  </div>
  ${img('kris-portrait', 'Kris Heichel, loan officer and Realtor partner', { cls: 'rounded shadow', w: 500, h: 500 })}
</div></section>
<section class="section bg-mist-soft" id="contact"><div class="wrap wrap-narrow">
  <h2 class="center">Contact Us</h2>
  <div class="card">${form('realtor-contact', contactFields)}</div>
</div></section>`;
  return page({
    path: '/realtors',
    title: 'For Realtors | Partner With The Heichel Team | Fairway Mortgage MN',
    description: 'Real estate agents in Southeast Minnesota: partner with The Heichel Team for fast pre-approvals, specialty loan programs, co-marketing materials and on-time closings.',
    body,
    crumbs,
    ogImage: 'kris-portrait',
  });
}

function whyFairway() {
  const crumbs = [['Why Fairway', '/why-fairway']];
  const body = `${pageHero({ title: 'Why Fairway', crumbs, lede: 'The Heichel Team is powered by Fairway Independent Mortgage Corporation (NMLS #2289): local service with the strength of one of the nation’s leading mortgage lenders.' })}
<section class="section"><div class="wrap grid grid-2">
  <div class="card card-teal center">
    ${img('logo-fairway-cares', 'Fairway Cares logo', { w: 200, h: 175, cls: '' }).replace('<img', '<img style="margin:0 auto 1rem"')}
    <h2>Giving Back</h2>
    <p>Fairway Cares is the charitable arm of Fairway Independent Mortgage Corporation. For over twenty years, Fairway and its 5,000+ nationwide employees have demonstrated a deep caring for the communities and people they work with and serve. Together, we can support individuals and families battling critical illness, physical trauma and loss of a loved one.</p>
    <a class="btn btn-gold" href="${SITE.links.fairwayCares}" target="_blank" rel="noopener">Learn More</a>
  </div>
  <div class="card card-teal center">
    ${img('logo-awi', 'American Warrior Initiative logo', { w: 300, h: 80 }).replace('<img', '<img style="margin:0 auto 1rem;background:#fff;padding:8px;border-radius:6px"')}
    <h2>America Warrior Initiative</h2>
    <p>The American Warrior Initiative is the non-profit arm of Fairway Independent Mortgage Corporation. AWI’s mission is: Educating, Inspiring, and Giving Back to our Military Families and Veterans.</p>
    <a class="btn btn-gold" href="${SITE.links.awi}" target="_blank" rel="noopener">Learn More</a>
  </div>
</div></section>
<section class="section-tight"><div class="wrap">${ctaStrip()}</div></section>`;
  return page({
    path: '/why-fairway',
    title: 'Why Fairway | The Heichel Team | Fairway Independent Mortgage',
    description: 'Why The Heichel Team works with Fairway Independent Mortgage: nationwide strength, local service, and giving back through Fairway Cares and the American Warrior Initiative.',
    body,
    crumbs,
  });
}

/* ================= Education ================= */
function postCard(p) {
  return `<article class="post-card">${img(p.image[0], p.image[1], { w: 300, h: 200 })}<div>
<p class="post-meta">${p.categories.join(' · ')} · <time datetime="${p.date}">${fmtDate(p.date)}</time> · The Heichel Team</p>
<h3><a href="/blog/${p.slug}">${esc(p.title)}</a></h3><p>${esc(p.excerpt)}</p><a class="more" href="/blog/${p.slug}">Read more</a></div></article>`;
}

function education() {
  const crumbs = [['Education', '/education']];
  const pillars = [
    ['Never A No', 'Working for a company that’s all about finding mortgage solutions and never saying “no” is a truly uplifting experience. We thrive on thinking creatively and breaking away from the traditional norms of the mortgage process. Our commitment to problem-solving means we see challenges as opportunities to come up with innovative solutions.'],
    ['Relationships Are Everything', 'Realtors and loan officers working closely together is a big deal. They’re the dynamic duo that makes buying a home smoother and more enjoyable. This partnership leads to quicker, more efficient transactions and ensures any bumps in the road are smoothed out. It’s all about trust and teamwork.'],
    ['No Shortcuts', 'Mortgages involve money and complex processes, so it’s vital to be thorough and accurate. Taking shortcuts can lead to mistakes that hurt borrowers and lenders alike. At The Heichel Team, we do things properly so everyone involved can feel secure and confident about the mortgage process.'],
  ];
  const tools = [
    ['/loan-process', 'Our 9-Step Loan Process', 'What to expect from first conversation to moving day.'],
    ['/quiz', 'Homebuyer Readiness Quiz', 'See where you stand in about 60 seconds.'],
    ['/refi-quiz', 'Refinance Quiz', 'Find out if refinancing makes sense now.'],
    ['/iq', 'Financial IQ Quiz', 'Gauge your financial health and next steps.'],
    ['/equity-analysis-plan', 'Home Equity Analysis', 'See how much equity you could put to work.'],
    ['/va-benefits', 'VA Benefits Guide', 'What your VA benefit can really do.'],
  ];
  const body = `${pageHero({ title: 'Mortgage Education', crumbs, lede: 'Plain-English guides, tools and answers so you can make confident decisions about buying, refinancing and building wealth through real estate.' })}
<section class="section"><div class="wrap grid grid-3">${pillars.map(([h, t]) => `<div class="card"><h2 class="label">${h}</h2><p>${t}</p></div>`).join('')}</div></section>
<section class="section-tight bg-mist-soft"><div class="wrap">
  <h2>Tools &amp; Guides</h2><hr class="rule">
  <div class="grid grid-3">${tools.map(([h, t, d]) => `<a class="card card-link" href="${h}"><h3>${t}</h3><p>${d}</p><span class="more">Open</span></a>`).join('')}</div>
</div></section>
<section class="section" id="blog"><div class="wrap">
  <h2>From the Blog</h2><hr class="rule">
  ${POSTS.map(postCard).join('')}
  <p style="margin-top:1.5rem"><a class="btn btn-outline" href="/blog">View all articles</a></p>
</div></section>
<section class="section-tight"><div class="wrap">${quiz('purchase', { heading: 'Take the First Step', sub: 'Start on the path to owning a home by taking our simple quiz.' })}</div></section>
<section class="section bg-mist"><div class="wrap wrap-narrow">
  <div class="center"><h2>Have a Mortgage Question?</h2><p class="lede">We have the answers you need.</p></div>
  ${faqList(EDU_FAQS, { cols: 1 })}
</div></section>`;
  return page({
    path: '/education',
    title: 'Mortgage Education, Guides & Blog | The Heichel Team',
    description: 'Mortgage education from The Heichel Team: loan process guide, homebuyer and refinance quizzes, VA benefits, renovation loan guides, and answers to common mortgage questions.',
    body,
    crumbs,
    schema: [faqSchema(EDU_FAQS)],
  });
}

function loanProcess() {
  const crumbs = [['Education', '/education'], ['Loan Process', '/loan-process']];
  const steps = [
    ['Let’s Discuss Your Goals', 'We start with a conversation about your home buying goals and financial situation. This first step helps us tailor the pre-qualification options just for you.', ['Book a Call', '/schedule']],
    ['Submit Your Application', 'Applying for your mortgage is easy with our secure online platform. Fill out your application at your convenience and start your journey to homeownership.', ['Apply Now', SITE.links.apply]],
    ['Gather Necessary Documents', 'To keep things moving, you’ll provide essential documents such as pay stubs, W-2s, bank statements and tax returns. This documentation supports your application and speeds up approval.'],
    ['Get the Property Appraised', 'Once you are under contract on a home, we coordinate a professional appraisal to determine the fair market value of your new home, ensuring the loan amount meets your needs and complies with regulations.'],
    ['Your Loan Goes Through Underwriting', 'During underwriting, we meticulously review your application and documents to make sure everything is in order. This step is crucial for securing your loan approval.'],
    ['Receive Conditional Approval', 'You’re almost there! If your loan requires further documentation or clarification, we’ll guide you through resolving these conditions to move forward.'],
    ['Receive Final Approval', 'Once all conditions are met, your loan gets final approval (often called “clear to close”). You’re ready to proceed to closing.'],
    ['Close on Your Loan', 'It’s time to make it official. At closing, you’ll sign the mortgage documents, finalize your loan and take the final step in your home buying journey.'],
    ['Congratulations! It’s Moving Day!', 'Congratulations on your new home! We’re thrilled to have supported you through this important milestone. Enjoy your new beginning.'],
  ];
  const alts = ['Loan officer meeting with a client', 'Applying online on a laptop', 'Tax statements and financial documents', 'Aerial view of a residential neighborhood', 'Underwriting documents with an approval stamp', 'Reviewing loan conditions on a laptop', 'Final approval paperwork on a laptop', 'Closing handshake across a table', 'Moving boxes stacked in a new home'];
  const body = `${pageHero({ title: 'Our Home Loan Process', crumbs, eyebrow: 'What to expect when purchasing', lede: 'Quality · Speed · Reliability' })}
<section class="section"><div class="wrap wrap-narrow">
  <div class="answer"><span class="label">Quick answer</span><p>Getting a mortgage with The Heichel Team takes nine steps: a goals conversation, your online application, documents, appraisal, underwriting, conditional approval, final approval, closing and moving day. Most purchases close in about 30 days, and our team often closes in 10 days or less.</p></div>
  <ol class="steps">${steps.map(([h, t, cta], i) => `<li class="step">${img('step-' + (i + 1), alts[i], { w: 220, h: 147 })}<div><h3>${i + 1}. ${esc(h)}</h3><p>${t}</p>${cta ? `<p style="margin-top:.8rem"><a class="btn btn-teal" href="${cta[1]}"${cta[1].startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${cta[0]}</a></p>` : ''}</div></li>`).join('')}</ol>
</div></section>
<section class="section-tight"><div class="wrap">${ctaStrip('Ready for step one?')}</div></section>`;
  return page({
    path: '/loan-process',
    title: 'The Home Loan Process in 9 Steps | The Heichel Team | Fairway',
    description: 'What to expect when getting a mortgage: the 9-step home loan process from first conversation and application through underwriting, approval, closing and moving day.',
    body,
    crumbs,
    ogImage: 'loan-process',
    schema: [{
      '@type': 'HowTo',
      name: 'How to get a home loan with The Heichel Team',
      description: 'The nine steps of the home purchase mortgage process.',
      totalTime: 'P30D',
      step: steps.map(([h, t], i) => ({ '@type': 'HowToStep', position: i + 1, name: h, text: t })),
    }],
  });
}

/* ================= Quizzes & lead tools ================= */
function quizPage({ path, crumbs, eyebrow, title, quizId, hero, tipsTitle, tipsIntro, tips, faqs, faqTitle, metaTitle, description }) {
  const body = `<section class="page-hero page-hero-photo" style="background-image:url('/img/${hero}.webp')"><div class="wrap split" style="padding-top:10px;padding-bottom:10px">
  <div>${breadcrumbs(crumbs)}<span class="eyebrow">${eyebrow}</span><h1>${title}</h1>
  <ul class="quiz-badges" style="color:#fff"><li>Instant results</li><li>Takes 3 minutes</li><li>No credit pull</li></ul></div>
  ${quiz(quizId, { light: true })}
</div></section>
<section class="section"><div class="wrap">
  <h2>${tipsTitle}</h2><p class="lede">${tipsIntro}</p>
  <div class="grid grid-4" style="margin-top:1.5rem">${tips.map(([h, t], i) => `<div class="card"><h3>${i + 1}. ${h}</h3><p>${t}</p></div>`).join('')}</div>
</div></section>
<section class="section bg-mist"><div class="wrap wrap-narrow">
  <div class="center"><h2>${faqTitle}</h2><p class="lede">We have the answers you need.</p></div>
  ${faqList(faqs, { cols: 1 })}
  <p class="center" style="margin-top:2rem">Didn’t find your answer? Reach out to us, we’re happy to help.</p>
  <p class="center"><a class="btn btn-teal" href="/schedule">Book a Call</a></p>
</div></section>`;
  return page({ path, title: metaTitle, description, body, crumbs, ogImage: hero, schema: [faqSchema(faqs)] });
}

function purchaseQuiz() {
  return quizPage({
    path: '/quiz',
    crumbs: [['Education', '/education'], ['Homebuyer Quiz', '/quiz']],
    eyebrow: 'Purchasing',
    title: 'Take the First Step Towards Owning Your Dream Home',
    quizId: 'purchase',
    hero: 'quiz-hero',
    tipsTitle: 'First-Time Homebuyer Tips',
    tipsIntro: 'Navigating the home-buying process for the first time can be overwhelming. Here are some essential tips to get you started on the right foot.',
    tips: [
      ['Start by setting a budget', 'Before you fall in love with a home, know what you can realistically afford. Factor in your down payment, monthly payments and lifestyle. A clear budget keeps your search focused and stress-free.'],
      ['Get pre-approved for a mortgage', 'Pre-approval isn’t just a formality; it’s your first step to becoming a serious buyer. It shows sellers you’re ready and gives you a clear picture of your loan options and price range.'],
      ['Research neighborhoods', 'Take time to explore different areas, commute times, school ratings and local amenities to make sure the neighborhood fits your lifestyle.'],
      ['Work with a real estate agent', 'A great agent is your guide, advocate and negotiator. They know the market, help you avoid costly mistakes, and make the process smoother from start to finish.'],
    ],
    faqTitle: 'Have a Mortgage Question?',
    faqs: EDU_FAQS,
    metaTitle: 'Homebuyer Readiness Quiz | Are You Ready to Buy? | The Heichel Team',
    description: 'Take our free 3-minute homebuyer readiness quiz. No credit pull, instant results, and loan programs matched to your situation, plus first-time homebuyer tips.',
  });
}

function refiQuiz() {
  return quizPage({
    path: '/refi-quiz',
    crumbs: [['Education', '/education'], ['Refinance Quiz', '/refi-quiz']],
    eyebrow: 'Refinancing',
    title: 'Are You Ready to Take the First Step Towards Refinancing Your Home?',
    quizId: 'refi',
    hero: 'refi-hero',
    tipsTitle: 'Refinancing Tips',
    tipsIntro: 'Refinancing can be a smart way to lower your monthly payment, shorten your loan term, remove mortgage insurance or access cash for big expenses.',
    tips: [
      ['Know your goal', 'Are you trying to lower your payment, shorten your loan term, or tap into equity? Get clear on your goal so you can choose the right refinance option.'],
      ['Find a lender to work with', 'Not all lenders are the same. Look for someone who listens, explains your options, and has your best interest in mind, not just the lowest advertised rate.'],
      ['Prepare your documentation', 'Speed things up by gathering your income, asset and debt information ahead of time. The more organized you are, the smoother the process.'],
      ['Ask questions', 'Never be afraid to speak up. A good lender will walk you through the numbers, explain the fine print, and make sure you feel confident every step of the way.'],
    ],
    faqTitle: 'Have a Refinance Question?',
    faqs: REFI_FAQS,
    metaTitle: 'Refinance Quiz | Should I Refinance My Mortgage? | The Heichel Team',
    description: 'Find out in 3 minutes if refinancing makes sense: lower your payment, pay off faster, remove PMI or cash out equity. No credit pull. Plus refinancing tips and FAQs.',
  });
}

function iq() {
  const crumbs = [['Education', '/education'], ['Financial IQ Quiz', '/iq']];
  const body = `${pageHero({ title: 'What’s Your Financial IQ?', crumbs, lede: 'Answer a few simple questions and instantly see how your financial health stacks up, plus the next steps that would make the biggest difference.' })}
<section class="section"><div class="wrap split">
  ${quiz('iq', { light: true })}
  ${img('iq-graphic', 'Illustration of a woman saving money in a piggy bank', { cls: 'rounded', w: 500, h: 534 })}
</div></section>`;
  return page({
    path: '/iq',
    title: 'What Is Your Financial IQ? Free Quick Quiz | The Heichel Team',
    description: 'Take a quick, free Financial IQ quiz to see how your credit, debt and savings stack up for buying a home, with personalized next steps. No credit pull.',
    body,
    crumbs,
    ogImage: 'iq-graphic',
  });
}

function vaBenefits() {
  const crumbs = [['Education', '/education'], ['VA Benefits', '/va-benefits']];
  const faqs = [
    ['Can I use a VA loan on a fixer-upper?', 'Yes. A VA renovation loan lets eligible veterans finance the purchase price and the cost of improvements in a single mortgage, with no down payment and no separate construction loan.'],
    ['Do I need a down payment for a VA renovation loan?', 'No down payment is required for eligible veterans and service members with full entitlement.'],
    ['Why was I told a VA loan can’t be used for a home that needs work?', 'Many lenders don’t offer VA renovation financing, so borrowers are often steered toward conventional loans that require a down payment. It’s not a reflection of your eligibility; it’s a reflection of who you’ve been talking to.'],
  ];
  const body = `<section class="page-hero page-hero-photo" style="background-image:url('/img/va-hero-bg.webp')"><div class="wrap" style="padding-top:20px;padding-bottom:20px">
${breadcrumbs(crumbs)}<span class="eyebrow">A benefit you’ve earned — and may not be using</span>
<h1>Your VA Benefit Can Do <span style="color:var(--gold)">More</span> Than You Think</h1>
<p class="lede">For veterans, active-duty service members and surviving spouses ready to put their benefit to work.</p>
<div class="btn-row"><a class="btn btn-gold" href="/schedule">Let’s Talk — Schedule a Free Strategy Call</a></div>
</div></section>
<section class="bg-mist"><ul class="wrap quiz-badges" style="justify-content:space-around;padding:22px 20px;margin:0"><li>No down payment</li><li>VA renovation specialist</li><li>No PMI</li></ul></section>
<section class="section"><div class="wrap split">
  <div>
    <p class="lede" style="color:var(--ink)">If you’ve served, you’ve earned one of the most powerful home financing tools available, and most veterans are only using a fraction of it.</p>
    <p>Many veterans don’t realize their VA benefit goes far beyond a standard purchase. And if you’ve been told that a fixer-upper isn’t possible with a VA loan? You may have gotten incomplete information. Veterans pursuing home purchases or renovations run into the same wall:</p>
    <ul class="checks xs"><li>Told VA loans can’t be used for homes that need work</li><li>Steered toward conventional loans requiring a down payment</li><li>Unaware that VA renovation financing exists at all</li><li>Dealing with lenders who don’t actually specialize in VA programs</li></ul>
    <div class="answer"><p>If this sounds familiar, it’s not a reflection of your eligibility. It’s a reflection of who you’ve been talking to. <strong>You may have more options than you’ve been shown.</strong></p></div>
  </div>
  ${img('va-commitment', 'Fairway American Warrior Initiative: nearly $10 million given since 2016, 450 service dogs placed, 900+ financial grants awarded', { cls: 'rounded shadow', w: 560, h: 560 })}
</div></section>
<section class="section bg-teal" style="background:#14294a"><div class="wrap">
  <span class="eyebrow">Spotlight feature</span>
  <h2>VA Renovation Loans: <span style="color:var(--gold)">Buy It. Fix It. One Loan.</span></h2>
  <p class="lede">Most people know the VA loan for its zero-down purchase benefit. Far fewer know about the VA renovation loan, a program that lets eligible veterans finance both the purchase price and the cost of improvements in a single mortgage. That means you can buy a home that needs updates, roll the renovation costs into your mortgage, and do it all with no down payment and no separate construction loan.</p>
  <div class="grid grid-4" style="margin-top:2rem">
    ${[['Buy + Renovate', 'Purchase price and renovation costs combined into one VA loan'], ['Zero Down', 'No down payment required for eligible veterans and service members'], ['No PMI', 'Skip private mortgage insurance, saving hundreds per month'], ['Fixer-Uppers OK', 'Open the door to homes others pass on, at better prices']].map(([h, t]) => `<div class="card" style="background:rgba(255,255,255,.06);box-shadow:0 0 0 1px rgba(255,255,255,.2)"><h3 class="label" style="color:var(--gold)">${h}</h3><p>${t}</p></div>`).join('')}
  </div>
  <div class="btn-row"><a class="btn btn-gold arrow" href="/schedule">Ask Us About VA Renovation Loans</a></div>
</div></section>
<section class="section"><div class="wrap split">
  <div>
    <span class="eyebrow">Our role: clarity, strategy, guidance</span>
    <h2>Honest guidance from a team that specializes in VA lending</h2>
    <p>At The Heichel Team, our job isn’t to push a product. It’s to make sure you actually understand and use the benefit you’ve earned.</p>
    <ul class="checks"><li>Full scope of VA loan options, including renovation financing</li><li>Plain-language guidance through complex VA guidelines</li><li>Determine if a VA renovation loan fits your property and goals</li><li>Navigate from start to close with confidence</li></ul>
    <p><strong>No pressure. No jargon.</strong></p>
  </div>
  ${quiz('va', { light: true, heading: 'Thinking About Buying a House?', sub: 'Take our 3-minute quiz to see if you are eligible for a VA loan.' })}
</div></section>
<section class="section bg-mist"><div class="wrap wrap-narrow center">
  <span class="eyebrow">Ready to see what your benefit can really do?</span>
  <h2>The next step isn’t an application — it’s a conversation.</h2>
  <p class="lede">Let’s look at your goals and figure out whether a VA loan or VA renovation loan is the right move.</p>
  <div class="btn-row"><a class="btn btn-teal" href="/schedule">Schedule Your Free Strategy Call</a></div>
  <p class="form-note" style="margin-top:1rem">No obligation. No pressure. Just answers.</p>
  <div style="margin-top:2.5rem;text-align:left">${faqList(faqs, { cols: 1 })}</div>
  <p style="margin-top:1.5rem"><a class="more" href="/va">VA loan program details</a> &nbsp; <a class="more" href="/blog/va-home-loan-benefits-in-minnesota-what-veterans-should-know">What Minnesota veterans should know</a></p>
</div></section>`;
  return page({
    path: '/va-benefits',
    title: 'VA Benefits & VA Renovation Loans in Minnesota | Heichel Team',
    description: 'Your VA benefit can do more than you think. VA renovation loans let Minnesota veterans buy and fix up a home in one loan with no down payment and no PMI. Free strategy call.',
    body,
    crumbs,
    ogImage: 'va-commitment',
    schema: [faqSchema(faqs)],
  });
}

function equity() {
  const crumbs = [['Education', '/education'], ['Home Equity Analysis', '/equity-analysis-plan']];
  const body = `<section class="page-hero page-hero-photo" style="background-image:url('/img/equity-hero.webp')"><div class="wrap split" style="padding-top:10px;padding-bottom:10px">
  <div>${breadcrumbs(crumbs)}<span class="eyebrow">Equity analysis</span><h1>Unlock the Power of Your Home</h1>
  <p class="lede">Whether you’re planning a renovation, consolidating debt, or funding a big dream, tapping into your home’s equity gives you the freedom to move forward.</p></div>
  <div class="card"><h2 class="label">Start Your Equity Assessment Today</h2>${form('equity-analysis', [
    { name: 'name', label: 'Name', required: true, half: true, autocomplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, half: true, autocomplete: 'email' },
    { name: 'address', label: 'Property Address', required: true, autocomplete: 'street-address' },
    { name: 'current_rate', label: 'Current Rate', type: 'select', options: RATE_OPTIONS, half: true },
    { name: 'goal', label: 'What is your goal?', type: 'select', options: ['Lower my monthly payments', 'Pay off my mortgage faster', 'Cash out equity', 'Consolidate debt'], half: true },
    { name: 'home_value', label: 'Estimated Home Value', half: true },
    { name: 'loan_balance', label: 'Estimated Loan Balance', half: true },
    { name: 'credit_score', label: 'What is your current credit score?', type: 'select', options: CREDIT_OPTIONS },
  ], { submit: 'Submit' })}</div>
</div></section>
<section class="section"><div class="wrap grid grid-3">
  <div><span class="eyebrow">The value you’ve built</span><h2>What Is Home Equity?</h2><p>Home equity is the difference between what your home is worth and what you owe on it. As your home appreciates and your loan balance decreases, your equity grows. Now, it’s time to put it to work.</p></div>
  <div><span class="eyebrow">Empower your future</span><h2>Why Access Your Equity?</h2><ul class="checks"><li><strong>Upgrade your space.</strong> Start the renovations you’ve been dreaming about.</li><li><strong>Simplify finances.</strong> Consolidate high-interest debt into a single, manageable payment.</li><li><strong>Plan ahead.</strong> Invest in education, retirement or other life goals.</li><li><strong>Be prepared.</strong> Create a financial safety net for unexpected expenses.</li></ul></div>
  <div><span class="eyebrow">Three simple steps</span><h2>How Does It Work?</h2><ol><li><strong>Learn your options.</strong> Discover whether a cash-out refinance or a home equity loan fits your needs.</li><li><strong>Get a personalized assessment.</strong> We’ll help you determine how much equity you can access and what makes the most sense for your goals.</li><li><strong>Unlock your equity.</strong> Use your funds where it matters most.</li></ol></div>
</div></section>
<section class="section-tight"><div class="wrap">${ctaStrip('Your equity is opportunity — ready when you are.', 'Talk through cash-out refinance vs. home equity options with Kris.')}</div></section>`;
  return page({
    path: '/equity-analysis-plan',
    title: 'Free Home Equity Analysis | Cash-Out Refinance | The Heichel Team',
    description: 'Get a free home equity assessment. Learn how much equity you can access for renovations, debt consolidation or big goals, and whether a cash-out refinance or home equity loan fits.',
    body,
    crumbs,
    ogImage: 'equity-hero',
  });
}

function refiWatch() {
  const crumbs = [['Education', '/education'], ['Refi Watchlist', '/refi1']];
  const body = `<section class="page-hero page-hero-photo" style="background-image:url('/img/refi-watch-hero.webp')"><div class="wrap split" style="padding-top:10px;padding-bottom:10px">
  <div>${breadcrumbs(crumbs)}<h1>Refi Watch List</h1><p class="lede">Stay ahead of the market. Let us notify you when it’s the perfect time to refinance, based on your current rate and goals.</p></div>
  <div class="card">${form('refi-watchlist', [
    { name: 'name', label: 'Name', required: true, autocomplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', required: true, autocomplete: 'email' },
    { name: 'current_rate', label: 'Current Rate', type: 'select', options: RATE_OPTIONS, required: true },
  ], { submit: 'Join The List', btnClass: 'btn-gold', note: 'By submitting your contact information you agree to be contacted by The Heichel Team.' })}</div>
</div></section>
<section class="section"><div class="wrap wrap-narrow">${faqList(REFI_FAQS, { cols: 1 })}</div></section>`;
  return page({
    path: '/refi1',
    title: 'Refi Watch List | Get Notified When Rates Drop | The Heichel Team',
    description: 'Join the free Refi Watch List and get notified when mortgage rates drop enough to make refinancing worth it for your current rate and goals.',
    body,
    crumbs,
    ogImage: 'refi-watch-hero',
    schema: [faqSchema(REFI_FAQS)],
  });
}

function schedule() {
  const crumbs = [['Schedule a Meeting', '/schedule']];
  const offices = SITE.offices.map((o) => `<p><strong>${o.name}</strong><br>${esc(o.street)}<br>${o.city}, ${o.state} ${o.zip}</p>`).join('');
  const body = `${pageHero({ title: 'Schedule a Meeting', crumbs, lede: `Book a free, no-pressure consultation with Kris and the team, send us a message, or call <a href="tel:${SITE.phoneE164}">${SITE.phone}</a> (${SITE.hours}).` })}
<section class="section bg-mist-soft"><div class="wrap grid grid-2">
  <div class="card"><h2 class="label center">Book a Call</h2>${calendly()}</div>
  <div>
    <div class="card"><h2 class="label center">Send Us a Message</h2>${form('schedule-contact', contactFields)}</div>
    <div class="card" style="margin-top:22px">
      <h2 class="label">Contact Us</h2>
      <p><a href="mailto:${SITE.email}">${SITE.email}</a><br><a href="tel:${SITE.phoneE164}">${SITE.phone}</a></p>
      ${offices}
      ${apply('Apply Now', 'btn-gold')}
    </div>
  </div>
</div></section>`;
  return page({
    path: '/schedule',
    title: 'Schedule a Free Mortgage Consultation | The Heichel Team',
    description: 'Book a free mortgage consultation with Kris Heichel and The Heichel Team in Rochester or Austin, MN. Call 507.460.4500, send a message, or pick a time online.',
    body,
    crumbs,
    ogImage: 'schedule-hero',
    type: 'ContactPage',
  });
}

/* ================= Blog ================= */
function blogIndex(path = '/blog', filter = null, label = 'Blog') {
  const crumbs = path === '/blog' ? [['Blog', '/blog']] : [['Blog', '/blog'], [label, path]];
  const posts = filter ? POSTS.filter(filter) : POSTS;
  const body = `${pageHero({ title: path === '/blog' ? 'The Heichel Team Blog' : esc(label), crumbs, lede: 'Mortgage guides and news for homebuyers, homeowners, veterans and investors in Southeast Minnesota.' })}
<section class="section"><div class="wrap wrap-narrow">
  <p>Categories: ${CATEGORIES.map(([s, n]) => `<a href="/blog/category/${s}">${esc(n)}</a>`).join(' · ')}</p>
  ${posts.map(postCard).join('')}
</div></section>`;
  return page({
    path,
    title: `${path === '/blog' ? 'Mortgage Blog' : label + ' Articles'} | The Heichel Team`,
    description: 'Mortgage tips, loan program guides and news from The Heichel Team at Fairway Home Mortgage in Rochester and Austin, MN.',
    body,
    crumbs,
    type: 'CollectionPage',
    schema: [{ '@type': 'ItemList', itemListElement: posts.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: abs('/blog/' + p.slug), name: p.title })) }],
  });
}

function post(p) {
  const path = '/blog/' + p.slug;
  const crumbs = [['Blog', '/blog'], [p.title, path]];
  const others = POSTS.filter((o) => o !== p).slice(0, 3);
  const body = `<article>
<section class="page-hero"><div class="wrap wrap-narrow">${breadcrumbs(crumbs)}
<h1>${esc(p.title)}</h1>
<p class="post-meta" style="margin-top:1rem">By <a href="/team">The Heichel Team</a> · ${p.categories.join(' / ')} · <time datetime="${p.date}">${fmtDate(p.date)}</time></p>
</div></section>
<section class="section-tight"><div class="wrap prose">
  ${img(p.image[0], p.image[1], { w: 760, h: 430, eager: true })}
  <div class="answer"><span class="label">Key takeaways</span><p>${p.summary}</p></div>
  ${p.body}
  ${p.faqs ? `<h2>Frequently Asked Questions</h2>${faqList(p.faqs, { cols: 1 })}` : ''}
  <p class="reviewed">Reviewed by <a href="/kris">Kris Heichel</a>, NMLS #${SITE.nmls}. This article is for general education and isn’t a commitment to lend; programs and guidelines change.</p>
</div></section>
</article>
<section class="section-tight"><div class="wrap">${ctaStrip('Have questions about your situation?', 'Talk with The Heichel Team — no pressure, just answers.')}</div></section>
<section class="section-tight"><div class="wrap wrap-narrow"><h2>Recent Posts</h2>${others.map(postCard).join('')}</div></section>`;
  return page({
    path,
    title: `${p.title} | The Heichel Team`,
    description: p.description,
    body,
    crumbs,
    ogImage: p.image[0],
    type: 'WebPage',
    schema: [
      {
        '@type': 'BlogPosting',
        '@id': abs(path) + '#article',
        headline: p.title,
        description: p.description,
        abstract: p.summary,
        image: abs(`/img/${p.image[0]}.webp`),
        datePublished: p.date,
        dateModified: p.date,
        author: [{ '@id': BUSINESS_ID }, { '@id': KRIS_ID }],
        publisher: { '@id': BUSINESS_ID },
        mainEntityOfPage: abs(path),
        articleSection: p.categories,
        inLanguage: 'en-US',
      },
      ...(p.faqs ? [faqSchema(p.faqs)] : []),
    ],
  });
}

/* ================= Utility pages ================= */
// Static copies of the JS-rendered quiz forms so Netlify Forms registers their fields at deploy time.
const QUIZ_FORMS = {
  'quiz-purchase': ['buying', 'first_time', 'timeline', 'credit', 'down', 'military'],
  'quiz-refinance': ['current_rate', 'goal', 'credit', 'stay'],
  'quiz-financial-iq': ['credit', 'dti', 'savings', 'prequal', 'pmi'],
  'quiz-va': ['status', 'used_before', 'goal', 'timeline'],
};
const quizFormStubs = () => Object.entries(QUIZ_FORMS)
  .map(([n, f]) => `<form name="${n}" data-netlify="true" hidden>${['name', 'email', 'phone', 'page', ...f].map((x) => `<input name="${x}">`).join('')}</form>`)
  .join('');

function thankYou() {
  const body = `${quizFormStubs()}${pageHero({ title: 'Thank You!', lede: 'We received your information and someone from The Heichel Team will be in touch shortly. Need us sooner? Call <a href="tel:' + SITE.phoneE164 + '">' + SITE.phone + '</a>.' })}
<section class="section"><div class="wrap center"><div class="btn-row">${apply()}<a class="btn btn-teal" href="/">Back to Home</a></div></div></section>`;
  return page({ path: '/thank-you', title: 'Thank You | The Heichel Team', description: 'Thanks for contacting The Heichel Team.', body }).replace('index, follow', 'noindex, follow');
}

function notFound() {
  const body = `${pageHero({ title: 'Page Not Found', lede: 'Sorry, we couldn’t find that page. Try one of these instead.' })}
<section class="section"><div class="wrap center"><div class="btn-row"><a class="btn btn-teal" href="/">Return to Home</a><a class="btn btn-outline" href="/loan-programs">Loan Programs</a><a class="btn btn-outline" href="/schedule">Contact Us</a></div></div></section>`;
  return page({ path: '/404', title: 'Page Not Found | The Heichel Team', description: 'Page not found.', body }).replace('index, follow', 'noindex, follow');
}

export function allPages() {
  return [
    { path: '/', html: home() },
    { path: '/loan-programs', html: loanPrograms() },
    ...LOANS.map((l) => ({ path: '/' + l.slug, html: loanPage(l) })),
    { path: '/team', html: team() },
    { path: '/kris', html: kris() },
    { path: '/realtors', html: realtors() },
    { path: '/why-fairway', html: whyFairway() },
    { path: '/education', html: education() },
    { path: '/loan-process', html: loanProcess() },
    { path: '/quiz', html: purchaseQuiz() },
    { path: '/refi-quiz', html: refiQuiz() },
    { path: '/iq', html: iq() },
    { path: '/va-benefits', html: vaBenefits() },
    { path: '/equity-analysis-plan', html: equity() },
    { path: '/refi1', html: refiWatch() },
    { path: '/schedule', html: schedule() },
    { path: '/blog', html: blogIndex() },
    ...CATEGORIES.map(([s, n]) => ({ path: `/blog/category/${s}`, html: blogIndex(`/blog/category/${s}`, (p) => p.categories.includes(n), n) })),
    ...POSTS.map((p) => ({ path: '/blog/' + p.slug, html: post(p) })),
    { path: '/thank-you', html: thankYou(), noindex: true },
    { path: '/404', html: notFound(), noindex: true },
  ];
}
