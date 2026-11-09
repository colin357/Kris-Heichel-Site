// Sends website leads to Kris's Jungo CRM. Jungo runs inside Salesforce and uses the
// standard Lead object, so leads go in through Salesforce Web-to-Lead.
// Used by the serverless endpoints in api/lead.js (Vercel) and netlify/functions/lead.mjs (Netlify).
//
// Environment variables (set in the host's dashboard, never in the repo):
//   SALESFORCE_ORG_ID         required. The 15-character Org ID from Salesforce Setup > Company Information.
//   SALESFORCE_WEBTOLEAD_URL  optional. Defaults to Salesforce's shared Web-to-Lead endpoint. Use the URL
//                             from Setup > Web-to-Lead's generated HTML if it differs (e.g. a My Domain URL).
//   SALESFORCE_LEAD_SOURCE    optional. Lead Source picklist value. Defaults to "Website".
//   SALESFORCE_DEBUG_EMAIL    optional. Turns on Salesforce's Web-to-Lead debug mode and emails results here.

const DEFAULT_URL = 'https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8';

// Friendly names for the site's form ids, shown on the lead.
const FORM_LABELS = {
  'footer-contact': 'Footer contact form',
  'have-questions': 'Have Questions form',
  'schedule-contact': 'Schedule page contact form',
  'realtor-contact': 'Realtor contact form',
  'refi-watchlist': 'Refi Watch List',
  'refi-watchlist-home': 'Refi Watch List (home page)',
  'equity-analysis': 'Home Equity Analysis',
};

// Fields that map to standard Salesforce Lead fields; everything else goes into the description.
const STANDARD = new Set(['first_name', 'last_name', 'name', 'email', 'phone', 'address']);
const SKIP = new Set(['form-name', 'company', 'page', 'bot-field']);
const SITE_URL = 'https://yourwaymortgage.com';

const clean = (v, max = 255) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, max);
const titleCase = (k) => k.replace(/[_-]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

/** Turns one site form submission into Web-to-Lead form fields. */
export function toWebToLead(fields, env = process.env) {
  const get = (k) => clean(fields[k]);
  let first = get('first_name');
  let last = get('last_name');
  if (!first && !last && get('name')) {
    const parts = get('name').split(' ');
    last = parts.length > 1 ? parts.pop() : parts[0];
    first = parts.length ? parts.join(' ') : '';
    if (first === last) first = '';
  }

  const formName = get('form-name');
  const lines = [`Website form: ${FORM_LABELS[formName] || formName || 'unknown'}`];
  if (get('page')) lines.push(`Page: ${SITE_URL}${get('page')}`);
  for (const [k, v] of Object.entries(fields)) {
    if (STANDARD.has(k) || SKIP.has(k) || !clean(v)) continue;
    lines.push(`${titleCase(k)}: ${clean(v, 4000)}`);
  }

  const out = {
    oid: env.SALESFORCE_ORG_ID,
    lead_source: env.SALESFORCE_LEAD_SOURCE || 'Website',
    first_name: first,
    // Salesforce requires Last Name and Company on a Lead.
    last_name: last || get('email') || 'Website Lead',
    company: [first, last].filter(Boolean).join(' ') || 'Website Lead',
    email: get('email'),
    phone: get('phone'),
    street: get('address'),
    description: lines.join('\n').slice(0, 32000),
  };
  if (env.SALESFORCE_DEBUG_EMAIL) {
    out.debug = '1';
    out.debugEmail = env.SALESFORCE_DEBUG_EMAIL;
  }
  for (const k of Object.keys(out)) if (!out[k]) delete out[k];
  return out;
}

/** Posts a lead to Salesforce. Throws if it could not be delivered. */
export async function sendToSalesforce(fields, env = process.env) {
  if (!env.SALESFORCE_ORG_ID) throw new Error('SALESFORCE_ORG_ID is not set');
  const res = await fetch(env.SALESFORCE_WEBTOLEAD_URL || DEFAULT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(toWebToLead(fields, env)).toString(),
    redirect: 'manual',
  });
  // Web-to-Lead answers 200 (or a redirect to retURL) whether or not the lead was accepted;
  // Salesforce emails the admin about rejected leads. Anything else is a delivery failure.
  if (res.status >= 400) throw new Error(`Salesforce responded ${res.status}`);
}

/** Shared request handler for both hosts: POST /api/lead with a urlencoded or multipart body. */
export async function handleLeadRequest(request, env = process.env) {
  if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { Allow: 'POST' } });
  let fields;
  try {
    fields = Object.fromEntries((await request.formData()).entries());
  } catch {
    return Response.json({ ok: false, error: 'Bad form data' }, { status: 400 });
  }
  if (fields.company || fields['bot-field']) return Response.json({ ok: true }); // honeypot: pretend success
  if (!clean(fields.email) && !clean(fields.phone)) return Response.json({ ok: false, error: 'Email or phone required' }, { status: 400 });
  try {
    await sendToSalesforce(fields, env);
    return Response.json({ ok: true });
  } catch (err) {
    console.error('Lead not sent to Salesforce:', err.message);
    return Response.json({ ok: false, error: 'CRM delivery failed' }, { status: 502 });
  }
}
