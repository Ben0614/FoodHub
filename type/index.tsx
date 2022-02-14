// 購物車Item
export interface Obj {
  id: number;
  title: string;
  pic: string;
  price: number;
  special_price: number | null;
  amount: number;
}

export interface State {
  cart: Array<Obj>;
}

// cartReducer
export interface CartAction {
  type: string;
  payload: Array<Obj>;
}
