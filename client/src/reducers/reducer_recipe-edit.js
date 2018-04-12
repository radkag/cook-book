import { EDIT_RECIPE_SUCCESS } from '../actions/recipes';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case EDIT_RECIPE_SUCCESS: {
      return payload;
    }

    default: {
      return state;
    }
  }
};
