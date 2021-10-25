import Login from '../views/Login'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  }
]

export default routes
