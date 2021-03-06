import axios from 'axios'
import * as str from './index'

import history from '../functions/history'
import { ErrorNotification } from '../components/notifications'

/**
* This function creates a new game for the user
*/
export const newGame = (successFunc, errorFunc) => dispatch =>  {
  // Make the API request
  const request = axios({
    method: 'POST',
    url: `${str.ROOT_URL}/games/`
  })

  // Handle the new data locally in s callback
  request.then((response) => {
    // Update the new game in redux
    dispatch({
      type: str.NEW_GAME,
      payload: response.data
    })

    // Handle the callback locally
    successFunc(response.data)
  })

  // Handle the request error locally in s callback
  .catch((error) => {
    console.log(error)
    errorFunc(error.response.data)
  })
}

/**
* This function takes the ID and fetches the game
*/
export const fetchGame = (id, successFunc, errorFunc) => dispatch =>  {
  // Make the API request
  const request = axios({
    method: 'GET',
    url: `${str.ROOT_URL}/games/${id}/`
  })

  // Handle the new data locally in a callback
  request.then((response) => {
    // Update the new game in redux
    dispatch({
      type: str.NEW_GAME,
      payload: response.data
    })

    // Handle the callback locally
    successFunc(response.data)
  })

  // Handle the request error locally in s callback
  .catch((error) => {
    // Redirect on 404 with error notification
    if(error.response.status === 404){
      history.push('/')
      ErrorNotification('Oops! This Game URL is not valid.', 'Here is a new game.')
    }

    errorFunc(error.response.data)
  })
}

/**
* This function will flip a block and then update the game state
*/
export const flipBlock = (data) => (dispatch, getState) =>  {
  // Ensure another request is not occuring
  if(getState().loaders.gameLoading){
    ErrorNotification('Too Fast!', 'Please wait for your last request to finish.')
    return;
  }

  // Start the game loader
  dispatch({
    type: str.START_GAME_LOADING
  })

  // Make the API request
  const request = axios({
    method: 'PATCH',
    url: `${str.ROOT_URL}/games/blocks/${data.id}/`,
    data: data
  })

  // Handle the new data locally in a callback
  request.then((response) => {
    dispatch({
      type: str.NEW_GAME,
      payload: response.data
    })

    // Start the game loader
    dispatch({
      type: str.STOP_GAME_LOADING
    })
  })

  // Handle the request error locally in s callback
  .catch((error) => {
    dispatch({
      type: str.STOP_GAME_LOADING
    })
  })
}

/**
* This function will flag a block and then update the game state
*/
export const flagBlock = (data) => (dispatch, getState) =>  {
  // Ensure another request is not occuring
  if(getState().loaders.gameLoading){
    ErrorNotification('Too Fast!', 'Please wait for your last request to finish.')
    return;
  }

  // Start the game loader
  dispatch({
    type: str.START_GAME_LOADING
  })

  // Make the API request
  const request = axios({
    method: 'PATCH',
    url: `${str.ROOT_URL}/games/blocks/${data.id}/`,
    data: data
  })

  // Handle the new data locally in a callback
  request.then((response) => {
    dispatch({
      type: str.NEW_GAME,
      payload: response.data
    })

    // Stop the game loading
    dispatch({
      type: str.STOP_GAME_LOADING
    })
  })

  // Handle the request error locally in s callback
  .catch((error) => {
    dispatch({
      type: str.STOP_GAME_LOADING
    })
  })
}
