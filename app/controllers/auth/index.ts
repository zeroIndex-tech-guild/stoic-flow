import AuthService from '#services/auth_service'
import { createUserValidador } from '#validators/create_user'
import { inject } from '@adonisjs/core'
import { HttpContext, ResponseStatus } from '@adonisjs/core/http'

@inject()
export default class AuthController {
  constructor(protected authService: AuthService) {}

  renderSignUpPage({ inertia }: HttpContext) {
    return inertia.render('auth/signup/index')
  }

  renderLoginPage({ inertia }: HttpContext) {
    return inertia.render('auth/login/index')
  }

  async signup({ request, response }: HttpContext) {
    const validatedData = await request.validateUsing(createUserValidador)

    const { error, data } = await this.authService.createUser(validatedData)

    if (error !== null) {
      return response.status(ResponseStatus.BadRequest).json({
        status: ResponseStatus.BadRequest,
        errors: [error],
        data: null,
        message: 'Error while creating user',
      })
    }

    return response.status(ResponseStatus.Created).json({
      status: ResponseStatus.Created,
      errors: null,
      data: {
        user: data,
      },
      message: 'User created successfully',
    })
  }
}
