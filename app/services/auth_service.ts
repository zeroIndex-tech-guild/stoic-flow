import { createUserData } from '#validators/create_user'
import { inject } from '@adonisjs/core'
import FirebaseAdminService from './firebase_admin_service.js'

@inject()
export default class AuthService {
  constructor(protected firebaseAdminService: FirebaseAdminService) {}

  async createUser(data: createUserData) {
    try {
      const auth = this.firebaseAdminService.auth!
      const user = await auth.createUser({
        email: data.email,
        password: data.password,
      })
      return {
        data: user,
        error: null,
      }
    } catch (e) {
      return {
        data: null,
        error: e as Error,
      }
    }
  }
}
