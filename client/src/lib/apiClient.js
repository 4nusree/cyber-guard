const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api/v1';

const clientConfig = {
  getAccessToken: () => null,
  refreshAccessToken: null,
  onAuthFailure: null,
};

export function configureApiClient(config = {}) {
  if (config.getAccessToken) {
    clientConfig.getAccessToken = config.getAccessToken;
  }
  if (Object.prototype.hasOwnProperty.call(config, 'refreshAccessToken')) {
    clientConfig.refreshAccessToken = config.refreshAccessToken;
  }
  if (Object.prototype.hasOwnProperty.call(config, 'onAuthFailure')) {
    clientConfig.onAuthFailure = config.onAuthFailure;
  }
}

function buildUrl(path) {
  if (/^https?:\/\//.test(path)) {
    return path;
  }
  return `${API_BASE_URL}${path}`;
}

async function parseResponse(response) {
  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('application/json')) {
    return response.json();
  }
  return response.text();
}

export async function apiRequest(path, options = {}) {
  const {
    auth = true,
    retryOnUnauthorized = true,
    headers = {},
    body,
    suppressAuthFailure = false,
    ...rest
  } = options;

  const requestHeaders = new Headers(headers);
  if (body && !(body instanceof FormData) && !requestHeaders.has('Content-Type')) {
    requestHeaders.set('Content-Type', 'application/json');
  }

  const accessToken = clientConfig.getAccessToken?.();
  if (auth && accessToken) {
    requestHeaders.set('Authorization', `Bearer ${accessToken}`);
  }

  const response = await fetch(buildUrl(path), {
    credentials: 'include',
    headers: requestHeaders,
    body: body instanceof FormData || body == null ? body : JSON.stringify(body),
    ...rest,
  });

  if (response.status === 401 && retryOnUnauthorized && clientConfig.refreshAccessToken) {
    const refreshed = await clientConfig.refreshAccessToken();
    if (refreshed) {
      return apiRequest(path, { ...options, retryOnUnauthorized: false });
    }

    if (!suppressAuthFailure) {
      clientConfig.onAuthFailure?.();
    }
  }

  const payload = await parseResponse(response);

  if (!response.ok) {
    const error = new Error(
      typeof payload === 'object' && payload?.detail
        ? payload.detail
        : 'Request failed'
    );
    error.status = response.status;
    error.payload = payload;
    throw error;
  }

  return payload;
}

export async function refreshSessionRequest() {
  const response = await fetch(buildUrl('/auth/refresh'), {
    method: 'POST',
    credentials: 'include',
  });

  const payload = await parseResponse(response);
  if (!response.ok) {
    return null;
  }

  return payload;
}

export { API_BASE_URL };
