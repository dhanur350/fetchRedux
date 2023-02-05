import { AddToCart } from "../Redux/Action";
import { useDispatch } from "react-redux";
import dummy from "../Data/Dummy.json";

function Show() {
  const dispatch = useDispatch();

  /*async function API() {
    const dataAPI = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await dataAPI.json();
    dispatch(AddToCart(data));
  }*/

  const data = () => dispatch(AddToCart(dummy));

  return (
    <div className="App">
      <h1>Redux</h1>
      <button onClick={data}>Add to Cart</button>
    </div>
  );
}
export default Show;
