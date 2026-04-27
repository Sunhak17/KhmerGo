const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";
const API_ORIGIN = API_BASE_URL.replace(/\/api\/?$/, "");
const AUTH_TOKEN_KEY = "khmergo_auth_token";

export function getAuthToken() {
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

export function setAuthToken(token) {
  if (token) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  }
}

export function clearAuthToken() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}

export async function fetchJson(path, options = {}) {
  const token = options.auth ? getAuthToken() : null;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const fallbackMessage = `Request failed with status ${response.status}`;
    let payload = null;

    try {
      payload = await response.json();
    } catch (_error) {
      payload = null;
    }

    throw new Error(payload?.message || fallbackMessage);
  }

  return response.json();
}

export function resolveAssetUrl(value) {
  if (!value) {
    return value;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  return `${API_ORIGIN}${value}`;
}

export function slugify(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// API wrapper object with common HTTP methods
const api = {
  get: (path) => fetchJson(path, { auth: true }),
  post: (path, data) => fetchJson(path, { auth: true, method: "POST", body: JSON.stringify(data) }),
  put: (path, data) => fetchJson(path, { auth: true, method: "PUT", body: JSON.stringify(data) }),
  delete: (path) => fetchJson(path, { auth: true, method: "DELETE" }),
};

export default api;
