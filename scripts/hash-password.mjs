/**
 * Generates the ADMIN_PASSWORD_HASH value for /admin login.
 *
 *   node scripts/hash-password.mjs "your new password"
 *   node scripts/hash-password.mjs            # generates a strong password for you
 *
 * Paste the printed hash into ADMIN_PASSWORD_HASH (.env and Vercel).
 * Keep these parameters in sync with src/lib/admin-auth.ts.
 */

const PBKDF2_ITERATIONS = 210_000;
const encoder = new TextEncoder();

const toHex = (buffer) =>
  Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

function generatePassword() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(20));
  return Array.from(bytes)
    .map((b) => alphabet[b % alphabet.length])
    .join("")
    .match(/.{1,5}/g)
    .join("-");
}

const provided = process.argv[2];
const password = provided || generatePassword();

const salt = toHex(crypto.getRandomValues(new Uint8Array(16)).buffer);
const keyMaterial = await crypto.subtle.importKey(
  "raw",
  encoder.encode(password),
  "PBKDF2",
  false,
  ["deriveBits"]
);
const bits = await crypto.subtle.deriveBits(
  { name: "PBKDF2", salt: encoder.encode(salt), iterations: PBKDF2_ITERATIONS, hash: "SHA-256" },
  keyMaterial,
  256
);

if (!provided) {
  console.log(`\nGenerated password:  ${password}`);
  console.log("Store it in a password manager - it is not recoverable from the hash.\n");
}
console.log(`ADMIN_PASSWORD_HASH=${salt}:${toHex(bits)}\n`);
