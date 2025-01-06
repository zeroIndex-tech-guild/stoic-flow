import { inject } from '@adonisjs/core'
import FirebaseAdminService from './firebase_admin_service.js'
import { getDayOfYear } from '../libs/index.js'

@inject()
export default class DailyStoicService {
  private COLLECTION_NAME = 'daily_stoic'

  constructor(protected firebaseAdminService: FirebaseAdminService) {}

  async getDailyStoic(day?: number) {
    try {
      const firestore = this.firebaseAdminService.firestore!
      const dayOfYear = Number(day) || getDayOfYear()

      const collectionRef = firestore.collection(this.COLLECTION_NAME)

      const dailyStoicQuery = collectionRef.where('day', '==', dayOfYear)
      const querySnapshot = await dailyStoicQuery.get()

      const dailyStoic = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      if (dailyStoic.length > 0) {
        const data = dailyStoic[0]
        return {
          data,
          error: null,
        }
      } else {
        return {
          data: null,
          error: new Error(`No daily stoic content found for day ${dayOfYear}`),
        }
      }
    } catch (error) {
      return {
        data: null,
        error: error as Error,
      }
    }
  }
}
