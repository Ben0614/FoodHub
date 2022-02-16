import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { popularRestaurantData } from "../../data";
import { AiFillStar } from "react-icons/ai";
import {
  PopularRestaurantWrap,
  PopularRestaurantTitle,
  PopularRestaurantItemGroup,
  PopularRestaurantItem,
  SpecialPrice,
} from "./PopularRestaurantStyle";

function PopularRestaurant() {
  return (
    <PopularRestaurantWrap>
      <Container>
        <PopularRestaurantTitle>Popular Near You</PopularRestaurantTitle>
        <PopularRestaurantItemGroup>
          {popularRestaurantData.map((v, i) => {
            return (
              <Link href="/SearchRestaurant" key={i}>
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
                      <p className="price">${v.price}</p>
                      <p className="time">
                        • {v.category}, set menu • 15 - 20 min
                      </p>
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
