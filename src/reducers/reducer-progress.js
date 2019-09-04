import * as str from '../actions'
import history from '../functions/history'
import { hasWon, hasLost, countMinesLeft } from '../functions/progress'

// Keep track of mines left, and if the user has won or lost
const initialState = {
  minesLeft: 0,
  hasLost: false,
  hasWon: false
}

export default function(state = initialState, action){

  switch (action.type) {
    // Upon new game data, recheck all progress indicators
    case str.NEW_GAME:
      return {
        ...state,
        minesLeft: countMinesLeft(action.payload),
        hasLost: hasLost(action.payload),
        hasWon: hasWon(action.payload)
      };

    // If missed, change nothing
    default:
      return state;
  }
}
