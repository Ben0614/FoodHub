import React from "react";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import { RestaurantObj } from "../../type";
import { AiFillStar } from "react-icons/ai";
import {
  DeliverRestaurantsWrap,
  DeliverRestaurantsTitle,
  DeliverRestaurantsItemGroup,
  DeliverRestaurantsItem,
  SpecialPrice,
} from "./DeliverRestaurantsStyle";

interface Props {
  displayRestaurantsList: Array<RestaurantObj>;
}

function DeliverRestaurants(props: Props) {
  return (
    <Container>
      <DeliverRestaurantsWrap>
        {/* 名稱 */}
        <DeliverRestaurantsTitle>
          184 Deliver Restaurants in New York
        </DeliverRestaurantsTitle>
        {/* item區域 */}
        <DeliverRestaurantsItemGroup>
          {props.displayRestaurantsList.map((v, i) => {
            return (
              <Link href="/FoodMenu" key={i}>
                <a>
                  {/* idnex 2 5 6 沒有特惠價 */}
                  <DeliverRestaurantsItem>
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
                      height="477px"
                      width="706px"
                      objectFit="cover"
                    />
                    <div className="top">
                      <h3 className="title">{v.title}</h3>
                      <p className="star">
                        <AiFillStar />
                        <span>{v.star}</span> /5
                      </p>
                    </div>
                    <div className="bottom">
                      <p className="price">${v.price}</p>
                      <p className="time">
                        • {v.category}, set menu • 15 - 20 min
                      </p>
                    </div>
                  </DeliverRestaurantsItem>
                </a>
              </Link>
            );
          })}
        </DeliverRestaurantsItemGroup>
      </DeliverRestaurantsWrap>
    </Container>
  );
}

export default DeliverRestaurants;
