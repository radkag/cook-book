import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRecipe, fetchRecipes } from '../actions/recipes';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormDisplayed: false,
      currentRecipe: {
        title: '',
        subtitle: ''
      }
    };
  }

  handleInputUpdate = (name, value) => {
    const currentRecipe = { ...this.state.currentRecipe, [name]: value };
    this.setState({ currentRecipe });
  };

  handleCreate = async () => {
    this.setState({ isFormDisplayed: false });
    await this.props.createRecipe(this.state.currentRecipe);
    await this.props.fetchRecipes();
  };

  toggleForm = () => {
    this.setState({ isFormDisplayed: !this.state.isFormDisplayed });
  };

  render() {
    const form = (
      <React.Fragment>
        <div className="recipe__image--new" />
        <label>Title</label>
        <input
          className="recipe__input"
          value={this.state.title}
          onChange={e => this.handleInputUpdate('title', e.target.value)}
        />
        <label>Recipe</label>
        <input
          className="recipe__input--large"
          value={this.state.subtitle}
          onChange={e => this.handleInputUpdate('recipe', e.target.value)}
        />
        <button onClick={this.handleCreate}>Submit</button>
      </React.Fragment>
    );

    const iconAdd = (
      <div className="recipe__icon-add" onClick={this.toggleForm} />
    );

    return (
      <div className="recipe__wrapper--new">
        {this.state.isFormDisplayed ? form : iconAdd}
      </div>
    );
  }
}

Recipe.propTypes = {
  createRecipe: propTypes.func.isRequired,
  fetchRecipes: propTypes.func.isRequired
};

export default connect(({ recipes }) => ({ recipes }), {
  createRecipe,
  fetchRecipes
})(Recipe);
