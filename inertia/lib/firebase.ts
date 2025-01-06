import env from '#start/env'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: env.get('FIREBASE_API_KEY'),
  authDomain: env.get('FIREBASE_AUTH_DOMAIN'),
  projectId: env.get('FIREBASE_PROJECT_ID'),
  storageBucket: env.get('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: env.get('FIREBASE_MESSAGING_SENDER_ID'),
  appId: env.get('FIREBASE_APP_ID'),
  measurementId: env.get('FIREBASE_MEASUREMENT_ID'),
}

export const firebase = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebase)
export const firebaseStore = getFirestore(firebase)
