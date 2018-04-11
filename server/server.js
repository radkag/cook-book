const _ = require("lodash");
const express = require('express');
const bodyParser = require("body-parser");
const {ObjectID} = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

const {mongoose} = require("./db/mongoose");
const {Recipe} = require("./models/recipe");

app.use(bodyParser.json());

app.get("/recipes", (req, res) => {
    Recipe.find()
      .then(recipes => {
        res.send(recipes)
      })
      .catch(e => {
        console.log(e);
        res.status(400).send(e);
      });
});

app.post("/recipe", (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        recipe: req.body.recipe,
        likes: req.body.likes,
        dislikes: req.body.dislikes
    });

    recipe.save()
      .then(recipe => {
        res.send(recipe);
      })
      .catch(e => {
        console.log(e);
        res.status(400).send(e);
      });
});

app.patch("/recipe/:id", (req, res) => {
    const id = req.params.id;
    const updatedRecipe = _.pick(req.body, ["title", "recipe", "likes", "dislikes"]);

    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    Recipe.findByIdAndUpdate(id, { $set: updatedRecipe}, { new: true })
      .then(recipe => {
        res.send(recipe);
      })
      .catch(e => {
        console.log(e);
        res.status(400).send(e);
      })
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {app};
