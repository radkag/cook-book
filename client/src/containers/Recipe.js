import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { editRecipe, fetchRecipes } from '../actions/recipes';

class Recipe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: {
        title: this.props.title,
        subtitle: this.props.recipe
      }
    };
  }

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

  render() {
    const { title, recipe, likes, dislikes } = this.props;

    return (
      <div className="recipe__wrapper">
        <div className="recipe__image" />
        <h2 className="recipe__title">{title}</h2>
        <p className="recipe__tutorial">{recipe}</p>
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
  fetchRecipes: propTypes.func.isRequired
};

export default connect(({ recipes }) => ({ recipes }), {
  editRecipe,
  fetchRecipes
})(Recipe);
