import {
  FETCH_RECIPES_FAILURE,
  CREATE_RECIPE_FAILURE,
  EDIT_RECIPE_FAILURE
} from '../actions/recipes';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case FETCH_RECIPES_FAILURE: {
      return 'Fetch failed, some problem with server occured.';
    }

    case CREATE_RECIPE_FAILURE: {
      return 'Creating recipe failed, some problem with server occured.';
    }

    case EDIT_RECIPE_FAILURE: {
      return 'Editing post failed, some problem with server occured.';
    }

    default: {
      return state;
    }
  }
};
