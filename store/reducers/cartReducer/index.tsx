import { CartAction, Obj } from "../../../type";

const CartReducer = (state: Array<Obj> = [], action: CartAction) => {
  switch (action.type) {
    case "cart-item":
      return action.payload;
    default:
      return state;
  }
};

export default CartReducer;
