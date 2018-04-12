import { FETCH_RECIPES_SUCCESS } from '../actions/recipes';

export default (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_RECIPES_SUCCESS: {
      return payload;
    }

    default: {
      return state;
    }
  }
};
