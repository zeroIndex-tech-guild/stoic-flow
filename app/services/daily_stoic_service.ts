import { inject } from '@adonisjs/core'
import FirebaseAdminService from './firebase_admin_service.js'
import { DailyStoicEntry } from '#shared/types/daily_stoic'

@inject()
export default class DailyStoicService {
  private COLLECTION_NAME = 'daily_stoic'

  constructor(protected firebaseAdminService: FirebaseAdminService) {}

  async getDailyStoic(year: number, day: number) {
    year // haha just to use :p

    try {
      const firestore = this.firebaseAdminService.firestore!
      const dayOfYear = day

      const collectionRef = firestore.collection(this.COLLECTION_NAME)

      const dailyStoicQuery = collectionRef.where('day', '==', dayOfYear)
      const querySnapshot = await dailyStoicQuery.get()

      const dailyStoic = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))

      if (dailyStoic.length > 0) {
        const data = dailyStoic[0] as DailyStoicEntry
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
