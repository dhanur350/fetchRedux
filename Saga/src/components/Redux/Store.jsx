import { createStore } from "redux";
import CombineReducer from "./RootReducer";

//Here we can call reducer here in function
// const dummyStore = () => {

// };

const Store = createStore(CombineReducer);
export default Store;
