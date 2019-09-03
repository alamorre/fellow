import { combineReducers } from 'redux';
import GameReducer from './reducer-games'

const rootReducer = combineReducers({
  game: GameReducer
});

export default rootReducer;
