import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {store, persistor} from './redux/store'
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Spinner from "./components/shared/Spinner";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<Spinner />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
