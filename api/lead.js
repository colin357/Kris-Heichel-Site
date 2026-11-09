// Vercel serverless endpoint: POST /api/lead -> Salesforce (Jungo). See src/crm.mjs.
import { handleLeadRequest } from '../src/crm.mjs';

export function POST(request) {
  return handleLeadRequest(request);
}
