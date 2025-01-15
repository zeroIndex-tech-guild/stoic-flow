import { getFirebaseAdmin } from '#libs/firebase_config'
import admin from 'firebase-admin'

export default class FirebaseAdminService {
  private firebase: admin.app.App | null = null
  public auth: admin.auth.Auth | null = null
  public firestore: admin.firestore.Firestore | null = null

  constructor() {
    this.firebase = getFirebaseAdmin()
    this.auth = this.firebase.auth()
    this.firestore = this.firebase.firestore()
  }
}
