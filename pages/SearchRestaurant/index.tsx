import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "../../components/Container";
import Nav from "../../components/Nav";
import Up from "../../components/Up";
import MadolSearch from "../../components/MadolSearch";
import DeliverRestaurants from "../../components/DeliverRestaurants";
import Localities from "../../components/Localities";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  SearchArea,
  Buttons,
  ListButtons,
  ButtonsLi,
  FilterButton,
  CategoriesButton,
  Main,
  Condition,
  ItemGroup,
  Item,
  ItemCost,
} from "../../styles/SearchRestaurantStyle";

// 渲染資料
const listButtonData = ["Delivery", "Dining Out", "Nightlife"];
const conditionData = [
  { title: "Categories", content: ["Pizza", "Pizza", "Pizza", "Pizza"] },
  { title: "Rating", content: ["4+", "4+", "4+", "4+"] },
  {
    title: "Sort By",
    content: ["Popularity", "Popularity", "Popularity", "Popularity"],
  },
];

function SearchRestaurant() {
  // Fixed Nav 開關狀態
  const [isShow, setIsShow] = useState(true);
  // listButton 切換狀態
  const [buttonChange, setButtonChange] = useState(0);
  // SearchModal 開關狀態
  const [modalSearchIsOpen, setModalSearchIsOpen] = useState(false);
  // 開啟
  function openModalSearch() {
    setModalSearchIsOpen(true);
  }
  // 關閉
  function closeModalSearch() {
    setModalSearchIsOpen(false);
  }
  return (
    <div>
      {/* Fixed Nav */}
      <Nav isShow={isShow} firstHeight={true} />
      {/* 返回頂部 */}
      <Up />
      {/* 麵包屑 */}
      <Container>
        <Breadcrumb nowPage="Restaurant" />
      </Container>

      <Container>
        <Buttons>
          <ListButtons>
            {listButtonData.map((v, i) => {
              return (
                <ButtonsLi
                  key={i}
                  onClick={() => {
                    setButtonChange(i);
                  }}
                  // 按鈕狀態
                  buttonChange={buttonChange === i ? true : false}
                >
                  {v}
                </ButtonsLi>
              );
            })}
          </ListButtons>
          <FilterButton>FILTER</FilterButton>
        </Buttons>
        {/* MadolSearch按鈕 */}
        <CategoriesButton onClick={openModalSearch}>
          <GiHamburgerMenu />
          <span>Categories</span>
        </CategoriesButton>
        {/* MadolSearch */}
        <MadolSearch
          modalSearchIsOpen={modalSearchIsOpen}
          closeModalSearch={closeModalSearch}
        />
      </Container>
      <Container>
        <Main>
          <SearchArea>
            <Condition>
              <ItemGroup>
                {conditionData.map((v, i) => {
                  return (
                    <Item key={i}>
                      <h3 className="title">{v.title}</h3>
                      {v.content.map((v, ind) => {
                        return (
                          <div key={ind}>
                            {/* index 2 是單選 分開 */}
                            {i === 2 ? (
                              <input type="radio" name="sort" />
                            ) : (
                              <input type="checkbox" />
                            )}
                            <span>{v}</span>
                          </div>
                        );
                      })}
                    </Item>
                  );
                })}
                <ItemCost>
                  <h3 className="title">Cost per person</h3>
                  <div className="costs">
                    {/* 圓形20 */}
                    <div className="cost cost20">
                      <span>20</span>
                    </div>
                    {/* 圓形40 */}
                    <div className="cost cost40">
                      <span>40</span>
                    </div>
                  </div>
                  <div className="line"></div>
                </ItemCost>
              </ItemGroup>
            </Condition>
          </SearchArea>
          <DeliverRestaurants />
        </Main>
      </Container>
      <Localities />
      <Footer />
    </div>
  );
}

export default SearchRestaurant;
