import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipes';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe';

class App extends React.Component {
  componentWillMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div className="cookbook">
        <header className="cookbook__header">
          <h1 className="cookbook__headline">Cookbook</h1>
        </header>
        <p className="cookbook__server-error">{this.props.serverError}</p>
        <div className="cookbook__recipes animated bounce">
          {this.props.recipes.map(recipeData => (
            <Recipe {...recipeData} key={recipeData._id} />
          ))}
          <NewRecipe />
        </div>
        <footer className="cookbook__footer" />
      </div>
    );
  }
}

App.propTypes = {
  recipes: propTypes.array.isRequired,
  serverError: propTypes.string.isRequired,
  fetchRecipes: propTypes.func.isRequired
};

export default connect(
  ({ recipes, serverError }) => ({ recipes, serverError }),
  { fetchRecipes }
)(App);
