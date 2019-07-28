import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import NameSpace from "./store/name-spaces";
import reducer, { initialState } from "./store/store";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [NameSpace.TIME, NameSpace.CONDITION],
};

const reducers = persistReducer(persistConfig, reducer);
const middlewares = [thunk];

const store = createStore(
  reducers,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

export { store, persistor };
