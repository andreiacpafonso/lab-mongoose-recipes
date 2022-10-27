const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
const Recipe = require('./models/Recipe.model.js');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
   
    return Recipe.deleteMany()
  })
   // interation 2 - create a recipe
  .then(() => {
    const italianRecipe = {
      title: "Pasta al Pomodoro",
      level: "Amateur Chef",
      ingredients: ["spaghetti", "tomato", "parmesan"],
      duration: 35,
      creator: "Andreia Afonso",
      cuisine: "italian"
    }
    return Model.create(italianRecipe)
  })
  // interation 3 - insert multiple recipes
  .then( () => {
    const recipeArr = Recipe.insertMany(data)
    return recipeArr
  })
  // interation 4 - update recipe
  .then(() => {
    Recipe.findOneAndUpdate({ title: 'Rigatoni alla Genovese'}, {duration: 100}, {new: true})
    console.log("You have updated your recipe!");
  })
   //interation 5 - remove a recipe
   .then(() => {
    Recipe.deleteOne({title: "Carrot Cake"})
    .then(() => console.log("Recipe Removed"))
    .catch(() => console.log("Error to remove the recipe"))
 
  // interation 6 - close the database
  .then(() => {
    console.log("The recipe of Carrot Cake was removed")
    mongoose.connection.close();
  })

  .catch(error => {
    console.error('Error connecting to the database', error);
  });
