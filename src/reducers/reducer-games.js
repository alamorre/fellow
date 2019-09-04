import * as str from '../actions'
import history from '../functions/history'

// Start the game state with nothing (i.e. empty)
const initialState = {}

export default function(state = initialState, action){

  switch (action.type) {
    // Update the entire game obj
    case str.NEW_GAME:
      return action.payload;

    // If missed, change nothing
    default:
      return state;
  }
}
