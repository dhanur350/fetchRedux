import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { product } from "../Products/Products";
import {addtoCart} from "../Redux/Action"

function Show() {
  const dispatch = useDispatch();
  const addItem = () => dispatch(addtoCart(product))
  return (
    <Fragment>
      <button onClick={addItem}>Add to CartBox</button>
    </Fragment>
  );
}

export default Show;
/*
<p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, et
        perferendis laudantium alias nostrum temporibus quibusdam sint
        similique. In rerum voluptas doloribus corrupti minus consequuntur optio
        eum ipsam, neque perspiciatis!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, et
        perferendis laudantium alias nostrum temporibus quibusdam sint
        similique. In rerum voluptas doloribus corrupti minus consequuntur optio
        eum ipsam, neque perspiciatis!
      </p>
 */
