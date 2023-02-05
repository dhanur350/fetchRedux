import { ADD_TO_CART, REDUCE_IN_CART } from "./Constant";

export const cartData = (data, action) => {
  if (action.type === ADD_TO_CART) {
    console.log(`Reducer called ADD_TO_CART`);
    return data;
  } else if (action.type === REDUCE_IN_CART) {
    console.log(`Reducer called REDUCE_TO_CART`);
    return data;
  } else {
    console.log(`No Reducer called`);
    return 0;
  }
};
// if (action.type === ADD_TO_CART) {
// console.log(`Reducer called ${ADD_TO_CART} condition`, action);
// return 0;
// } else {
//   return `No Action Called`;
// }
