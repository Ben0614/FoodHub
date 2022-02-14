import React from "react";
import Container from "../Container";
import Link from "next/link";
import { localitiesData } from "../../data";
import {
  LocalitiesWrap,
  LocalitiesTitle,
  LocalitiesItemGroup,
  ComputerGrid,
  LocalitiesItem,
} from "./LocalitiesStyle";

// item數量
const localitiesItemGroupNumber: Array<number> = [];
for (let i = 1; i <= 4; i++) {
  localitiesItemGroupNumber.push(i);
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
          {localitiesItemGroupNumber.map((v) => {
            return (
              <LocalitiesItemGroup key={v}>
                {localitiesData.map((v, i) => {
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
