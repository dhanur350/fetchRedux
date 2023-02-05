import React from 'react'
import { addToCart,emptyCart,removeToCart } from '../Redux/Action'; 
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import { productList } from '../Redux/ProductAction'; 
import jsonData from "../Data/Dummy.json"

function Show() {
    const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);

    return (
        <div>
          <button onClick={() => dispatch(addToCart(jsonData))}>Add To Cart</button>
          <div>
          <button onClick={() => dispatch(removeToCart(jsonData.name))}>Remove from Cart</button>
          </div>
          <div>
          <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
          </div>
          <div>
          <button onClick={() => dispatch(productList())}>Call Product List</button>
          </div>
        </div>
      );
}

export default Show