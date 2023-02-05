import React from 'react'
import { addToCart,emptyCart,removeToCart } from '../Redux/Action'; 
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import { productList } from '../Redux/ProductAction'; 
import

function Show() {
    const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.warn("data in main component", data);

    return (
        <div>
          <button onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
          <div>
          <button onClick={() => dispatch(removeToCart(product.name))}>Remove from Cart</button>
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