/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSpecies = /* GraphQL */ `
  subscription OnCreateSpecies {
    onCreateSpecies {
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
export const onUpdateSpecies = /* GraphQL */ `
  subscription OnUpdateSpecies {
    onUpdateSpecies {
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
export const onDeleteSpecies = /* GraphQL */ `
  subscription OnDeleteSpecies {
    onDeleteSpecies {
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
export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
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
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
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
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
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
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
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
export const onCreateSpeciesRecipe = /* GraphQL */ `
  subscription OnCreateSpeciesRecipe {
    onCreateSpeciesRecipe {
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
export const onUpdateSpeciesRecipe = /* GraphQL */ `
  subscription OnUpdateSpeciesRecipe {
    onUpdateSpeciesRecipe {
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
export const onDeleteSpeciesRecipe = /* GraphQL */ `
  subscription OnDeleteSpeciesRecipe {
    onDeleteSpeciesRecipe {
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
export const onCreateRecipeRestaurant = /* GraphQL */ `
  subscription OnCreateRecipeRestaurant {
    onCreateRecipeRestaurant {
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
export const onUpdateRecipeRestaurant = /* GraphQL */ `
  subscription OnUpdateRecipeRestaurant {
    onUpdateRecipeRestaurant {
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
export const onDeleteRecipeRestaurant = /* GraphQL */ `
  subscription OnDeleteRecipeRestaurant {
    onDeleteRecipeRestaurant {
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
