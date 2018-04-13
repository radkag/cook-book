// tslint:disable:no-console
const {mongoose} = require("../db/mongoose");
const {Recipe} = require("../models/recipe");

(async function() {
  try {
    const recipes = [{
        title: "Hummus",
        recipe: "In a blender, chop the garlic. Pour garbanzo beans into blender, reserving about a tablespoon for garnish. Place lemon juice, tahini, chopped garlic and salt in blender. Blend until creamy and well mixed. Transfer the mixture to a medium serving bowl. Sprinkle with pepper and pour olive oil over the top. Garnish with reserved garbanzo beans."
      },
      {
        title: "Guacamole",
        recipe: "Peel and mash avocados in a medium serving bowl. Stir in onion, garlic, tomato, lime juice, salt and pepper. Season with remaining lime juice and salt and pepper to taste. Chill for half an hour to blend flavors."
      }];

    await Recipe.insertMany(recipes);

  } catch (e) {
    console.log(e);
    process.exit(1);
  } finally {
    console.log("success");
    process.exit(0);
  }
})();
