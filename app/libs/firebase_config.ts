import admin, { ServiceAccount } from 'firebase-admin'
import env from '#start/env'

const serviceAccount = {
  type: env.get('FIREBASE_TYPE'),
  project_id: env.get('FIREBASE_PROJECT_ID'),
  private_key_id: env.get('FIREBASE_PRIVATE_KEY_ID'),
  private_key: env.get('FIREBASE_PRIVATE_KEY'),
  client_email: env.get('FIREBASE_CLIENT_EMAIL'),
  client_id: env.get('FIREBASE_CLIENT_ID'),
  auth_uri: env.get('FIREBASE_AUTH_URI'),
  token_uri: env.get('FIREBASE_TOKEN_URI'),
  auth_provider_x509_cert_url: env.get('FIREBASE_AUTH_PROVIDER_X509_CERT_URL'),
  client_x509_cert_url: env.get('FIREBASE_CLIENT_X509_CERT_URL'),
  universe_domain: env.get('FIREBASE_UNIVERSE_DOMAIN'),
} as ServiceAccount

console.log({ serviceAccount }, 'serviceAcc')

export const firebaseAdmin = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: env.get('FIREBASE_STORAGE_BUCKET'),
})
