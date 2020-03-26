import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { Login } from './pages/login'
import { Register } from './pages/register'


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  )
}

export default Routes