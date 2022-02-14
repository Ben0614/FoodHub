import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import Storage from "redux-persist/lib/storage";
import CartReducer from "./reducers/cartReducer";

type RootStore = ReturnType<typeof rootReducers>;

const storeConfig = {
  key: "root",
  storage: Storage,
};

const rootReducers = combineReducers({
  cart: CartReducer,
});

const myPersistReducers = persistReducer<RootStore, any>(
  storeConfig,
  rootReducers
);

const store = createStore(myPersistReducers);

export const persistor = persistStore(store);
export default store;

