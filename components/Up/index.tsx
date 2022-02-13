import React from "react";
import { UpWrap } from "./UpStyle";
import { MdKeyboardArrowUp } from "react-icons/md";

function Up() {
  function goToTop() {
    let scrollToTop = window.setInterval(function () {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // 每一次滾動多遠
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 2);
  }
  return (
    <UpWrap onClick={goToTop}>
      <MdKeyboardArrowUp />
    </UpWrap>
  );
}
export default Up;
