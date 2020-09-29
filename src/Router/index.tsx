import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../screens/Home'
import Portfolio from '../screens/Portfolio'

export default function Router(): JSX.Element {
  return (
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Route path="/Portfolio">
        <Portfolio />
      </Route>
    </Switch>
  )
}
