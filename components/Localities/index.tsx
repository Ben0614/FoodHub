import React from "react";
import Container from "../Container";
import Link from "next/link";
import {
  LocalitiesWrap,
  LocalitiesTitle,
  LocalitiesItemGroup,
  ComputerGrid,
  LocalitiesItem,
} from "./LocalitiesStyle";

// 渲染資料
const LocalitiesData = [
  { title: "Newport", number: "(26 places)" },
  { title: "Brooklyn", number: "(14 places)" },
  { title: "Chinatown", number: "(10 places)" },
  { title: "Chelsea ", number: "(20 places)" },
  { title: "Coney Island  ", number: "(6 places)" },
];
// item數量
const LocalitiesItemGroupNumber: Array<number> = [];
for (let i = 1; i <= 4; i++) {
  LocalitiesItemGroupNumber.push(i);
}
function Localities() {
  return (
    <LocalitiesWrap>
      <Container>
        <LocalitiesTitle>
          Popular Localities In & Around New York
        </LocalitiesTitle>
        {/* 桌機時起作用 */}
        <ComputerGrid>
          {LocalitiesItemGroupNumber.map((v) => {
            return (
              <LocalitiesItemGroup key={v}>
                {LocalitiesData.map((v, i) => {
                  return (
                    <Link href="/SearchRestaurant" key={i}>
                      <a>
                        <LocalitiesItem>
                          <h3>
                            {v.title}
                            <span>{v.number}</span>
                          </h3>
                        </LocalitiesItem>
                      </a>
                    </Link>
                  );
                })}
              </LocalitiesItemGroup>
            );
          })}
        </ComputerGrid>
      </Container>
    </LocalitiesWrap>
  );
}

export default Localities;
