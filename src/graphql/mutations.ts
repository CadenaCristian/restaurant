/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSpecies = /* GraphQL */ `
  mutation CreateSpecies(
    $input: CreateSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    createSpecies(input: $input, condition: $condition) {
      id
      name
      recipies {
        items {
          id
          speciesID
          recipeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSpecies = /* GraphQL */ `
  mutation UpdateSpecies(
    $input: UpdateSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    updateSpecies(input: $input, condition: $condition) {
      id
      name
      recipies {
        items {
          id
          speciesID
          recipeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSpecies = /* GraphQL */ `
  mutation DeleteSpecies(
    $input: DeleteSpeciesInput!
    $condition: ModelSpeciesConditionInput
  ) {
    deleteSpecies(input: $input, condition: $condition) {
      id
      name
      recipies {
        items {
          id
          speciesID
          recipeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRecipe = /* GraphQL */ `
  mutation CreateRecipe(
    $input: CreateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    createRecipe(input: $input, condition: $condition) {
      id
      name
      species {
        items {
          id
          speciesID
          recipeID
          createdAt
          updatedAt
        }
        nextToken
      }
      restaurant {
        items {
          id
          recipeID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRecipe = /* GraphQL */ `
  mutation UpdateRecipe(
    $input: UpdateRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    updateRecipe(input: $input, condition: $condition) {
      id
      name
      species {
        items {
          id
          speciesID
          recipeID
          createdAt
          updatedAt
        }
        nextToken
      }
      restaurant {
        items {
          id
          recipeID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecipe = /* GraphQL */ `
  mutation DeleteRecipe(
    $input: DeleteRecipeInput!
    $condition: ModelRecipeConditionInput
  ) {
    deleteRecipe(input: $input, condition: $condition) {
      id
      name
      species {
        items {
          id
          speciesID
          recipeID
          createdAt
          updatedAt
        }
        nextToken
      }
      restaurant {
        items {
          id
          recipeID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
      id
      name
      recipie {
        items {
          id
          recipeID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
      id
      name
      recipie {
        items {
          id
          recipeID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
      id
      name
      recipie {
        items {
          id
          recipeID
          restaurantID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSpeciesRecipe = /* GraphQL */ `
  mutation CreateSpeciesRecipe(
    $input: CreateSpeciesRecipeInput!
    $condition: ModelSpeciesRecipeConditionInput
  ) {
    createSpeciesRecipe(input: $input, condition: $condition) {
      id
      speciesID
      recipeID
      species {
        id
        name
        recipies {
          nextToken
        }
        createdAt
        updatedAt
      }
      recipe {
        id
        name
        species {
          nextToken
        }
        restaurant {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSpeciesRecipe = /* GraphQL */ `
  mutation UpdateSpeciesRecipe(
    $input: UpdateSpeciesRecipeInput!
    $condition: ModelSpeciesRecipeConditionInput
  ) {
    updateSpeciesRecipe(input: $input, condition: $condition) {
      id
      speciesID
      recipeID
      species {
        id
        name
        recipies {
          nextToken
        }
        createdAt
        updatedAt
      }
      recipe {
        id
        name
        species {
          nextToken
        }
        restaurant {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSpeciesRecipe = /* GraphQL */ `
  mutation DeleteSpeciesRecipe(
    $input: DeleteSpeciesRecipeInput!
    $condition: ModelSpeciesRecipeConditionInput
  ) {
    deleteSpeciesRecipe(input: $input, condition: $condition) {
      id
      speciesID
      recipeID
      species {
        id
        name
        recipies {
          nextToken
        }
        createdAt
        updatedAt
      }
      recipe {
        id
        name
        species {
          nextToken
        }
        restaurant {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRecipeRestaurant = /* GraphQL */ `
  mutation CreateRecipeRestaurant(
    $input: CreateRecipeRestaurantInput!
    $condition: ModelRecipeRestaurantConditionInput
  ) {
    createRecipeRestaurant(input: $input, condition: $condition) {
      id
      recipeID
      restaurantID
      recipe {
        id
        name
        species {
          nextToken
        }
        restaurant {
          nextToken
        }
        createdAt
        updatedAt
      }
      restaurant {
        id
        name
        recipie {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRecipeRestaurant = /* GraphQL */ `
  mutation UpdateRecipeRestaurant(
    $input: UpdateRecipeRestaurantInput!
    $condition: ModelRecipeRestaurantConditionInput
  ) {
    updateRecipeRestaurant(input: $input, condition: $condition) {
      id
      recipeID
      restaurantID
      recipe {
        id
        name
        species {
          nextToken
        }
        restaurant {
          nextToken
        }
        createdAt
        updatedAt
      }
      restaurant {
        id
        name
        recipie {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecipeRestaurant = /* GraphQL */ `
  mutation DeleteRecipeRestaurant(
    $input: DeleteRecipeRestaurantInput!
    $condition: ModelRecipeRestaurantConditionInput
  ) {
    deleteRecipeRestaurant(input: $input, condition: $condition) {
      id
      recipeID
      restaurantID
      recipe {
        id
        name
        species {
          nextToken
        }
        restaurant {
          nextToken
        }
        createdAt
        updatedAt
      }
      restaurant {
        id
        name
        recipie {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
