import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Route from './Route'

import SignIn from '~/pages/SignIn'
import SignUp from '~/pages/SignUp'

import Panel from '~/pages/Panel'
import Profile from '~/pages/Profile'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/panel" component={Panel} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
      </Switch>
    </BrowserRouter>
  )
}
