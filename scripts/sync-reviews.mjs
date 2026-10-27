// Pulls Kris's public review totals and latest reviews from her Experience.com profile
// (which aggregates Experience, Google, Zillow and Facebook reviews) into data/reviews.json.
// Runs before every build. If the fetch fails, the last saved data/reviews.json is used.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const PROFILE = 'https://www.experience.com/reviews/kris-heichel-152065';
const OUT = new URL('../data/reviews.json', import.meta.url);
const KEEP = 12; // latest written reviews to show

const clean = (s = '') => String(s).replace(/\s+/g, ' ').trim();

try {
  const res = await fetch(PROFILE, { headers: { 'user-agent': 'Mozilla/5.0 (site build)' }, signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const html = await res.text();
  const m = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) throw new Error('profile data not found');
  const { pageProps } = JSON.parse(m[1]).props;
  const metrics = pageProps.profileData.reviewMetrics;
  const reviews = pageProps.reviewData.reviews
    .filter((r) => clean(r.review).length >= 40)
    .map((r) => ({
      text: clean(r.review),
      rating: Number(r.rating),
      name: [r.reviewer_first_name, r.reviewer_last_name].filter((x) => x && x !== 'None').join(' '),
      city: r.city && r.city !== 'None' ? `${r.city}, ${r.state || 'MN'}` : '',
      date: new Date(r.review_date).toISOString().slice(0, 10),
      source: r.source_label || 'Experience',
    }))
    .slice(0, KEEP);
  if (!metrics?.total_reviews_received || !reviews.length) throw new Error('unexpected profile shape');
  const data = {
    source: PROFILE,
    fetchedAt: new Date().toISOString().slice(0, 10),
    total: metrics.total_reviews_received,
    average: metrics.total_avg_rating,
    bySource: [
      ['Experience.com', metrics.total_experience_reviews, metrics.avg_experience_rating],
      ['Google', metrics.total_google_reviews, metrics.avg_google_rating],
      ['Facebook', metrics.total_facebook_reviews, metrics.avg_facebook_rating],
      ['Zillow', metrics.total_zillow_reviews, metrics.avg_zillow_rating],
    ].filter(([, n]) => n > 0).map(([name, count, average]) => ({ name, count, average })),
    stars: Object.fromEntries(pageProps.reviewData.starCounts.map((s) => [s.star, s.count])),
    reviews,
  };
  writeFileSync(OUT, JSON.stringify(data, null, 2) + '\n');
  console.log(`Reviews synced: ${data.total} reviews, ${data.average} average, ${reviews.length} latest saved`);
} catch (e) {
  const saved = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')).fetchedAt : 'none';
  console.warn(`Review sync skipped (${e.message}); using saved data from ${saved}`);
}
