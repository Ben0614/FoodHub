import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MadolLogin from "../MadolLogin";
import ShopCart from "../ShopCart";
import Navbar from "../Navbar";
import { BsCart3 } from "react-icons/bs";
import { BiUserCircle, BiCurrentLocation, BiSearchAlt2 } from "react-icons/bi";
import { GiHamburgerMenu, GiPositionMarker } from "react-icons/gi";
import { NavHeight, NavWrap, Search, Cart } from "./NavStyle";

interface Props {
  isShow: boolean;
  firstHeight: boolean;
}

function Nav(props: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const [navbarIsOpen, setNavbarIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }
  return (
    // firstHeight 如果一開始不顯示 高度就給0 否則會空出一塊區域
    <NavHeight firstHeight={props.firstHeight}>
      <NavWrap isShow={props.isShow}>
        <Link href="/">
          <a>
            <Image src="/images/logo.png" alt="" height="45px" width="45px" />
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
          <input type="text" placeholder="Search for restaurant" />
          <BiSearchAlt2 />
        </Search>
        <div className="icons">
          <div className="user" onClick={openModal}>
            <BiUserCircle />
            <span>Account</span>
          </div>
          <MadolLogin modalIsOpen={modalIsOpen} closeModal={closeModal} />
          <Cart
            onClick={() => {
              setCartIsOpen(true);
            }}
          >
            <BsCart3 />
            <span>(8)</span>
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
        </div>
      </NavWrap>
    </NavHeight>
  );
}

export default Nav;
