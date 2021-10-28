import { BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useEffect } from 'react'

import routes from './routes'
// eslint-disable-next-line no-unused-vars
import { LightTheme, DarkTheme } from '../themes'
import { GlobalStyle } from '../styles'

import Header from '../components/header'
import PrivateRoute from '../components/route/PrivateRoute'
import PublicRoute from '../components/route/PublicRoute'

const Router = () => {
  useEffect(() => {
    localStorage.setItem('language', 'en')
  }, [])

  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <Header />
        <Switch>
          {routes.map(
            (
              {
                component: Views,
                path,
                exact = true,
                meta = { requiresAuth: false, admin: false }
              },
              index
            ) =>
              meta.requiresAuth ? (
                <PrivateRoute key={index} path={path} exact={exact}>
                  <Views />
                </PrivateRoute>
              ) : (
                <PublicRoute key={index} path={path} exact={exact}>
                  <Views />
                </PublicRoute>
              )
          )}
          <Redirect from='/*' to='/' />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
