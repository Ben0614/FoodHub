import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import sessionStorage from "redux-persist/lib/storage/session";
import CartReducer from "./reducers/cartReducer";
import RecommendReducer from "./reducers/recommendReducer";
import {
  SearchRestaurantListReducer,
  CategoriesReducer,
  RatingReducer,
  SortByReducer,
} from "./reducers/searchRestaurantReducer";

type RootStore = ReturnType<typeof rootReducers>;

const storeConfig = {
  key: "root",
  storage: storage,
  blacklist: ["searchRestaurantList", "categories", "rating", "sortBy"],
};

const rootReducers = combineReducers({
  cart: CartReducer,
  recommend: RecommendReducer,
  searchRestaurantList: SearchRestaurantListReducer,
  categories: CategoriesReducer,
  rating: RatingReducer,
  sortBy: SortByReducer,
});

const myPersistReducers = persistReducer<RootStore, any>(
  storeConfig,
  rootReducers
);

const store = createStore(myPersistReducers);

export const persistor = persistStore(store);
export default store;
