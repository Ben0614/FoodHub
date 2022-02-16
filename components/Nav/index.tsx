import React, { useState, useCallback, useRef } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import { State } from "../../type";
import MadolLogin from "../MadolLogin";
import Container from "../Container";
import ShopCart from "../ShopCart";
import Navbar from "../Navbar";
import { BsCart3 } from "react-icons/bs";
import { BiUserCircle, BiCurrentLocation, BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu, GiPositionMarker } from "react-icons/gi";
import {
  NavHeight,
  NavWrap,
  Main,
  Left,
  Search,
  Icons,
  User,
  Cart,
} from "./NavStyle";

interface Props {
  isShow: boolean;
  firstHeight: boolean;
}

function Nav(props: Props) {
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);
  // router
  const router = useRouter();

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  // 傳送搜索餐廳關鍵字
  const setSeachWord = useCallback(
    (searchWord) => {
      dispatch({
        type: "search-word",
        payload: searchWord,
      });
    },
    [dispatch]
  );

  // 獲取搜索餐廳關鍵字
  const getSearchWord = useSelector((state: State) => {
    return state.searchWord;
  });

  // 獲取購物車內的商品數量
  const cartItemTotal = useSelector((state: State) => {
    return state.cart.length;
  });

  return (
    // firstHeight 如果一開始不顯示 高度就給0 否則會空出一塊區域
    <NavHeight firstHeight={props.firstHeight}>
      <NavWrap isShow={props.isShow}>
        <Container>
          <Main>
            <Left>
              <Link href="/">
                <a>
                  <Image
                    src="/images/logo.png"
                    alt=""
                    height="45px"
                    width="45px"
                  />
                </a>
              </Link>
              <Search>
                <h4>
                  <GiPositionMarker />
                  <span>New York</span>
                </h4>
                <div>
                  <BiCurrentLocation />
                </div>
                <input
                  ref={searchInput}
                  type="text"
                  placeholder="Search for restaurant"
                  defaultValue={getSearchWord}
                  onKeyUp={(e) => {
                    // 如果按下enter就傳送searchWord
                    if (e.key === "Enter") {
                      setSeachWord((e.target as HTMLInputElement).value);
                      // 跳轉到餐廳頁面
                      router.push("/SearchRestaurant");
                    }
                  }}
                />
                <BiSearchAlt2
                  onClick={() => {
                    // 如果按下Button就傳送searchWord
                    setSeachWord(searchInput.current!.value);
                    // 跳轉到餐廳頁面
                    router.push("/SearchRestaurant");
                  }}
                />
              </Search>
            </Left>
            <Icons>
              <User onClick={openModal}>
                <BiUserCircle />
                <span>Account</span>
              </User>
              <MadolLogin modalIsOpen={modalIsOpen} closeModal={closeModal} />
              <Cart
                onClick={() => {
                  setCartIsOpen(true);
                }}
              >
                <BsCart3 />
                <span>({cartItemTotal})</span>
              </Cart>
              <GiHamburgerMenu
                onClick={() => {
                  setNavbarIsOpen(true);
                }}
              />
              <ShopCart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
              <Navbar
                navbarIsOpen={navbarIsOpen}
                setNavbarIsOpen={setNavbarIsOpen}
              />
            </Icons>
          </Main>
        </Container>
      </NavWrap>
    </NavHeight>
  );
}

export default Nav;
