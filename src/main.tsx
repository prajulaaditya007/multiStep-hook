import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./components/App3/redux/store";
import App3 from "./components/App3/App3";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <App3 />
  </Provider>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App3 />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
