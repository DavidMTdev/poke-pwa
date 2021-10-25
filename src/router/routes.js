import Login from '../views/Login'

const routes = [
  {
    path: '/',
    component: Login,
    meta: {
      requiresAuth: false
    }
  }
]

export default routes
