import axios from 'axios';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';

axios.create({
  headers: {"Content-Type": "application/json"},
  proxy: {
    host: '127.0.0.1',
    port: 5000
  }
});

export const fetchRecipes = () => {
  return dispatch => {
    axios
      .get('/recipes')
      .then(res => {
        dispatch({
          type: FETCH_POSTS_SUCCESS,
          payload: res.data
        });
        })
      .catch(() => {
        dispatch({
          type: FETCH_POSTS_FAILURE
        });
      });
    };
};

export const createRecipe = (data) => {
  return dispatch => {
    axios
      .post("/recipe", data)
      .then(res => {
        dispatch({
          type: CREATE_POST_SUCCESS,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: CREATE_POST_FAILURE
        });
      });
  };
};

export const editRecipe = data => {
  return dispatch => {
    axios
      .patch(`/recipe/${data.id}`)
      .then(res => {
        dispatch({
          type: EDIT_POST_SUCCESS,
          payload: res.data
        });
      }).catch(() => {
        dispatch({
          type: EDIT_POST_FAILURE
        });
      });
    };
};