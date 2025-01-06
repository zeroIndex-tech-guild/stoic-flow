import env from '#start/env'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: env.get('FIREBASE_API_KEY'),
  authDomain: env.get('FIREBASE_AUTH_DOMAIN'),
  projectId: env.get('FIREBASE_PROJECT_ID'),
  storageBucket: env.get('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: env.get('FIREBASE_MESSAGING_SENDER_ID'),
  appId: env.get('FIREBASE_APP_ID'),
  measurementId: env.get('FIREBASE_MEASUREMENT_ID'),
}

export default class FirebaseService {
  private firebase: FirebaseApp
  public auth: Auth
  public firestore: Firestore

  constructor() {
    this.firebase = initializeApp(firebaseConfig)
    this.auth = getAuth(this.firebase)
    this.firestore = getFirestore(this.firebase)
  }
}
