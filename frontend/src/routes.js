import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { Login } from './pages/login'


const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Login} />
    </Switch>
  )
}

export default Routes