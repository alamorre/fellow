import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './components/app'
import reducers from './reducers'

// Thunk and promise are middlewares for redux
import thunk from "redux-thunk"
import promise from 'redux-promise'

// Middleware is used in redux to make reducers return new global app states
const createStoreWithMiddleware = applyMiddleware(promise, thunk)(createStore)
export const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
