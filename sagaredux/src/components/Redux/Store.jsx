import ProductSaga from "./ProductSaga"
import createSagaMiddleware from "redux-saga"
import {configureStore} from "@reduxjs/toolkit"
import RootReducer from "./RootReducer";


  //Creates a Redux middleware and connects the Sagas to the Redux Store
  const sagaMiddleware = createSagaMiddleware();
  const Store = configureStore(
    {
      reducer:RootReducer,
      middleware:()=>[sagaMiddleware]
    }
    /**@desc middleware always registers in via callback and array format like this above  */
  )
  sagaMiddleware.run(ProductSaga)

  /**@desc run() Dynamically run saga. Can be used to run Sagas only after the applyMiddleware phase. */
export default Store

/**@desc saga must be a function which returns a Generator Object. The middleware will then iterate over the Generator and execute all yielded Effects. */