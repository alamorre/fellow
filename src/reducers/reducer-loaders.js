import * as str from '../actions'
import history from '../functions/history'

// Keep track of game parts that are loading
const initialState = {
  gameLoading: false
}

export default function(state = initialState, action){

  switch (action.type) {
    // Update the entire game obj
    case str.START_GAME_LOADING:
      return {
        ...state,
        gameLoading: true
      };
    case str.STOP_GAME_LOADING:
      return {
        ...state,
        gameLoading: false
      };

    // If missed, change nothing
    default:
      return state;
  }
}
