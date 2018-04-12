import { combineReducers } from 'redux';
import recipesFetch from './reducer_recipes-fetch';
import editedRecipe from './reducer_recipe-edit';
import createdRecipe from './reducer_recipe-post';
import serverError from './reducer_failures';

export default combineReducers({
  recipes: recipesFetch,
  editedRecipe,
  createdRecipe,
  serverError
});
