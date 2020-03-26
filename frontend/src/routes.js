import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { Login } from './pages/login'
import { Register } from './pages/register'
import { Profile } from './pages/profile'
import { NewIncident } from './pages/new-incident'


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      <Route path="/incident/new-incident" component={NewIncident} />
    </Switch>
  )
}

export default Routes