import { createStore } from "redux";

//Here we can call reducer here in function
const dummyStore = () => {};
const Store = createStore(dummyStore);
export default Store;
