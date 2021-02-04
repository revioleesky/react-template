import React, { Component, lazy, Suspense } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
const IndexComponents = lazy(() => import('./pages/home/Index'))
class router extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route exact path="/" component={IndexComponents}></Route>
              </Switch>
            </Suspense>
          </React.Fragment>
        </Router>
      </React.Fragment>
    )
  }
}

export default router
