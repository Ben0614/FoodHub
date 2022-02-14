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

export interface State {
  cart: Array<Obj>;
  recommend: Array<Obj>;
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
