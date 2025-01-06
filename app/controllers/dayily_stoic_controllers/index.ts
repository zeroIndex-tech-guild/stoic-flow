import DailyStoicService from '#services/daily_stoic_service'
import FirebaseAdminService from '#services/firebase_admin_service'
import { inject } from '@adonisjs/core'
import { HttpContext } from '@adonisjs/core/http'

@inject()
export default class DailyStoicController {
  constructor(
    protected dailyStoicService: DailyStoicService,
    protected firebaseAdminService: FirebaseAdminService
  ) {}

  async renderDailyStoicPage({ view }: HttpContext) {
    const { data } = await this.dailyStoicService.getDailyStoic()
    return view.render('pages/home', {
      data,
    })
  }

  async renderAboutUsPage({ view }: HttpContext) {
    return view.render('pages/about_us')
  }

  async renderContactUsPage({ view }: HttpContext) {
    return view.render('pages/contact_us')
  }

  async getDailyStoic({ request, response }: HttpContext) {
    const today = request.params() as { day: string; year: string } | undefined
    const { data, error } = await this.dailyStoicService.getDailyStoic(Number(today?.day))

    if (error !== null) {
      return response.status(500).json({
        message: 'Error while getting daily stoic',
        status: 500,
        data: null,
        error,
      })
    }

    return {
      message: 'Get daily stoic',
      status: 200,
      data,
      error,
    }
  }
}
