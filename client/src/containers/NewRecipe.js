import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { createRecipe, fetchRecipes } from '../actions/recipes';
import { regexValidator } from '../comon/formValidation';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormDisplayed: false,
      errorMessage: '',
      currentRecipe: {
        title: '',
        recipe: ''
      }
    };
  }

  handleInputUpdate = (name, value) => {
    const currentRecipe = { ...this.state.currentRecipe, [name]: value };
    this.setState({ currentRecipe });

    const isValid = regexValidator(value);
    if (!isValid) {
      this.setState({
        errorMessage: `Please add only valid characters for ${name} field`
      });
    } else {
      this.setState({ errorMessage: '' });
    }
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
        <h1 className="recipe__add-new-title">
          Enrich your cookbook with new recipe
        </h1>
        <form className="recipe__form">
          <label className="recipe__label">Title</label>
          <input
            className="recipe__input"
            value={this.state.title}
            onChange={e => this.handleInputUpdate('title', e.target.value)}
          />
          <label className="recipe__label">Recipe</label>
          <textarea
            className="recipe__textarea"
            value={this.state.recipe}
            onChange={e => this.handleInputUpdate('recipe', e.target.value)}
          />
        </form>
        <p className="recipe__error-message">{this.state.errorMessage}</p>
        <button
          className="recipe__button"
          onClick={this.state.errorMessage === '' ? this.handleCreate : null}>
          Submit
        </button>
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
