import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
} from "./HeaderStyle";

function Header() {
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
    <HeaderWrap>
      <Container>
        <Nav>
          <Link href="/">
            <a>
              <Image src="/images/logo.png" alt="" height="45px" width="45px" />
            </a>
          </Link>
          <div className="icons">
            <div className="user" onClick={openModal}>
              <BiUserCircle />
              <span>Account</span>
            </div>
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
          </div>
        </Nav>

        <ShopCart cartIsOpen={cartIsOpen} setCartIsOpen={setCartIsOpen} />
        <Navbar navbarIsOpen={navbarIsOpen} setNavbarIsOpen={setNavbarIsOpen} />

        <MadolLogin modalIsOpen={modalIsOpen} closeModal={closeModal} />
        <MainTitle>
          Discover the best food & drinks in <span>New York</span>
        </MainTitle>
        <SecondTitle>The meals you love, delivered with care</SecondTitle>
        <Search>
          <h4>
            <GiPositionMarker />
            <span>New York</span>
          </h4>
          <h4>
            <BiCurrentLocation />
            <span>Locate Me</span>
          </h4>
          <input type="text" placeholder="Search for restaurant" />
          <button>Search</button>
        </Search>
      </Container>
    </HeaderWrap>
  );
}

export default Header;
