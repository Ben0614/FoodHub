import React, { useState } from "react";
import Link from "next/link";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import { ItemGroup, Item, Cross } from "./MadolFoodMenuStyle";
import style from "./style.module.css";

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

const customStyles = {
  overlay: { zIndex: 999, background: "rgba(127,127,127,.7)" },
};

interface Props {
  modalFoodMenuIsOpen: boolean;
  closeModalFoodMunu: () => void;
}

function MadolFoodMenu(props: Props) {
  return (
    <Modal
      isOpen={props.modalFoodMenuIsOpen}
      onRequestClose={props.closeModalFoodMunu}
      className={style.Modal}
      style={customStyles}
    >
      <Cross onClick={props.closeModalFoodMunu}>
        <ImCross />
      </Cross>
      <ItemGroup>
        <Item>Recomended(40)</Item>
        {menuData.map((v, i) => {
          return <Item key={i}>{v}</Item>;
        })}
      </ItemGroup>
    </Modal>
  );
}

export default MadolFoodMenu;
