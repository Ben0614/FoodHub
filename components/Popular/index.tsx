import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

import {
  PopularWrap,
  PopularTitle,
  PopularItemGroup,
  PopularItem,
  SpecialPrice
} from "./PopularStyle";

const PopularData = [
  { title: "Starbucks", pic: "/images/homePage/popular/1.jpg" },
  {
    title: "Mughal Masala Masala Masala Masala",
    pic: "/images/homePage/popular/2.jpg",
  },
  { title: "Woondal", pic: "/images/homePage/popular/3.jpg" },
  { title: "Red Chillies", pic: "/images/homePage/popular/4.jpg" },
  { title: "Starbucks", pic: "/images/homePage/popular/5.jpg" },
  { title: "Mughal Masala", pic: "/images/homePage/popular/6.jpg" },
  { title: "Woondal", pic: "/images/homePage/popular/7.jpg" },
  { title: "Red Chillies", pic: "/images/homePage/popular/8.jpg" },
];

function Popular() {
  return (
    <PopularWrap>
      <Container>
        <PopularTitle>Popular Near You</PopularTitle>
        <PopularItemGroup>
          {PopularData.map((v, i) => {
            return (
              <Link href="/FoodMenu" key={i}>
                <a>
                  <PopularItem>
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
                  </PopularItem>
                </a>
              </Link>
            );
          })}
        </PopularItemGroup>
      </Container>
    </PopularWrap>
  );
}

export default Popular;
