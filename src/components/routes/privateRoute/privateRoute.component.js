import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import AuthService from 'services/auth.service'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <>
      <Route {...rest} render={
        (props) => {
          if (AuthService().isAuthenticated()) return <Component {...props}></Component>
          // eslint-disable-next-line react/prop-types
          else return <Redirect exact /* from="/h" */ to="/login"></Redirect>
        }
      }></Route>
    </>
  )
}

// PrivateRoute.propTypes = {

// }

export default PrivateRoute
