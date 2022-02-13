import React from "react";
import Image from "next/image";
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

// 渲染資料
const ItemData = [
  "/images/shopCart/1.png",
  "/images/shopCart/2.png",
  "/images/shopCart/3.png",
];

interface Props {
  cartIsOpen: boolean;
  setCartIsOpen: Function;
}

function ShopCart(props: Props) {
  return (
    // 狀態判斷開啟或關閉
    <ShopCartWrap cartIsOpen={props.cartIsOpen}>
      <Top>
        {/* 總數量 */}
        <div className="total">
          <RiShoppingBagLine />
          <span>1 Item</span>
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
        {ItemData.map((v, i) => {
          return (
            <Item key={i}>
              <Number>
                {/* + */}
                <button>
                  <BsPlusLg />
                </button>
                {/* 數字 */}
                <span>1</span>
                {/* - */}
                <button>
                  <AiOutlineMinus />
                </button>
              </Number>
              <Content>
                <Pic>
                  <Image src={v} alt="" height="64" width="64" />
                </Pic>
                {/* 文字內容區域 */}
                <div className="text">
                  <h3 className="title">
                    Mughal Masala Order Food Online With 50% Off
                  </h3>
                  <p>$530 x 1</p>
                  <p>500</p>
                </div>
              </Content>
              <ImCross />
            </Item>
          );
        })}
      </ItemGroup>
      <Accounts>
        {/* 總價 */}
        <AccountsButton>Checkout Now ($ 220)</AccountsButton>
        <ViewButton>VIEW CART</ViewButton>
      </Accounts>
    </ShopCartWrap>
  );
}

export default ShopCart;
