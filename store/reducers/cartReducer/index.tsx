import { CartAction } from "../../../type";

const CartReducer = (state = [], action: CartAction) => {
  console.log("action", action);

  switch (action.type) {
    case "cart-item":
      return action.payload;
    default:
      return state;
  }
};

export default CartReducer;
