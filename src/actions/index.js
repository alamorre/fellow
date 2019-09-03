import axios from 'axios'

const ROOT_URL = 'http://127.0.0.1:8000'

// export function newGame(successFunc, errorFunc){
//   // Make the API request
//   const request = axios({
//     method: 'POST',
//     url: `${ROOT_URL}/games/`
//   })
//
//   // Handle the new data locally in s callback
//   request.then((response) => {
//     console.log(response.data)
//     successFunc(response.data)
//   })
//
//   // Handle the request error locally in s callback
//   .catch((error) => {
//     console.log(error)
//     errorFunc(error.response.data)
//   })
// }
