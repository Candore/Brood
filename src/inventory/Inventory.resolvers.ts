import { deals } from "../deals/deals";
import { items } from "../inventory/inventory";

/**
 * grqaphQL server uses resolver maps 
 * as away to map objects types.
 * 
 * In this app, the types checkout-Mutation and inventory-Query are supported by the API.
 * 
 * In normal REST implimention, usually a callback or a promise is returned to the caller
 * method which then resolves the promise or the call back to return th response value.
 * 
 * In the case of graphQL, the "callback" is resolved within this Object Type.
 * 
 * Therefore for the Schema type checkout Mutation, it is resolved to return the value of the
 * mapped method 'deals'.
 * Similarly in the case of Schema type 'inventory', it is mapped to return all items data.
 */
export default {
  Mutation: {
    checkout: (_: any, params: any) => {
      return deals(params);
    }
  },
  Query: {
    inventory: () => items
  }
};
