import { combineReducers } from 'redux';
import movies from './movies'
import activeMovie from './active_movie'

const rootReducer = combineReducers({
  movies,
  activeMovie
});

export default rootReducer;
