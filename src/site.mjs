// Central business facts. Update here and every page, schema block and llms.txt picks it up.
export const SITE = {
  url: 'https://yourwaymortgage.com',
  name: 'The Heichel Team',
  legalName: 'The Heichel Team at Fairway Home Mortgage',
  tagline: 'Reliable Mortgage Solutions Tailored To You',
  description:
    'The Heichel Team at Fairway Home Mortgage offers personalized home loans in Rochester, Austin & Southeast Minnesota. FHA, VA, USDA, Conventional & more. Get pre-approved today.',
  phone: '507.460.4500',
  phoneE164: '+15074604500',
  email: 'teamheichel@fairwaymc.com',
  hours: 'Mon–Fri 8am–8pm',
  hoursSpec: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '20:00' },
  since: 2003,
  nmls: '27180',
  companyNmls: '2289',
  azLicense: 'BK-0904162',
  licensedIn: ['CO', 'MN', 'IA', 'WI', 'SD', 'AZ', 'MI'],
  offices: [
    { name: 'Austin Office', street: '1403 15th Avenue Northwest', city: 'Austin', state: 'MN', zip: '55912' },
    { name: 'Rochester Office', street: '3273 19th St NW, Ste 3', city: 'Rochester', state: 'MN', zip: '55901' },
  ],
  areaServed: ['Rochester, MN', 'Austin, MN', 'Albert Lea, MN', 'Owatonna, MN', 'Dodge Center, MN', 'Southeast Minnesota'],
  links: {
    apply: 'https://fairway.tidalwave.ai/signup/kris.heichel/D8VEHC3DPERAQO6407KG',
    calendly: 'https://calendly.com/the-heichel-team?hide_event_type_details=1',
    reviews: 'https://www.experience.com/reviews/kris-heichel-152065',
    google: 'https://share.google/QTosD5PJiTtVUfHGn',
    facebook: 'https://www.facebook.com/Krisheichel',
    instagram: 'https://www.instagram.com/krisheichel_toplender/',
    linkedin: 'https://www.linkedin.com/in/kris-heichel-mlo-cdlp-cma-86118b43/',
    agentHandbook:
      'https://content.app-sources.com/s/732245580484058241/uploads/Files/Agent_Handbook_-_November_2025-4191635.pdf',
    hiddenMarketClass: 'https://www.eventbrite.com/e/1991490743423?aff=oddtdtcreator',
    rateWidget: 'https://www2.optimalblue.com/OBMMI/widgetConfig.php',
    nmls: 'https://www.nmlsconsumeraccess.org/',
    awi: 'https://americanwarriorinitiative.com/',
    fairwayCares: 'https://fairwaycares.org/',
  },
  legal: [
    ['Terms of Use', 'https://www.fairway.com/legal/terms-of-use'],
    ['Privacy Policy', 'https://www.fairway.com/legal/privacy-policy#PrivacyPolicy'],
    ['Legal Disclosures', 'https://www.fairway.com/legal/legal-disclosures'],
    ['Texas Consumer Complaint & Recovery Fund Notice', 'https://www.fairway.com/legal/texas-consumer-complaints'],
    ['Illinois Community Reinvestment Notice', 'https://www.fairway.com/legal/il-community-reinvestment-notice'],
    ['NMLS Consumer Access', 'https://www.nmlsconsumeraccess.org/'],
    ['Google Business Page', 'https://share.google/QTosD5PJiTtVUfHGn'],
  ],
  // Where forms POST. Leave empty on Netlify (Netlify Forms picks them up automatically);
  // otherwise set to a Formspree/Basin/etc. endpoint, e.g. 'https://formspree.io/f/xxxxxxx'.
  formEndpoint: process.env.FORM_ENDPOINT || '',
  // Date the content was last reviewed; shown on loan pages and emitted as dateModified.
  reviewed: '2026-10-19',
};
