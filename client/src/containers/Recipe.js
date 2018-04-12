import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { editRecipe, fetchRecipes } from '../actions/recipes';
import { regexValidator } from '../comon/formValidation';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      switchToEditRecipeMode: false,
      errorMessage: '',
      currentRecipe: {
        title: this.props.title,
        recipe: this.props.recipe
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.editedRecipe) {
      this.props.fetchRecipes();
      this.setState({ switchToEditRecipeMode: false });
    }
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

  handleEdit = () => {
    this.props.editRecipe(this.props._id, this.state.currentRecipe);
  };

  handleAddLike = async () => {
    await this.props.editRecipe(this.props._id, {
      likes: Number(this.props.likes) + 1
    });
    await this.props.fetchRecipes();
  };

  handleAddDislike = async () => {
    await this.props.editRecipe(this.props._id, {
      dislikes: Number(this.props.dislikes) + 1
    });
    await this.props.fetchRecipes();
  };

  editPostMode = () => {
    this.setState({ switchToEditRecipeMode: true });
  };

  render() {
    const { title, recipe, likes, dislikes } = this.props;

    const presenterRecipeMode = (
      <div className="recipe__content-wrapper">
        <h2 className="recipe__title">{title}</h2>
        <p className="recipe__edit-button" onClick={this.editPostMode}>
          Edit post
        </p>
        <p className="recipe__tutorial">{recipe}</p>
      </div>
    );

    const editRecipeMode = (
      <form className="recipe__form">
        <input
          className="recipe__edit-input"
          value={this.state.currentRecipe.title}
          placeholder="Title"
          onChange={e => this.handleInputUpdate('title', e.target.value)}
        />
        <p
          className="recipe__edit-button"
          onClick={this.state.errorMessage === '' ? this.handleEdit : null}>
          Update
        </p>
        <textarea
          className="recipe__edit-textarea"
          value={this.state.currentRecipe.recipe}
          placeholder=""
          onChange={e => this.handleInputUpdate('recipe', e.target.value)}
        />
        <p className="recipe__error-message">{this.state.errorMessage}</p>
      </form>
    );

    return (
      <div className="recipe__wrapper">
        <div className="recipe__image" />
        {this.state.switchToEditRecipeMode
          ? editRecipeMode
          : presenterRecipeMode}
        <div className="recipe__thumbs-wrapper">
          <div className="recipe__thumb-icons-wrapper">
            <div className="recipe__thumb-up" onClick={this.handleAddLike} />
            <p className="recipe__thumbs-number">{likes}</p>
            <div
              className="recipe__thumb-down"
              onClick={this.handleAddDislike}
            />
            <p className="recipe__thumbs-number">
              {dislikes === '0' ? dislikes : `-${dislikes}`}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

Recipe.propTypes = {
  _id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  recipe: propTypes.string.isRequired,
  likes: propTypes.string.isRequired,
  dislikes: propTypes.string.isRequired,
  editRecipe: propTypes.func.isRequired,
  fetchRecipes: propTypes.func.isRequired,
  editedRecipe: propTypes.object
};

export default connect(({ editedRecipe }) => ({ editedRecipe }), {
  editRecipe,
  fetchRecipes
})(Recipe);
