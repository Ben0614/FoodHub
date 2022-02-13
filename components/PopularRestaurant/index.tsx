import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

import {
  PopularRestaurantWrap,
  PopularRestaurantTitle,
  PopularRestaurantItemGroup,
  PopularRestaurantItem,
  SpecialPrice,
} from "./PopularRestaurantStyle";

// 渲染資料
const PopularRestaurantData = [
  { title: "Starbucks", pic: "/images/homePage/popularRestaurant/1.jpg" },
  {
    title: "Mughal Masala Masala Masala Masala",
    pic: "/images/homePage/popularRestaurant/2.jpg",
  },
  { title: "Woondal", pic: "/images/homePage/popularRestaurant/3.jpg" },
  { title: "Red Chillies", pic: "/images/homePage/popularRestaurant/4.jpg" },
  { title: "Starbucks", pic: "/images/homePage/popularRestaurant/5.jpg" },
  { title: "Mughal Masala", pic: "/images/homePage/popularRestaurant/6.jpg" },
  { title: "Woondal", pic: "/images/homePage/popularRestaurant/7.jpg" },
  { title: "Red Chillies", pic: "/images/homePage/popularRestaurant/8.jpg" },
];

function PopularRestaurant() {
  return (
    <PopularRestaurantWrap>
      <Container>
        <PopularRestaurantTitle>Popular Near You</PopularRestaurantTitle>
        <PopularRestaurantItemGroup>
          {PopularRestaurantData.map((v, i) => {
            return (
              <Link href="/FoodMenu" key={i}>
                <a>
                  {/* index 2 5 6 沒有特惠價 */}
                  <PopularRestaurantItem>
                    {i === 2 ? (
                      ""
                    ) : i === 5 ? (
                      ""
                    ) : i === 6 ? (
                      ""
                    ) : (
                      <SpecialPrice>Flat 30% Off</SpecialPrice>
                    )}
                    <Image
                      src={v.pic}
                      alt=""
                      height="500px"
                      width="740px"
                      objectFit="cover"
                    />
                    {/* 文字區域 */}
                    <div className="top">
                      <h3 className="title">{v.title}</h3>
                      <p className="star">
                        <AiFillStar />
                        <span>4.5</span> /5
                      </p>
                    </div>
                    <div className="bottom">
                      <p className="price">$20</p>
                      <p className="time">• Cofee, set menu • 15 - 20 min</p>
                    </div>
                  </PopularRestaurantItem>
                </a>
              </Link>
            );
          })}
        </PopularRestaurantItemGroup>
      </Container>
    </PopularRestaurantWrap>
  );
}

export default PopularRestaurant;
