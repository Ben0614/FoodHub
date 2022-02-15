import React, { useCallback } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { State, Obj } from "../../type";
// import { shopCartItemData } from "../../data";
import { ImCross } from "react-icons/im";
import { RiShoppingBagLine } from "react-icons/ri";
import { BsPlusLg } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import {
  ShopCartWrap,
  Top,
  ItemGroup,
  Item,
  Pic,
  Number,
  Content,
  Accounts,
  AccountsButton,
  ViewButton,
} from "./ShopCartStyle";

interface Props {
  cartIsOpen: boolean;
  setCartIsOpen: Function;
}

function ShopCart(props: Props) {
  const dispatch = useDispatch();

  // 傳送購物車商品List
  const setCartItem = useCallback(
    // newCartData 裝的是完整的商品List
    (newCartData: Array<Obj>) => {
      dispatch({
        type: "cart-item",
        payload: newCartData,
      });
    },
    [dispatch]
  );
  // 獲取購物車商品List
  const getCartItemData = useSelector((state: State) => {
    return state.cart;
  });


  // 商品價格陣列
  let foodPrice;
  // 判斷購物車是否有商品
  // 沒有商品就給[0,0] 否則reduce會報錯
  if (getCartItemData.length > 0) {
    foodPrice = getCartItemData.map((v) => {
      return v.special_price ? v.special_price * v.amount : v.price * v.amount;
    });
  } else {
    foodPrice = [0, 0];
  }
  // 計算總價
  const total = foodPrice.reduce((pre, cur) => {
    return pre + cur;
  });

  return (
    // 狀態判斷開啟或關閉
    <ShopCartWrap cartIsOpen={props.cartIsOpen}>
      <Top>
        {/* 總數量 */}
        <div className="total">
          <RiShoppingBagLine />
          {/* 商品總數 */}
          <span>{getCartItemData.length} Item</span>
        </div>
        {/* 關閉 */}
        <ImCross
          onClick={() => {
            props.setCartIsOpen(false);
          }}
        />
      </Top>
      {/* item區域 */}
      <ItemGroup>
        {getCartItemData.map((v, i) => {
          return (
            <Item key={i}>
              <Number>
                {/* + */}
                <button
                  onClick={() => {
                    // 複製購物車商品List
                    const newCartData = [...getCartItemData];
                    // 找出此商品 數量+1
                    newCartData[i].amount = newCartData[i].amount + 1;
                    // 傳送
                    setCartItem(newCartData);
                  }}
                >
                  <BsPlusLg />
                </button>
                {/* 數字 */}
                <span>{v.amount}</span>
                {/* - */}
                <button
                  onClick={() => {
                    // 複製購物車商品List
                    const newCartData = [...getCartItemData];
                    // 找出此商品 數量 -1 最低數量不能小於1
                    newCartData[i].amount =
                      newCartData[i].amount - 1 <= 1
                        ? 1
                        : newCartData[i].amount - 1;
                    // 傳送
                    setCartItem(newCartData);
                  }}
                >
                  <AiOutlineMinus />
                </button>
              </Number>
              <Content>
                <Pic>
                  <Image src={v.pic} alt="" height="64" width="64" />
                </Pic>
                {/* 文字內容區域 */}
                <div className="text">
                  <h3 className="title">{v.title}</h3>
                  <p>
                    ${v.price} x {v.amount}
                  </p>
                  <p>
                    {/* 該商品總價 */}
                    {v.special_price
                      ? v.special_price * v.amount
                      : v.special_price}
                  </p>
                </div>
              </Content>
              <ImCross
                onClick={() => {
                  // 刪除商品 從商品List篩選出id不符合的商品
                  const newCartData = getCartItemData.filter((val) => {
                    return val.id !== v.id;
                  });
                  // 傳送
                  setCartItem(newCartData);
                }}
              />
            </Item>
          );
        })}
      </ItemGroup>
      <Accounts>
        {/* 總價 */}
        <AccountsButton>Checkout Now ${total}</AccountsButton>
        <ViewButton>VIEW CART</ViewButton>
      </Accounts>
    </ShopCartWrap>
  );
}

export default ShopCart;
