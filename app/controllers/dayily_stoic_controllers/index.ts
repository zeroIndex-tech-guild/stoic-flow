import { getCurrentDayOfYear, getCurrentYear } from '#libs/index'
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

  async renderDailyStoicPage({ inertia, request }: HttpContext) {
    const qs = request.qs()

    const { day = getCurrentDayOfYear(), year = getCurrentYear() } = qs

    const { data, error } = await this.dailyStoicService.getDailyStoic(Number(year), Number(day))

    if (error !== null) {
      return inertia.render('errors/server_error', {
        errors: {
          message: 'Ooops!',
        },
      })
    }

    return inertia.render('home/index', {
      data,
      day,
      year,
    })
  }

  async getDailyStoic({ request, response }: HttpContext) {
    const today = request.params() as { day: number; year: number }
    const { data, error } = await this.dailyStoicService.getDailyStoic(today.year, today.day)

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
