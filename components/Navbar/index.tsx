import React, { useState, useEffect, useRef } from "react";
import { dashboardsData, restaurantData } from "../../data";
import { ImCross } from "react-icons/im";
import { MdKeyboardArrowDown, MdOutlineSpaceDashboard } from "react-icons/md";
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

interface Props {
  navbarIsOpen: boolean;
  setNavbarIsOpen: Function;
  bodyStroll: Function;
}

function Navbar(props: Props) {
  // list開關狀態
  const [isShowList, setIsShowList] = useState(1000);
  // 獲取Dashboards ItemGroup
  const oneGroupRef = useRef<HTMLDivElement>(null);
  // 獲取Restaurant ItemGroup
  const twoGroupRef = useRef<HTMLDivElement>(null);

  // 展開Dashboards ItemGroup區域
  const oneGroupShow = () => {
    if (oneGroupRef.current) {
      // 獲取總高度 (包含隱藏的)
      const oneGroupHeight = oneGroupRef.current!.scrollHeight + "px";
      // 如果狀態是0
      if (isShowList === 0) {
        // 並且高度是0
        if (oneGroupRef.current!.offsetHeight === 0) {
          // 就給高度 開啟
          oneGroupRef.current!.style.height = oneGroupHeight;
        } else {
          // 如果高度不是0 就改為0 並把狀態換掉 (讓css變色)
          oneGroupRef.current!.style.height = "0";
          setIsShowList(1000);
        }
      } else {
        // 如果狀態不是0 就給高度 開啟
        // 因為狀態不是0 代表開啟的是另一個
        oneGroupRef.current!.style.height = oneGroupHeight;
        // 另一個list就給0 關閉
        twoGroupRef.current!.style.height = "0";
      }
    }
  };
  // 展開Restaurant ItemGroup區域
  const twoGroupShow = () => {
    if (twoGroupRef.current) {
      // 獲取總高度 (包含隱藏的)
      const twoGroupHeight = twoGroupRef.current!.scrollHeight + "px";
      // 如果狀態是1
      if (isShowList === 1) {
        // 並且高度是0
        if (twoGroupRef.current!.offsetHeight === 0) {
          // 就給高度 開啟
          twoGroupRef.current!.style.height = twoGroupHeight;
        } else {
          // 如果高度不是0 就改為0 並把狀態換掉 (讓css變色)
          twoGroupRef.current!.style.height = "0";
          setIsShowList(1000);
        }
      } else {
        // 如果狀態不是1 就給高度 開啟
        // 因為狀態不是1 代表開啟的是另一個
        twoGroupRef.current!.style.height = twoGroupHeight;
        // 另一個list就給0 關閉
        oneGroupRef.current!.style.height = "0";
      }
    }
  };

  return (
    <NavbarWrap navbarIsOpen={props.navbarIsOpen}>
      <Top>
        <h2>Navbar</h2>
        {/* 關閉 */}
        <ImCross
          onClick={() => {
            props.setNavbarIsOpen(false);
            // navbar 關閉時開啟滑動
            props.bodyStroll(true);
          }}
        />
      </Top>
      <Dashboards>
        {/* 點擊開啟或關閉list */}
        {/* 傳送狀態給css */}
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
        {/* item區域 */}
        <ItemGroup ref={oneGroupRef}>
          {dashboardsData.map((v, i) => {
            return <Item key={i}>{v}</Item>;
          })}
        </ItemGroup>
      </Dashboards>
      <Restaurant>
        {/* 點擊開啟或關閉list */}
        {/* 傳送狀態給css */}
        <Title
          onClick={() => {
            setIsShowList(1);
            twoGroupShow();
          }}
          isShowList={isShowList === 1 ? true : false}
        >
          <BiRestaurant />
          <h3>Restaurant</h3>
          {/* 傳送狀態給css  箭頭*/}
          <TitleArrow isShowList={isShowList === 1 ? true : false}>
            <MdKeyboardArrowDown />
          </TitleArrow>
        </Title>
        <ItemGroup ref={twoGroupRef}>
          {restaurantData.map((v, i) => {
            return <Item key={i}>{v}</Item>;
          })}
        </ItemGroup>
      </Restaurant>
    </NavbarWrap>
  );
}

export default Navbar;
