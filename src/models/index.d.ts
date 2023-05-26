import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type SpeciesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RecipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SpeciesRecipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RecipeRestaurantMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Species {
  readonly id: string;
  readonly name: string;
  readonly recipies?: (SpeciesRecipe | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Species, SpeciesMetaData>);
  static copyOf(source: Species, mutator: (draft: MutableModel<Species, SpeciesMetaData>) => MutableModel<Species, SpeciesMetaData> | void): Species;
}

export declare class Recipe {
  readonly id: string;
  readonly name: string;
  readonly species?: (SpeciesRecipe | null)[] | null;
  readonly restaurant?: (RecipeRestaurant | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Recipe, RecipeMetaData>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe, RecipeMetaData>) => MutableModel<Recipe, RecipeMetaData> | void): Recipe;
}

export declare class Restaurant {
  readonly id: string;
  readonly name: string;
  readonly recipie?: (RecipeRestaurant | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Restaurant, RestaurantMetaData>);
  static copyOf(source: Restaurant, mutator: (draft: MutableModel<Restaurant, RestaurantMetaData>) => MutableModel<Restaurant, RestaurantMetaData> | void): Restaurant;
}

export declare class SpeciesRecipe {
  readonly id: string;
  readonly species: Species;
  readonly recipe: Recipe;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SpeciesRecipe, SpeciesRecipeMetaData>);
  static copyOf(source: SpeciesRecipe, mutator: (draft: MutableModel<SpeciesRecipe, SpeciesRecipeMetaData>) => MutableModel<SpeciesRecipe, SpeciesRecipeMetaData> | void): SpeciesRecipe;
}

export declare class RecipeRestaurant {
  readonly id: string;
  readonly recipe: Recipe;
  readonly restaurant: Restaurant;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<RecipeRestaurant, RecipeRestaurantMetaData>);
  static copyOf(source: RecipeRestaurant, mutator: (draft: MutableModel<RecipeRestaurant, RecipeRestaurantMetaData>) => MutableModel<RecipeRestaurant, RecipeRestaurantMetaData> | void): RecipeRestaurant;
}