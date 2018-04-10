import React from 'react';
import propTypes from 'prop-types';
import {connect} from "react-redux";
import {editRecipe} from "../actions/recipes";

class Recipe extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currentRecipe: {
        title: this.props.title,
        subtitle: this.props.recipe
      }
    }
  }

  handleEdit = () => {
    this.props.editRecipe(this.state.currentRecipe);
  }

  render() {
    const { _id, title, recipe } = this.props;

    return (
      <div className="recipe__wrapper">
        <div className="recipe__image"/>
        <h2 className="recipe__title">{title}</h2>
        <p className="recipe__tutorial">{recipe}</p>
      </div>
    );
  }
}

Recipe.propTypes = {
  _id: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  recipe: propTypes.string.isRequired,
  hearts: propTypes.string.isRequired,
  editRecipe: propTypes.func.isRequired
};

export default connect(
  ({recipes}) => ({recipes}),
  {editRecipe}
)(Recipe);

