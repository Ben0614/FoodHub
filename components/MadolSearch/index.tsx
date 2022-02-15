import React, { useState } from "react";
import Link from "next/link";
import { conditionData } from "../../data";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import { ItemGroup, Item, ItemCost, Cross } from "./MadolSearchStyle";
import style from "./style.module.css";

// css 最外層的
const customStyles = {
  overlay: { zIndex: 999, background: "rgba(127,127,127,.7)" },
};

type SortBy = string | number;
type Rating = Array<string>;
type Categories = Array<string>;

interface Props {
  modalSearchIsOpen: boolean;
  closeModalSearch: () => void;
  setSortBy: Function;
  handleCheckRating: Function;
  handleCheckCategories: Function;
  sortBy: SortBy;
  rating: Rating;
  categories: Categories;
}

function MadolSearch(props: Props) {
  return (
    // 在這裡添加css內層的樣式
    <Modal
      isOpen={props.modalSearchIsOpen}
      onRequestClose={props.closeModalSearch}
      className={style.Modal}
      style={customStyles}
    >
      {/* 關閉按鈕 */}
      <Cross onClick={props.closeModalSearch}>
        <ImCross />
      </Cross>
      <ItemGroup>
        {conditionData.map((v, i) => {
          return (
            <Item key={i}>
              <h3 className="title">{v.title}</h3>
              {v.content.map((val, ind) => {
                return (
                  <div key={ind}>
                    {/* index 2 是單選 分開 */}
                    {/* 將content內容直接傳入sortBy */}
                    {i === 2 ? (
                      <input
                        type="radio"
                        name="sort"
                        checked={props.sortBy === val}
                        onChange={() => {
                          props.setSortBy(val);
                        }}
                      />
                    ) : (
                      // 多選框 index 1 是評分
                      // 多選框 index 2 是種類
                      <input
                        type="checkbox"
                        checked={
                          i === 1
                            ? props.rating.includes(val)
                            : props.categories.includes(val)
                        }
                        onChange={() => {
                          i === 1
                            ? props.handleCheckRating(val)
                            : props.handleCheckCategories(val);
                        }}
                      />
                    )}
                    <span>{val}</span>
                  </div>
                );
              })}
            </Item>
          );
        })}
        <ItemCost>
          <h3 className="title">Cost per person</h3>
          <div className="costs">
            <div className="cost cost20">
              <span>20</span>
            </div>
            <div className="cost cost40">
              <span>40</span>
            </div>
          </div>
          <div className="line"></div>
        </ItemCost>
      </ItemGroup>
    </Modal>
  );
}

export default MadolSearch;
