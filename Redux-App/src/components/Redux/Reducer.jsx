import { ADD_TO_CART, REMOVE_FROM_CART } from "./Case";
export const cartData = (data = [],action) => {
  console.log("reducer",action);
  switch (action.type) {
    case ADD_TO_CART:
      //add to cart logic
      console.warn("ADD_TO_CART CONDITION", action);
      return 1 + 1;
    case REMOVE_FROM_CART:
      //add to cart logic
      console.warn("REMOVE_FROM_CART CONDITION", action);
      return 1 - 1;
    default:
      //no case matched
      return "no action called";
  }
};
