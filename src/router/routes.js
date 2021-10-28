import Login from '../views/Login'
import Home from '../views/Home'
import Generations from '../views/Generations'
import Generation from '../views/Generation'
import Pokedex from '../views/Pokedex'
import PokedexRegion from '../views/PokedexRegion'
import Pokemon from '../views/Pokemon'
import Favorites from '../views/Favorites'

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
  },
  {
    path: '/pokedex',
    component: Pokedex,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/pokedex/:region',
    component: PokedexRegion,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/pokemon/:id',
    component: Pokemon,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/team/',
    component: Favorites,
    meta: {
      requiresAuth: true
    }
  }
]

export default routes
