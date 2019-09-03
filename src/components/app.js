import React, { Component } from 'react';

// Handle the urls and browser history
import { Router, Route, Switch } from 'react-router-dom'
import history from '../functions/history';

import { Game, Start } from './pages'

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path='/:id' component={Game} />
          <Route path='/' component={Start} />
        </Switch>
      </Router>
    );
  }
}
