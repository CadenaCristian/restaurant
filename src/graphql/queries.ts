/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpecies = /* GraphQL */ `
  query GetSpecies($id: ID!) {
    getSpecies(id: $id) {
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
export const listSpecies = /* GraphQL */ `
  query ListSpecies(
    $filter: ModelSpeciesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpecies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        recipies {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipe = /* GraphQL */ `
  query GetRecipe($id: ID!) {
    getRecipe(id: $id) {
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
export const listRecipes = /* GraphQL */ `
  query ListRecipes(
    $filter: ModelRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
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
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        recipie {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSpeciesRecipe = /* GraphQL */ `
  query GetSpeciesRecipe($id: ID!) {
    getSpeciesRecipe(id: $id) {
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
export const listSpeciesRecipes = /* GraphQL */ `
  query ListSpeciesRecipes(
    $filter: ModelSpeciesRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpeciesRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        speciesID
        recipeID
        species {
          id
          name
          createdAt
          updatedAt
        }
        recipe {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRecipeRestaurant = /* GraphQL */ `
  query GetRecipeRestaurant($id: ID!) {
    getRecipeRestaurant(id: $id) {
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
export const listRecipeRestaurants = /* GraphQL */ `
  query ListRecipeRestaurants(
    $filter: ModelRecipeRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecipeRestaurants(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        recipeID
        restaurantID
        recipe {
          id
          name
          createdAt
          updatedAt
        }
        restaurant {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
