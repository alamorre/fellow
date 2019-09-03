import { combineReducers } from 'redux';
import GameReducer from './reducer-games'
import ProgressReducer from './reducer-progress'

const rootReducer = combineReducers({
  game: GameReducer,
  progress: ProgressReducer
});

export default rootReducer;
