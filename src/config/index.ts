import { config } from "dotenv";
config({ path: ".env" });

export const CREDENTIALS = process.env.CREDENTIALS === "true";
export const {
  NODE_ENV,
  PORT,
  SECRET_KEY,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
  JWT_EXPIRES_IN,
} = process.env;
export const {
  FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  FIREBASE_AUTH_URI,
  FIREBASE_CLIENT_EMAIL,
  FIREBASE_CLIENT_ID,
  FIREBASE_CLIENT_X509_CERT_URL,
  FIREBASE_PRIVATE_KEY,
  FIREBASE_PRIVATE_KEY_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_TOKEN_URI,
  FIREBASE_TYPE,
} = process.env;
export const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USER } =
  process.env;
