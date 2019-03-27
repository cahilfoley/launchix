import * as React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../containers/Home'

const routes = (
  <div>
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  </div>
)

export default routes
