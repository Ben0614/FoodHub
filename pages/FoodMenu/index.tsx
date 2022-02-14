import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { State, Obj } from "../../type";
import {
  foodMenuPicPath,
  foodMenuListButtonData,
  inputContent,
  selectOptionContent,
  reviews,
  menuData,
  recommendedItemData,
} from "../../data";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Up from "../../components/Up";
import Nav from "../../components/Nav";
import MadolFoodMenu from "../../components/MadolFoodMenu";
import Localities from "../../components/Localities";
import Breadcrumb from "../../components/Breadcrumb";
import { AiFillStar } from "react-icons/ai";
import { BiTimeFive, BiCommentDetail, BiLike } from "react-icons/bi";
import { GiPositionMarker, GiHamburgerMenu } from "react-icons/gi";
import { ImEarth } from "react-icons/im";
import { BsPlusLg } from "react-icons/bs";
import {
  Starbucks,
  PicGroup,
  Pic,
  TitleArea,
  Title,
  Star,
  Info,
  Main,
  ListButtons,
  ButtonsLi,
  ListContent,
  CategoriesButton,
  Recommend,
  MenuGroup,
  MenuItem,
  RecommendMain,
  RecommendTitle,
  RecommendItemGroup,
  RecommendItem,
  RecommendStar,
  AddButton,
  Book,
  BookInputLabel,
  BookInput,
  BookSelectLabel,
  BookSelect,
  SelectDate,
  SelectGuests,
  BookButton,
  Review,
  ReviewItemGroup,
  ReviewItem,
  ReviewItemInfo,
  ReviewItemText,
  ReviewItemStar,
  ReviewItemContent,
  ReviewItemPics,
  ReviewItemAmount,
  ReviewItemLikeComment,
} from "../../styles/FoodMenuStyle";

// 星星數量
const starNumber: Array<number> = [];
for (let i = 1; i <= 5; i++) {
  starNumber.push(i);
}

function FoodMenu() {
  // Fixed Nav 開關狀態
  const [isShow, setIsShow] = useState(true);
  // input和select 狀態
  const [activeInput, setActiveInput] = useState(1000);
  // list區域 顯示狀態
  const [listChange, setListChange] = useState(0);
  // FoodMenuModal 開關狀態
  const [modalFoodMenuIsOpen, setModalFoodMenuIsOpen] = useState(false);

  const dispatch = useDispatch();
  // 加入購物車
  const setCartItem = useCallback(
    (cartData: Array<Obj>) => {
      dispatch({
        type: "cart-item",
        payload: cartData,
      });
    },
    [dispatch]
  );
  // 傳送商品列表
  const setRecommendItemList = useCallback(
    (displayRecommendedItemData) => {
      dispatch({
        type: "list-data",
        payload: displayRecommendedItemData,
      });
    },
    [dispatch]
  );
  // 一掛載完就傳送商品列表
  useEffect(() => {
    setRecommendItemList(recommendedItemData);
  }, [setRecommendItemList]);

  // 類別篩選顯示
  const handleCategory = (v: string) => {
    // 如果點到的是Recomended 就傳送顯示全部商品
    if (v === "Recomended") {
      setRecommendItemList(recommendedItemData);
    } else {
      // 依據點到的類別名稱 和全部商品的category做篩選 最後顯示結果
      const activeCategory = recommendedItemData.filter((item) => {
        return item.category === v;
      });
      setRecommendItemList(activeCategory);
    }
  };

  // 每種類別的商品數量
  const categoryAmount = menuData.map((v) => {
    // 迴圈類別欄 返回相同類別的
    const categoryItemAmount = recommendedItemData.filter((item) => {
      return item.category === v;
    });
    // 返回此類別的陣列長度(數量)
    return categoryItemAmount.length;
  });
  // console.log("categoryAmount", categoryAmount);

  // 獲取商品列表
  const getRecommendItemList = useSelector((state: State) => {
    return state.recommend;
  });
  // console.log("getRecommendItemList", getRecommendItemList);

  // 獲取購物車內商品
  const getCartItemData = useSelector((state: State) => {
    return state.cart;
  });
  // console.log("...getCartItemState", ...getCartItemData);

  // 商品總數
  const menuItemAmount = recommendedItemData.length;

  // 開啟
  function openModalFoodMunu() {
    setModalFoodMenuIsOpen(true);
  }
  // 關閉
  function closeModalFoodMunu() {
    setModalFoodMenuIsOpen(false);
  }

  return (
    <div>
      {/* Fixed Nav */}
      <Nav isShow={isShow} firstHeight={true} />
      {/* 返回頂部 */}
      <Up />
      {/* 麵包屑 */}
      <Container>
        <Breadcrumb nowPage="FoodMenu" />
      </Container>

      <Starbucks>
        <Container>
          <PicGroup>
            {foodMenuPicPath.map((v, i) => {
              return (
                <Pic key={i} index={i}>
                  <Image src={v} layout="fill" objectFit="cover" alt="" />
                </Pic>
              );
            })}
          </PicGroup>
          {/* 標題區 */}
          <TitleArea>
            <Title>Starbucks</Title>
            {/* 渲染星星 */}
            <Star>
              {starNumber.map((v, i) => {
                return <AiFillStar key={i} />;
              })}
              <p>
                4.5 <span>(1004)</span>
              </p>
            </Star>
          </TitleArea>
          {/* 基本訊息 */}
          <Info>
            <p>Coffee, signature roasts, light bite, quick bite, fast foods</p>
            <p>
              <GiPositionMarker />
              <span>
                The Dorothy Ross Friedman Residence, NY, US -{" "}
                <Link href="javascipt:void(0)">
                  <a className="map">Show Map</a>
                </Link>
              </span>
            </p>
            <p>
              <BiTimeFive />
              <span className="open-time">Open Now</span>
              <span>- Sun - Mon: 9am - 10pm</span>
            </p>
            <p>
              <ImEarth />
              <span>www.starbucks.com</span>
            </p>
          </Info>
          {/* 主要區域 */}
          <Main>
            <ListButtons>
              {foodMenuListButtonData.map((v, i) => {
                return (
                  // list按鈕 切換list區域
                  // 根據listChange是否等於i判斷 true開起 false關閉
                  <ButtonsLi
                    key={i}
                    onClick={() => {
                      setListChange(i);
                    }}
                    isOpen={listChange === i ? true : false}
                  >
                    {v}
                  </ButtonsLi>
                );
              })}
            </ListButtons>
            {/* list內容區域 */}
            <ListContent listChange={listChange}>
              {/* 第一區 */}
              <Recommend listChange={listChange}>
                {/* 手機Modal按鈕 */}
                <CategoriesButton onClick={openModalFoodMunu}>
                  <GiHamburgerMenu />
                  <span>Categories</span>
                </CategoriesButton>
                {/* 手機Modal */}
                <MadolFoodMenu
                  modalFoodMenuIsOpen={modalFoodMenuIsOpen}
                  closeModalFoodMunu={closeModalFoodMunu}
                  handleCategory={handleCategory}
                  categoryAmount={categoryAmount}
                  menuItemAmount={menuItemAmount}
                />
                <MenuGroup>
                  <MenuItem
                    onClick={() => {
                      handleCategory("Recomended");
                    }}
                  >
                    Recomended ({menuItemAmount})
                  </MenuItem>
                  {menuData.map((v, i) => {
                    return (
                      <MenuItem
                        key={i}
                        onClick={() => {
                          handleCategory(v);
                        }}
                      >
                        {/* 種類名稱與商品數量 */}
                        {v} ({categoryAmount[i]})
                      </MenuItem>
                    );
                  })}
                </MenuGroup>
                <RecommendMain>
                  <RecommendTitle>Recommended</RecommendTitle>
                  <RecommendItemGroup>
                    {getRecommendItemList.map((v, i) => {
                      return (
                        <RecommendItem key={i}>
                          <div className="left">
                            <div className="pic">
                              <Image
                                src={v.pic}
                                height="150px"
                                width="150px"
                                alt=""
                              />
                            </div>
                            <div className="text-content">
                              <div className="title">{v.title}</div>
                              <Link href="javascipt:void(0)">
                                <a>MUST TRY</a>
                              </Link>
                              <RecommendStar>
                                {starNumber.map((v) => {
                                  return <AiFillStar key={v} />;
                                })}
                                <p>
                                  <span>(57)</span>
                                </p>
                              </RecommendStar>
                              <p className="price">
                                <span>{v.price}</span>
                                <span>{v.special_price}</span>
                                <span>10% off</span>
                              </p>
                              <p className="meal-content">{v.meal_content}</p>
                            </div>
                          </div>
                          <AddButton
                            onClick={() => {
                              // 餐點不重覆加入
                              const index = getCartItemData.findIndex((val) => {
                                return val.id === v.id;
                              });
                              if (index === -1) {
                                const item = {
                                  id: v.id,
                                  title: v.title,
                                  pic: v.pic,
                                  price: v.price,
                                  special_price: v.special_price,
                                  amount: 1,
                                };
                                const cartData = [item, ...getCartItemData];
                                setCartItem(cartData);
                              }
                            }}
                          >
                            <span>ADD</span> <BsPlusLg />
                          </AddButton>
                        </RecommendItem>
                      );
                    })}
                  </RecommendItemGroup>
                </RecommendMain>
              </Recommend>
              {/* 第二區 */}
              <Book listChange={listChange}>
                <div className="input-area">
                  {/* 根據activeInput狀態 改變css */}
                  <SelectDate activeInput={activeInput === 4 ? true : false}>
                    <BookSelectLabel
                      activeInput={activeInput === 4 ? true : false}
                    >
                      Select Date
                    </BookSelectLabel>
                    <BookSelect
                      name="date"
                      id="date"
                      // 聚焦就ser
                      onFocus={() => {
                        setActiveInput(4);
                      }}
                      // 失焦就切換狀態
                      onBlur={() => {
                        setActiveInput(1000);
                      }}
                    >
                      {selectOptionContent.map((v, i) => {
                        return (
                          <option value={v} key={i}>
                            {v}
                          </option>
                        );
                      })}
                    </BookSelect>
                  </SelectDate>
                  <SelectGuests activeInput={activeInput === 5 ? true : false}>
                    <BookSelectLabel
                      htmlFor=""
                      activeInput={activeInput === 5 ? true : false}
                    >
                      Number Of Guests
                    </BookSelectLabel>
                    <BookSelect
                      name="number"
                      id="number"
                      onFocus={() => {
                        setActiveInput(5);
                      }}
                      onBlur={() => {
                        setActiveInput(1000);
                      }}
                    >
                      {selectOptionContent.map((v, i) => {
                        return (
                          <option value={v} key={i}>
                            {v}
                          </option>
                        );
                      })}
                    </BookSelect>
                  </SelectGuests>
                  {inputContent.map((v, i) => {
                    return (
                      <div className="form-input" key={i}>
                        <BookInputLabel
                          htmlFor=""
                          activeInput={i === activeInput ? true : false}
                        >
                          {v}
                        </BookInputLabel>
                        <BookInput
                          type="text"
                          onFocus={() => {
                            setActiveInput(i);
                          }}
                          onBlur={() => {
                            setActiveInput(1000);
                          }}
                          activeInput={i === activeInput ? true : false}
                        />
                      </div>
                    );
                  })}
                  <BookButton>Book</BookButton>
                </div>
                {/* 手機app */}
                <Image
                  src="/images/foodMenu/dowmload-pic.png"
                  alt=""
                  height="407px"
                  width="495px"
                />
              </Book>
              {/* 第三區 */}
              <Review listChange={listChange}>
                <ReviewItemGroup>
                  {reviews.map((v, i) => {
                    return (
                      <ReviewItem key={i}>
                        {/* index 1 內容不同 分開 */}
                        {i === 1 ? (
                          <div>
                            <ReviewItemInfo>
                              <Image
                                key={i}
                                className="head-host"
                                src={v.headHost}
                                alt=""
                                height="36px"
                                width="36px"
                              />
                              <ReviewItemText>
                                <h3 className="name">{v.name}</h3>
                              </ReviewItemText>
                            </ReviewItemInfo>
                            <ReviewItemContent>{v.content}</ReviewItemContent>
                            <ReviewItemInfo>
                              <Image
                                key={i}
                                className="head-host"
                                src={v.headHost2!}
                                alt=""
                                height="36px"
                                width="36px"
                              />
                              <ReviewItemText>
                                <h3 className="name">{v.name2}</h3>
                              </ReviewItemText>
                            </ReviewItemInfo>
                            <ReviewItemContent>{v.content2}</ReviewItemContent>
                          </div>
                        ) : (
                          <div>
                            <ReviewItemInfo>
                              <Image
                                className="head-host"
                                src={v.headHost}
                                alt=""
                                height="48px"
                                width="48px"
                              />
                              <ReviewItemText>
                                <h3 className="name">{v.name}</h3>
                                <p className="review-follow">
                                  {v.reviewsNumber}
                                </p>
                              </ReviewItemText>
                            </ReviewItemInfo>
                            <ReviewItemStar>
                              {starNumber.map((v) => {
                                return <AiFillStar key={v} />;
                              })}
                              <span>{v.star}</span>
                              <span>{v.time}</span>
                            </ReviewItemStar>
                            <ReviewItemContent>{v.content}</ReviewItemContent>
                            {/* index 0 以外的沒有食物照片 隱藏pic */}
                            {i !== 0 ? (
                              ""
                            ) : (
                              <ReviewItemPics>
                                <Image
                                  src={v.foodPic!.one}
                                  alt=""
                                  height="252px"
                                  width="426px"
                                />
                                <Image
                                  src={v.foodPic!.two}
                                  alt=""
                                  height="251px"
                                  width="426px"
                                />
                              </ReviewItemPics>
                            )}
                            <ReviewItemAmount>
                              {v.reviewsAccount}
                            </ReviewItemAmount>
                            <ReviewItemLikeComment>
                              <div className="like">
                                <BiLike /> <span>{v.like}</span>
                              </div>
                              <div className="comment">
                                <BiCommentDetail />
                                <span>{v.comment}</span>
                              </div>
                            </ReviewItemLikeComment>
                          </div>
                        )}
                      </ReviewItem>
                    );
                  })}
                </ReviewItemGroup>
                {/* 手機app */}
                <Image
                  src="/images/foodMenu/dowmload-pic.png"
                  alt=""
                  height="407px"
                  width="495px"
                ></Image>
              </Review>
            </ListContent>
          </Main>
        </Container>
      </Starbucks>
      <Localities />
      <Footer />
    </div>
  );
}

export default FoodMenu;
