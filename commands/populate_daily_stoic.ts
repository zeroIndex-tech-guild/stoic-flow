import FirebaseService from '#services/firebase_service'
import { inject } from '@adonisjs/core'
import { BaseCommand } from '@adonisjs/core/ace'
import type { CommandOptions } from '@adonisjs/core/types/ace'
import DAILY_STOICS from '../data/daily_stoic.js'
import { collection, doc, writeBatch } from 'firebase/firestore'

export default class PopulateDailyStoic extends BaseCommand {
  static commandName = 'populate:daily-stoic'
  static description = 'Populate daily stoic data in firebase store.'

  static options: CommandOptions = {}

  @inject()
  async run(firebaseService: FirebaseService) {
    try {
      const dailyStoicCollection = collection(firebaseService.firestore, 'daily_stoic')
      const batch = writeBatch(firebaseService.firestore)

      DAILY_STOICS.forEach((dailyStoic) => {
        const dailyStoicRef = doc(dailyStoicCollection)
        batch.set(dailyStoicRef, dailyStoic)
      })

      await batch.commit()

      console.log('Data saved successfully.')
      return true
    } catch (error) {
      console.error('Error saving data to Firestore:', error)
    }
  }
}
