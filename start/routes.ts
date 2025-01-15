/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const loginController = () => import('#controllers/auth/index')
const dailyStoicController = () => import('#controllers/dayily_stoic_controllers/index')

// VIEWS ROUTES
router
  .group(() => {
    router.get('/login', [loginController, 'renderLoginPage']).as('login')

    router.get('/signup', [loginController, 'renderSignUpPage']).as('signup')

    router.get('', [dailyStoicController, 'renderDailyStoicPage']).as('daily_stoic')
  })
  .as('views')

// API ROUTES
router
  .group(() => {
    router.post('/auth/signup', [loginController, 'signup']).as('signup')
  })
  .prefix('/api/v1')
  .as('api')
