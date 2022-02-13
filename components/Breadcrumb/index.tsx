import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BreadcrumbWrap, Home, NewYork, Now } from "./BreadcrumbStyle";

interface Props {
  nowPage: string;
}

function Breadcrumb(props: Props) {
  return (
    <BreadcrumbWrap>
      {/* 第一層 */}
      <Link href="/">
        <a>
          <Home>
            <span>HOME</span>
            <MdKeyboardArrowRight />
          </Home>
        </a>
      </Link>
      {/* 第二層 */}
      <Link href="/">
        <a>
          <NewYork>
            <span>NEW YORK</span>
            <MdKeyboardArrowRight />
          </NewYork>
        </a>
      </Link>
      {/* 現在頁面 由父層頁面傳遞過來*/}
      <Now>{props.nowPage}</Now>
    </BreadcrumbWrap>
  );
}

export default Breadcrumb;
