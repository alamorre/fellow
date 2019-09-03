import * as str from '../actions'
import history from '../functions/history'
import { hasLost, countMinesLeft } from '../functions/progress'

const initialState = {
  minesLeft: 12,
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
        hasWon: false
      };

    // If missed, change nothing
    default:
      return state;
  }
}
