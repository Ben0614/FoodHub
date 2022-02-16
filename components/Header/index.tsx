import React, { useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { State } from "../../type";
import Container from "../Container";
import ShopCart from "../ShopCart";
import Navbar from "../Navbar";
import MadolLogin from "../MadolLogin";
import { BiUserCircle, BiCurrentLocation } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu, GiPositionMarker } from "react-icons/gi";
import {
  HeaderWrap,
  Nav,
  Cart,
  MainTitle,
  SecondTitle,
  Search,
  SearchInput,
  SearchButton,
} from "./HeaderStyle";

function Header() {
  const dispatch = useDispatch();
  // user模態框
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // 購物車模態框
  const [cartIsOpen, setCartIsOpen] = useState(false);
  // navbar模態框
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);
  // 搜索框
  const searchInput = useRef<HTMLInputElement>(null);
  // router
  const router = useRouter();

  // 開啟user
  function openModal() {
    setModalIsOpen(true);
  }
  // 關閉user
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
    <HeaderWrap>
      <Container>
        <Nav>
          {/* logo */}
          <Link href="/">
            <a>
              <Image src="/images/logo.png" alt="" height="45px" width="45px" />
            </a>
          </Link>
          {/* icons */}
          <div className="icons">
            {/* user 點擊開啟模態框 */}
            <div className="user" onClick={openModal}>
              <BiUserCircle />
              <span>Account</span>
            </div>
            {/* 購物車 點擊開啟模態框 */}
            <Cart
              onClick={() => {
                setCartIsOpen(true);
              }}
            >
              <BsCart3 />
              <span>({cartItemTotal})</span>
            </Cart>
            {/* navbar 點擊開啟模態框 */}
            <GiHamburgerMenu
              onClick={() => {
                setNavbarIsOpen(true);
              }}
            />
          </div>
        </Nav>

        {/* user模態框 */}
        <MadolLogin modalIsOpen={modalIsOpen} closeModal={closeModal} />
        {/* 購物車模態框 */}
        <ShopCart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
        {/* navbar模態框 */}
        <Navbar navbarIsOpen={navbarIsOpen} setNavbarIsOpen={setNavbarIsOpen} />

        <MainTitle>
          Discover the best food & drinks in <span>New York</span>
        </MainTitle>
        <SecondTitle>The meals you love, delivered with care</SecondTitle>
        {/* 搜尋 */}
        <Search>
          {/* 地點 */}
          <h4>
            <GiPositionMarker />
            <span>New York</span>
          </h4>
          {/* 現在位置 */}
          <h4>
            <BiCurrentLocation />
            <span>Locate Me</span>
          </h4>
          {/* defaultValue 放入獲取的關鍵字 */}
          <SearchInput
            ref={searchInput}
            type="text"
            placeholder="Search for restaurant"
            defaultValue={getSearchWord}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                // 如果按下enter就傳送searchWord
                setSeachWord((e.target as HTMLInputElement).value);
                // 跳轉到餐廳頁面
                router.push("/SearchRestaurant");
              }
            }}
          />
          <SearchButton
            onClick={() => {
              // 如果按下enter就傳送searchWord
              setSeachWord(searchInput.current!.value);
              // 跳轉到餐廳頁面
              router.push("/SearchRestaurant");
            }}
          >
            Search
          </SearchButton>
        </Search>
      </Container>
    </HeaderWrap>
  );
}

export default Header;
