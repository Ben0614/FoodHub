import React from "react";
import { UpWrap } from "./UpStyle";
import { MdKeyboardArrowUp } from "react-icons/md";

function Up() {
  // 返回最上面
  function goToTop() {
    let scrollToTop = window.setInterval(function () {
      // 距離頂部的高度
      let pos = window.pageYOffset;
      if (pos > 0) {
        // (x座標 y座標)
        window.scrollTo(0, pos - 50); // 每一次滾動多遠
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
