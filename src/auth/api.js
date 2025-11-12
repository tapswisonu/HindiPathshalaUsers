
const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";
export async function api(path, method = "GET", body = null, token = null) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(BASE + path, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });
  return res.json();
}
