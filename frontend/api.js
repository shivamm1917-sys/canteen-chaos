/* ------------------------------------------------------------------
   api.js - every network call lives here.
   Nothing else in the app should call fetch() directly.
   ------------------------------------------------------------------ */

const API_BASE = '/api';

async function request(path, options = {}) {
  const res = await fetch(API_BASE + path, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  let body = null;
  try {
    body = await res.json();
  } catch (e) {
    throw new Error('The server sent something that was not JSON');
  }

  // the server can answer 200 and still report a problem inside the body
  if (!res.ok || (body && body.status === 'error')) {
    const message = (body && (body.error || body.message)) || `Request failed (${res.status})`;
    const err = new Error(message);
    err.status = res.status;
    err.details = body && body.details;
    throw err;
  }

  return body;
}

const api = {
  getMenu({
    veg = 'all',
    q = '',
    category = '',
    sort = '',
    servedOnly = '',
    maxPrice = '',
    page = 1,
    limit = 5,
  } = {}) {
    const params = new URLSearchParams();

    if (veg && veg !== 'all') params.set('veg', veg);
    if (q) params.set('q', q);
    if (category) params.set('category', category);
    if (sort) params.set('sort', sort);
    if (servedOnly) params.set('servedOnly', servedOnly);
    if (maxPrice !== '' && maxPrice != null) params.set('maxPrice', maxPrice);

    // CRITICAL: You must pass these so the server slices the records
    params.set('page', page);
    params.set('limit', limit);

    const query = params.toString();
    return request('/menu' + (query ? `?${query}` : ''));
  },

  getDish(id) {
    return request(`/menu/${id}`);
  },

  placeOrder(items) {
    return request('/orders', {
      method: 'POST',
      body: JSON.stringify({ items }),
    });
  },

  getOrder(token) {
    return request(`/orders/${token}`);
  },
};
