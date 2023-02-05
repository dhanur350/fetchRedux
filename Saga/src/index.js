import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import App from "./App";
import Store from "./components/Redux/Store";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
