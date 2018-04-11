import {
  FETCH_POSTS_FAILURE,
  CREATE_POST_FAILURE,
  EDIT_POST_FAILURE
} from '../actions/recipes';

export default (state = {}, action) => {
  const { type } = action;

  switch (type) {
    case FETCH_POSTS_FAILURE: {
      return 'Fetch failed, some problem with server occured.';
    }

    case CREATE_POST_FAILURE: {
      return 'Creating recipe failed, some problem with server occured.';
    }

    case EDIT_POST_FAILURE: {
      return 'Editing post failed, some problem with server occured.';
    }

    default: {
      return state;
    }
  }
};
