import { Route, Redirect } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children, ...rest }) => {
  const isToken = localStorage.getItem('token')

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isToken ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/home',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
