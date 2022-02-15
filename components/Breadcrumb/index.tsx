import React from "react";
import router from "next/router";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BreadcrumbWrap, Home, NewYork, Now } from "./BreadcrumbStyle";

interface Props {
  nowPage: string;
}

function Breadcrumb(props: Props) {
  return (
    <BreadcrumbWrap>
      {/* 第一層 */}
      <Home
        onClick={() => {
          router.push("/");
        }}
      >
        <span>HOME</span>
        <MdKeyboardArrowRight />
      </Home>
      {/* 第二層 */}
      <NewYork
        onClick={() => {
          router.push("/");
        }}
      >
        <span>NEW YORK</span>
        <MdKeyboardArrowRight />
      </NewYork>
      {/* 現在頁面 由父層頁面傳遞過來*/}
      <Now>{props.nowPage}</Now>
    </BreadcrumbWrap>
  );
}

export default Breadcrumb;
