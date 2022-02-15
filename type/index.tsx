// 商品Item
export interface Obj {
  id: number;
  title: string;
  pic: string;
  price: number;
  special_price: number | null;
  amount: number;
  // 商品List需要 購物車不需要
  meal_content?: string;
}

// 餐廳Item
export interface RestaurantObj {
  title: string;
  pic: string;
  price: number;
  star: number;
  category: string;
}

// redux
export interface State {
  cart: Array<Obj>;
  recommend: Array<Obj>;
  searchRestaurantList: Array<RestaurantObj>;
  categories: Array<string>;
  rating: Array<string>;
  sortBy: string;
}

// cartReducer
export interface CartAction {
  type: string;
  payload: Array<Obj>;
}

// recommendReducer
export interface RecommendAction {
  type: string;
  payload: Array<Obj>;
}

// searchRestaurant
export interface SearchRestaurant {
  type: string;
  payload: Array<RestaurantObj>;
}
// searchRestaurant
export interface SortBy {
  type: string;
  payload: string;
}
