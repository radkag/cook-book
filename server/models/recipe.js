const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    recipe: {
        type: String,
        required: true
    },
    likes: {
        type: String,
        default: 0
    },
    dislikes: {
      type: String,
      default: 0
    }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = {Recipe};
