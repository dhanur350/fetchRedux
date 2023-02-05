import { combineReducers } from "redux";
import { cartData } from "./Reducer";

export default combineReducers({ cartData });

/*
An object whose values correspond to different reducer functions that need to be combined into one. One handy way to obtain it is to use ES6 import * as reducers syntax. The reducers may never return undefined for any action. Instead, they should return their initial state if the state passed to them was undefined, and the current state for any unrecognized action.
 */
