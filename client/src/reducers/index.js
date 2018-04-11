import { combineReducers } from 'redux';
import recipes from './reducer_recipes';
import serverError from './reducer_failures';

export default combineReducers({
  recipes,
  serverError
});
