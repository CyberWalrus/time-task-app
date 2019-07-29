import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/lib/integration/react";
import App from "./components/app/app";
import { persistor, store } from "./store-configure";

const init = (): void => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={undefined} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    document.querySelector("#app")
  );
};

init();
