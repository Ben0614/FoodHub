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
      <Link href="/">
        <a>
          <Home>
            <span>HOME</span>
            <MdKeyboardArrowRight />
          </Home>
        </a>
      </Link>
      <Link href="/">
        <a>
          <NewYork>
            <span>NEW YORK</span>
            <MdKeyboardArrowRight />
          </NewYork>
        </a>
      </Link>
      <Now>{props.nowPage}</Now>
    </BreadcrumbWrap>
  );
}

export default Breadcrumb;
