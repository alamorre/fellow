import React, { Component } from 'react';

// Handle the urls and browser history
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import { Game, Start } from './pages'

export default class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <Switch>
          <Route path='/:id' component={Game} />
          <Route path='/' component={Start} />
        </Switch>
      </Router>
    );
  }
}
