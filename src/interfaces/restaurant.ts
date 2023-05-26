import { RecipeRestaurant, Species, SpeciesRecipe } from "src/models"

export interface recipeFood {
  id: string,
  name: string,
  species: Array<string>
}

export interface commonQueryStructure {
  data: {
    [key: string]: {
      items: Array<RecipeRestaurant | Species | SpeciesRecipe>,
      nextToken: string
    }
  }
}