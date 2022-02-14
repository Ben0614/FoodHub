import React, { useState } from "react";
import Link from "next/link";
import { menuData } from "../../data";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import { ItemGroup, Item, Cross } from "./MadolFoodMenuStyle";
import style from "./style.module.css";

// css 最外層的
const customStyles = {
  overlay: { zIndex: 999, background: "rgba(127,127,127,.7)" },
};

interface Props {
  modalFoodMenuIsOpen: boolean;
  closeModalFoodMunu: () => void;
}

// 桌機時不顯示
function MadolFoodMenu(props: Props) {
  return (
    // 在這裡添加css內層的樣式
    <Modal
      isOpen={props.modalFoodMenuIsOpen}
      onRequestClose={props.closeModalFoodMunu}
      className={style.Modal}
      style={customStyles}
    >
      {/* 關閉 */}
      <Cross onClick={props.closeModalFoodMunu}>
        <ImCross />
      </Cross>
      {/* item區域 */}
      <ItemGroup>
        {/* 第一個會保持選取 額外挑出來 */}
        <Item>Recomended(40)</Item>
        {menuData.map((v, i) => {
          return <Item key={i}>{v}</Item>;
        })}
      </ItemGroup>
    </Modal>
  );
}

export default MadolFoodMenu;
