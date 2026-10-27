// Review data synced from Experience.com by scripts/sync-reviews.mjs (see data/reviews.json).
import { readFileSync } from 'node:fs';

export const REVIEW_DATA = JSON.parse(readFileSync(new URL('../data/reviews.json', import.meta.url), 'utf8'));
export const fmtCount = (n) => Number(n).toLocaleString('en-US');
export const fmtAvg = (n) => Number(n).toFixed(2).replace(/0$/, '');
