import AuthService from '#services/auth_service'
import { createUserValidador } from '#validators/create_user'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(protected authService: AuthService) {}

  renderSignUpPage({ view }: HttpContext) {
    return view.render('pages/auth/signup')
  }

  renderLoginPage({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  async signup({ request, session, response }: HttpContext) {
    const validatedData = await request.validateUsing(createUserValidador)

    const { error } = await this.authService.createUser(validatedData)

    if (error !== null) {
      session.flash('message', {
        message: 'Error while creating user',
        type: 'error',
      })
      return response.redirect().back()
    }

    session.flash('message', {
      message: 'User created successfully',
      type: 'success',
    })
    return response.redirect('/login')
  }
}
