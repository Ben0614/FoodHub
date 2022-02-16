import React, { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import { State } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import {
  listButtonData,
  conditionData,
  deliverRestaurantsData,
} from "../../data";
import { RestaurantObj } from "../../type";
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

function SearchRestaurant() {
  // Fixed Nav 開關狀態
  const [isShow, setIsShow] = useState(true);
  // listButton 切換狀態
  const [buttonChange, setButtonChange] = useState(0);
  // SearchModal 開關狀態
  const [modalSearchIsOpen, setModalSearchIsOpen] = useState(false);

  const dispatch = useDispatch();
  // 傳送餐廳List
  const setDisplayRestaurantsList = useCallback(
    (list) => {
      dispatch({
        type: "display-restaurants-list",
        payload: list,
      });
    },
    [dispatch]
  );
  // 獲取餐廳List
  const getDisplayRestaurantsList = useSelector((state: State) => {
    return state.searchRestaurantList;
  });

  // 傳送餐廳種類
  const setCategories = useCallback(
    (newList) => {
      dispatch({
        type: "categories",
        payload: newList,
      });
    },
    [dispatch]
  );
  // 獲取餐廳種類
  const getCategories = useSelector((state: State) => {
    return state.categories;
  });

  // 傳送餐廳評分
  const setRating = useCallback(
    (newList) => {
      dispatch({
        type: "rating",
        payload: newList,
      });
    },
    [dispatch]
  );
  // 獲取餐廳評分
  const getRating = useSelector((state: State) => {
    return state.rating;
  });

  // 傳送餐廳排序
  const setSortBy = useCallback(
    (newList) => {
      dispatch({
        type: "sort-by",
        payload: newList,
      });
    },
    [dispatch]
  );
  // 獲取餐廳排序
  const getSortBy = useSelector((state: State) => {
    return state.sortBy;
  });

  // 獲取搜尋關鍵字
  const getSerachWord = useSelector((state: State) => {
    return state.searchWord;
  });

  // 控制餐廳種類顯示 (多選)
  const handleCategories = (
    listData: Array<RestaurantObj>,
    categories: Array<string>
  ) => {
    // 複製餐廳List
    let newList = [...listData];
    // 確定categories陣列裡面有內容
    if (categories.length > 0) {
      // 篩選
      newList = newList.filter((v) => {
        let isFound = false;
        // 迴圈categories陣列
        for (let i = 0; i < categories.length; i++) {
          // 如果商品category 等於 categories 裡的內容 就返回 true
          if (v.category === categories[i]) {
            return true;
          }
        }
        return isFound;
      });
    }
    // 返回List
    return newList;
  };
  // 判斷此種類是否已在getCategories裡
  const handleCheckCategories = (v: string) => {
    let categoriesArray = [""];
    // 如果已被添加 就移除
    if (getCategories.includes(v)) {
      categoriesArray = getCategories.filter((val) => {
        return val !== v;
      });
    }
    // 如果未添加 就加進去
    if (!getCategories.includes(v)) {
      categoriesArray = [...getCategories, v];
    }
    // 傳送
    setCategories(categoriesArray);
  };
  // 控制餐廳評分顯示 (多選)
  const handleRating = (
    listData: Array<RestaurantObj>,
    rating: Array<string>
  ) => {
    // 複製餐廳List
    let newList = [...listData];
    // 裝入轉成number的rating的容器
    let numberArray: Array<number> = [];
    // 裝入轉成number的rating
    if (rating.length > 0) {
      rating.map((v) => {
        return numberArray.push(parseInt(v));
      });
    }
    // 篩選評分符合的餐廳
    for (let i = 0; i < rating.length; i++) {
      newList = newList.filter((val) => {
        return val.star > numberArray[i];
      });
    }

    // 返回 newList
    return newList;
  };
  // 判斷此評分是否已在getRating裡
  const handleCheckRating = (v: string) => {
    let ratingArray = [""];
    // 如果已被添加 就移除
    if (getRating.includes(v)) {
      ratingArray = getRating.filter((val) => {
        return val !== v;
      });
    }
    // 如果未添加 就加進去
    if (!getRating.includes(v)) {
      ratingArray = [...getRating, v];
    }
    // 傳送
    setRating(ratingArray);
  };
  // 控制排序顯示
  const handleSort = (listData: Array<RestaurantObj>, sortBy: string) => {
    // 複製餐廳List
    let newList = [...listData];

    // 根據傳來的內容作排序
    if (sortBy === "價格(高到低)") {
      newList = newList.sort((a, b) => {
        return b.price - a.price;
      });
    }
    if (sortBy === "價格(低到高)") {
      newList = newList.sort((a, b) => {
        return a.price - b.price;
      });
    }
    if (sortBy === "人氣(高到低)") {
      newList = newList.sort((a, b) => {
        return b.star - a.star;
      });
    }
    if (sortBy === "人氣(低到高)") {
      newList = newList.sort((a, b) => {
        return a.star - b.star;
      });
    }
    // 傳送
    return newList;
  };
  // 控制搜索關鍵字
  const handleSearchWord = (
    listData: Array<RestaurantObj>,
    searchWord: string
  ) => {
    let newList = [...listData];
    // 篩選出title有包含searchWord的餐廳
    newList = newList.filter((v) => {
      return v.title.includes(searchWord);
    });

    return newList;
  };

  // 一掛載完成就傳送商品List
  useEffect(() => {
    setDisplayRestaurantsList(deliverRestaurantsData);
  }, [setDisplayRestaurantsList]);

  // 篩選商品區域
  useEffect(() => {
    // 空商品List
    let newResraurants = [];
    // 回傳商品List和排序方式
    newResraurants = handleSort(deliverRestaurantsData, getSortBy);
    // 回傳新的商品List和評分
    newResraurants = handleRating(newResraurants, getRating);
    // 回傳新的商品List和種類
    newResraurants = handleCategories(newResraurants, getCategories);
    // 回傳新的商品List和搜尋關鍵字
    newResraurants = handleSearchWord(newResraurants, getSerachWord);
    // 傳送List
    setDisplayRestaurantsList(newResraurants);
  }, [
    setDisplayRestaurantsList,
    getSerachWord,
    getSortBy,
    getRating,
    getCategories,
  ]);

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
      <Head>
        <title>SearchRestaurant</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
          setSortBy={setSortBy}
          handleCheckRating={handleCheckRating}
          handleCheckCategories={handleCheckCategories}
          sortBy={getSortBy}
          rating={getRating}
          categories={getCategories}
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
                      {v.content.map((val, ind) => {
                        return (
                          <div key={ind}>
                            {/* index 2 是單選 分開 */}
                            {/* 將content內容直接傳入sortBy */}
                            {i === 2 ? (
                              <input
                                type="radio"
                                name="sort"
                                checked={getSortBy === val}
                                onChange={() => {
                                  setSortBy(val);
                                }}
                              />
                            ) : (
                              // 多選框 index 1 是評分
                              // 多選框 index 2 是種類
                              <input
                                type="checkbox"
                                checked={
                                  i === 1
                                    ? getRating.includes(val)
                                    : getCategories.includes(val)
                                }
                                onChange={() => {
                                  i === 1
                                    ? handleCheckRating(val)
                                    : handleCheckCategories(val);
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
          {/* 傳送商品列表 */}
          <DeliverRestaurants
            displayRestaurantsList={getDisplayRestaurantsList}
          />
        </Main>
      </Container>
      <Localities />
      <Footer />
    </div>
  );
}

export default SearchRestaurant;
