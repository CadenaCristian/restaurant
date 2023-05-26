// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Species, Recipe, Restaurant, SpeciesRecipe, RecipeRestaurant } = initSchema(schema);

export {
  Species,
  Recipe,
  Restaurant,
  SpeciesRecipe,
  RecipeRestaurant
};