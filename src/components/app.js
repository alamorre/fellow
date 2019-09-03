import React, { Component } from 'react';

// Handle the urls and browser history
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import { Grid } from './board'

export default class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path='/:id' component={Grid} />
          <Route path='/' component={Grid} />
        </Switch>
      </Router>
    );
  }
}
