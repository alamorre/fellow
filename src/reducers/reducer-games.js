import * as str from '../actions'
import history from '../functions/history'

const initialState = {
}

export default function(state = initialState, action){

  switch (action.type) {
    // Upon new game, return the entire game obj
    case str.NEW_GAME:
      return action.payload;

    // If missed, change nothing
    default:
      return state;
  }
}
