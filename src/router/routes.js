import Login from '../views/Login'
import Home from '../views/Home'
import Generations from '../views/Generations'
import Generation from '../views/Generation'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/generations',
    component: Generations,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/generations/:name',
    component: Generation,
    meta: {
      requiresAuth: true
    }
  }
]

export default routes
