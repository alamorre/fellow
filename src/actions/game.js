import axios from 'axios'
import * as str from './index'

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
