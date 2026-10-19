// Calls to the Express API; the session cookie is sent automatically on the same origin
export const api = async (path: string, options: RequestInit = {}) => {
  const res = await fetch(`/api${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, ...data };
};
