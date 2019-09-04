import { combineReducers } from 'redux';
import GameReducer from './reducer-games'
import LoadingReducer from './reducer-loaders'

// Combine all reducers into one global app state
const rootReducer = combineReducers({
  game: GameReducer,
  loaders: LoadingReducer
});

export default rootReducer;
