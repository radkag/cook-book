import axios from 'axios';

export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS';
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE';
export const CREATE_RECIPE_FAILURE = 'CREATE_RECIPE_FAILURE';
export const EDIT_RECIPE_FAILURE = 'EDIT_RECIPE_FAILURE';
export const EDIT_RECIPE_SUCCESS = 'EDIT_RECIPE_SUCCESS';
export const CREATE_RECIPE_SUCCESS = 'CREATE_RECIPE_SUCCESS';

axios.create({
  headers: { 'Content-Type': 'application/json' },
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
          type: FETCH_RECIPES_SUCCESS,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: FETCH_RECIPES_FAILURE
        });
      });
  };
};

export const createRecipe = data => {
  return dispatch => {
    axios
      .post('/recipe', data)
      .then(res => {
        dispatch({
          type: CREATE_RECIPE_SUCCESS,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: CREATE_RECIPE_FAILURE
        });
      });
  };
};

export const editRecipe = (id, data) => {
  return dispatch => {
    axios
      .patch(`/recipe/${id}`, data)
      .then(res => {
        dispatch({
          type: EDIT_RECIPE_SUCCESS,
          payload: res.data
        });
      })
      .catch(() => {
        dispatch({
          type: EDIT_RECIPE_FAILURE
        });
      });
  };
};
