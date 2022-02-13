import React, { useState } from "react";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import { ItemGroup, Item, Cross } from "./MadolFoodMenuStyle";
import style from "./style.module.css";

// 渲染資料
const menuData = [
  "DPB Special Combos (10)",
  "Chineese Starters (30)",
  "Chinese Main Course (75)",
  "Indian Main Course (63)",
  "Rice & Pulao (7)",
  "Desserts (1)",
  "Soup & wonton (15)",
  "Accompaniment (4)",
  "Biryani (1)",
];

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
