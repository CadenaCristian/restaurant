import { Injectable } from '@nestjs/common';
import { getAllItemsParams } from './common/queries';
import { RecipeRestaurant, SpeciesRecipe } from './models';
import { recipeFood } from './interfaces/restaurant';

@Injectable()
export class AppService {
  async getHello(params) {
    if (Object.values(params).some((value) => Array.isArray(value))) return { message: "Los parametros no deben de estar repetidos" };
    
    const spicesItems = await getAllItemsParams("listSpecies", Object.values(params), "name", "id name");    
    const idArray = spicesItems.map(obj => obj.id);    
    const recipiesItems = await getAllItemsParams("listSpeciesRecipes", Object.values(idArray), "speciesID", "id recipe { id name } species { name }") as Array<SpeciesRecipe>;
    
    const result: Array<recipeFood> = Object.values(recipiesItems.reduce((acc, obj) => {
      if (acc[obj.recipe.name]) {
        acc[obj.recipe.name].species.push(obj.species.name);
      } else {
        acc[obj.recipe.name] = {
          id: obj.recipe.id,
          name: obj.recipe.name,
          species: [obj.species.name]
        };
      }
      return acc;
    }, {}));
    
    const resultArrayIds = result.map(obj => obj.id);
    
    const restaurantItems = await getAllItemsParams("listRecipeRestaurants", Object.values(resultArrayIds), "recipeID", "restaurant { name } recipe { name }") as Array<RecipeRestaurant>;

    return { 
      message: `Segun los parametros ingresados: ${Object.values(params).join(', ')} estas son nuestras recomendaciones`,
      foodRecipes: result,
      restaurants: restaurantItems
    };
  }
}
