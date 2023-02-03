import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import Store from "./components/Redux/Store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log(Store);

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
