import { Amplify, API, graphqlOperation } from 'aws-amplify';
import { commonQueryStructure } from 'src/interfaces/restaurant';
import { RecipeRestaurant, Species, SpeciesRecipe } from 'src/models';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

export const getAllItemsParams = async (tableName: string, queryParams: Array<string>, filedToFIlter: string, paramsToRetur: string) => {
  let token = null;
  let filter = "";
  let allItems: Array<RecipeRestaurant | Species | SpeciesRecipe> = [];

  do {
    queryParams.map((pos) => { filter = filter+`{${filedToFIlter}: {contains: "${pos}"}},`})
    const query = `
      query {
        ${tableName}(filter: {or: [${filter}] }, nextToken: ${token ? '"' + token + '"' : null}) {
          items {
            ${paramsToRetur}
          }
          nextToken
        }
      }
    `

    const response = await API.graphql(graphqlOperation(query)) as commonQueryStructure;
      
    const items = response?.data?.[Object.keys(response?.data)[0]]?.items;
    allItems = [...allItems, ...items];
    token = response?.data?.listRecipes?.nextToken;
  } while (token);
  
  return allItems;
}