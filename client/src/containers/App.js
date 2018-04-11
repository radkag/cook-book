import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchRecipes } from '../actions/recipes';
import Recipe from './Recipe';
import NewRecipe from './NewRecipe';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchRecipes();
  }

  render() {
    return (
      <div className="cookbook">
        <header className="cookbook__header">
          <h1 className="cookbook__headline">Cookbook</h1>
        </header>
        <div className="cookbook__recipes">
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
  fetchRecipes: propTypes.func.isRequired
};

export default connect(({ recipes }) => ({ recipes }), { fetchRecipes })(App);
