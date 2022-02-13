import React, { useState, useEffect, useRef } from "react";
import { ImCross } from "react-icons/im";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import { BiRestaurant } from "react-icons/bi";
import {
  NavbarWrap,
  Top,
  Dashboards,
  Restaurant,
  Title,
  TitleArrow,
  ItemGroup,
  Item,
} from "./NavbarStyle";

const DashboardsData = [
  "Review",
  "Photos",
  "Order List",
  "Order History",
  "Followers",
  "Bookmarks",
];
const RestaurantData = [
  "Food Menu",
  "Restaurant Two Column",
  "Search Restaurant",
];

interface Props {
  navbarIsOpen: boolean;
  setNavbarIsOpen: Function;
}

function Navbar(props: Props) {
  const [isShowList, setIsShowList] = useState(1000);
  const oneGroupRef = useRef<HTMLDivElement>(null);
  const twoGroupRef = useRef<HTMLDivElement>(null);

  // 展開oneGroup區域
  const oneGroupShow = () => {
    if (oneGroupRef.current) {
      const oneGroupHeight = oneGroupRef.current!.scrollHeight + "px";
      if (isShowList === 0) {
        if (oneGroupRef.current!.offsetHeight === 0) {
          oneGroupRef.current!.style.height = oneGroupHeight;
        } else {
          oneGroupRef.current!.style.height = "0";
          setIsShowList(1000);
        }
      } else {
        oneGroupRef.current!.style.height = oneGroupHeight;
        twoGroupRef.current!.style.height = "0";
      }
    }
  };
  // 展開twoGroup區域
  const twoGroupShow = () => {
    if (twoGroupRef.current) {
      const twoGroupHeight = twoGroupRef.current!.scrollHeight + "px";
      if (isShowList === 1) {
        if (twoGroupRef.current!.offsetHeight === 0) {
          twoGroupRef.current!.style.height = twoGroupHeight;
        } else {
          twoGroupRef.current!.style.height = "0";
          setIsShowList(1000);
        }
      } else {
        twoGroupRef.current!.style.height = twoGroupHeight;
        oneGroupRef.current!.style.height = "0";
      }
    }
  };

  return (
    <NavbarWrap navbarIsOpen={props.navbarIsOpen}>
      <Top>
        <h2>Navbar</h2>
        <ImCross
          onClick={() => {
            props.setNavbarIsOpen(false);
          }}
        />
      </Top>
      <Dashboards>
        <Title
          onClick={() => {
            setIsShowList(0);
            oneGroupShow();
          }}
          isShowList={isShowList === 0 ? true : false}
        >
          <MdOutlineSpaceDashboard />
          <h3>Dashboards</h3>
          <TitleArrow isShowList={isShowList === 0 ? true : false}>
            <MdKeyboardArrowDown />
          </TitleArrow>
        </Title>
        <ItemGroup
          ref={oneGroupRef}
        >
          {DashboardsData.map((v, i) => {
            return <Item key={i}>{v}</Item>;
          })}
        </ItemGroup>
      </Dashboards>
      <Restaurant>
        <Title
          onClick={() => {
            setIsShowList(1);
            twoGroupShow();
          }}
          isShowList={isShowList === 1 ? true : false}
        >
          <BiRestaurant />
          <h3>Restaurant</h3>
          <TitleArrow isShowList={isShowList === 1 ? true : false}>
            <MdKeyboardArrowDown />
          </TitleArrow>
        </Title>
        <ItemGroup
          ref={twoGroupRef}
        >
          {RestaurantData.map((v, i) => {
            return <Item key={i}>{v}</Item>;
          })}
        </ItemGroup>
      </Restaurant>
    </NavbarWrap>
  );
}

export default Navbar;
