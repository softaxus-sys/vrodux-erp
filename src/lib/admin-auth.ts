/**
 * Admin authentication.
 *
 * Built on Web Crypto only, so the same helpers run in Edge middleware and in
 * Node route handlers. Passwords are stored as PBKDF2 hashes in ADMIN_PASSWORD_HASH;
 * the session is a short HMAC-signed token in an httpOnly cookie.
 */

export const ADMIN_COOKIE = "vrodux_admin_session";
export const SESSION_MAX_AGE = 60 * 60 * 8; // 8 hours

const PBKDF2_ITERATIONS = 210_000;
const encoder = new TextEncoder();

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function base64UrlEncode(input: string): string {
  return btoa(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(input: string): string {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  return atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
}

/** Constant-time string compare, so we don't leak how much of a hash matched. */
function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let i = 0; i < a.length; i++) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

async function pbkdf2(password: string, salt: string): Promise<string> {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: encoder.encode(salt),
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    keyMaterial,
    256
  );
  return toHex(bits);
}

/** Produces the `salt:hash` string that belongs in ADMIN_PASSWORD_HASH. */
export async function hashPassword(password: string): Promise<string> {
  const salt = toHex(crypto.getRandomValues(new Uint8Array(16)).buffer);
  const hash = await pbkdf2(password, salt);
  return `${salt}:${hash}`;
}

export async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  return timingSafeEqual(await pbkdf2(password, salt), hash);
}

async function hmacKey(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

async function sign(payload: string, secret: string): Promise<string> {
  const signature = await crypto.subtle.sign(
    "HMAC",
    await hmacKey(secret),
    encoder.encode(payload)
  );
  return toHex(signature);
}

/**
 * Session token: base64url(JSON payload).hmac — self-contained, so middleware can
 * validate it at the edge without a database round trip.
 */
export async function createSessionToken(email: string, secret: string): Promise<string> {
  const payload = base64UrlEncode(
    JSON.stringify({ email, exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE })
  );
  return `${payload}.${await sign(payload, secret)}`;
}

export async function verifySessionToken(
  token: string | undefined,
  secret: string
): Promise<{ email: string } | null> {
  if (!token) return null;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  if (!timingSafeEqual(await sign(payload, secret), signature)) return null;

  try {
    const decoded = JSON.parse(base64UrlDecode(payload)) as { email?: string; exp?: number };
    if (!decoded.email || !decoded.exp) return null;
    if (decoded.exp < Math.floor(Date.now() / 1000)) return null;
    return { email: decoded.email };
  } catch {
    return null;
  }
}
