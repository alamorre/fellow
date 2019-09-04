import { combineReducers } from 'redux';
import GameReducer from './reducer-games'
import LoadingReducer from './reducer-loaders'
import ProgressReducer from './reducer-progress'

// Combine all reducers into one global app state
const rootReducer = combineReducers({
  game: GameReducer,
  loaders: LoadingReducer,
  progress: ProgressReducer
});

export default rootReducer;
