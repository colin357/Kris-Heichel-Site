// Netlify function: POST /api/lead -> Salesforce (Jungo). See src/crm.mjs.
import { handleLeadRequest } from '../../src/crm.mjs';

export default (request) => handleLeadRequest(request);

export const config = { path: '/api/lead' };
