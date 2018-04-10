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
    Recipe.find((err, recipes) => {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }

        res.send(recipes)
    });
});

app.post("/recipe", (req, res) => {
    const recipe = new Recipe({
        title: req.body.title,
        recipe: req.body.recipe,
        hearts: req.body.hearts
    });

    recipe.save((err, recipe) => {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }

        res.send(recipe);
    });
});

app.patch("/recipes/:id", (req, res) => {
    const id = req.params.id;
    const updatedRecipe = _.pick(req.body, ["title", "recipe", "hearts"]);

    if (!ObjectID.isValid(id)) {
        res.status(404).send();
    }

    Recipe.findByIdAndUpdate(id, { $set: updatedRecipe}, { new: true }, (err, recipe) => {
        if (err) {
            res.status(400).send(err);
        }
        res.send(recipe);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = {app};
