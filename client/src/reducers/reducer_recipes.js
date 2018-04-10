import {
    FETCH_POSTS_SUCCESS,
    EDIT_POST_SUCCESS,
    CREATE_POST_SUCCESS
} from '../actions/recipes';

export default (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case FETCH_POSTS_SUCCESS: {
            return payload;
        }

        case EDIT_POST_SUCCESS: {
            return payload;
        }

        case CREATE_POST_SUCCESS: {
            return payload;
        }

        default: {
            return state;
        }
  }
};
//
// import {
//     FETCH_POSTS_SUCCESS,
//     FETCH_POSTS_FAILURE,
//     CREATE_POST_FAILURE,
//     EDIT_POST_FAILURE,
//     EDIT_POST_SUCCESS,
//     CREATE_POST_SUCCESS
// } from '../actions/recipes';