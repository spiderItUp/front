
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import indexRoutingConfig from '../config/index.routing.config'
import PrivateRoute from 'components/routes/privateRoute/privateRoute.component'

const IndexRoutingRoute = () => {
  return (
    <Switch>
      {
        indexRoutingConfig.map(({ guarded, redirect, ...rest }, indx) => {
        //   if (redirect) return <Redirect exact from="/h" to="/contact" key={indx}></Redirect>
          if (guarded) return <PrivateRoute {...rest} key={indx}></PrivateRoute>
          return <Route {...rest} key={indx}></Route>
        })
      }
    </Switch>
  )
}

IndexRoutingRoute.propTypes = {

}

export default IndexRoutingRoute
