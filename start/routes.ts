/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')

const loginController = () => import('#controllers/auth/index')

// VIEWS ROUTES
router
  .group(() => {
    router.get('/login', [loginController, 'renderLoginPage']).as('login')

    router.get('/signup', [loginController, 'renderSignUpPage']).as('signup')
  })
  .as('views')
