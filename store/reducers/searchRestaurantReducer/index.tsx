import { SearchRestaurant, SortBy } from "../../../type";

// 餐廳List
const SearchRestaurantListReducer = (state = [], action: SearchRestaurant) => {
  switch (action.type) {
    case "display-restaurants-list":
      return action.payload;
    default:
      return state;
  }
};
// 餐廳類型
const CategoriesReducer = (state = [], action: SearchRestaurant) => {
  switch (action.type) {
    case "categories":
      return action.payload;
    default:
      return state;
  }
};
// 餐廳評分
const RatingReducer = (state = [], action: SearchRestaurant) => {
  switch (action.type) {
    case "rating":
      return action.payload;
    default:
      return state;
  }
};
// 餐廳排序方式
const SortByReducer = (state = "", action: SortBy) => {
  switch (action.type) {
    case "sort-by":
      return action.payload;
    default:
      return state;
  }
};

export {
  SearchRestaurantListReducer,
  CategoriesReducer,
  RatingReducer,
  SortByReducer,
};
