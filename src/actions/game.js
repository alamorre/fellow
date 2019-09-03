import axios from 'axios'

import * as str from './index'

export const newGame = (successFunc, errorFunc) => dispatch =>  {
  // Make the API request
  const request = axios({
    method: 'POST',
    url: `${str.ROOT_URL}/games/`
  })

  // Handle the new data locally in s callback
  request.then((response) => {
    console.log(response.data)
    successFunc(response.data)
  })

  // Handle the request error locally in s callback
  .catch((error) => {
    console.log(error)
    errorFunc(error.response.data)
  })
}
