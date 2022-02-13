import styled from "styled-components";

interface Props {
  index?: number;
  activeInput?: boolean;
  buttonChange?: boolean;
}

export const Buttons = styled.div`
  margin-bottom: ${(props) => props.theme.mg(5)};
  ${(props) => props.theme.screens.lg} {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export const ListButtons = styled.ul`
  margin-bottom: ${(props) => props.theme.mg(5)};
  display: grid;
  column-gap: 5px;
  text-align: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  ${(props) => props.theme.screens.lg} {
    width: 300px;
  }
`;
export const ButtonsLi = styled.li<Props>`
  padding: ${(props) => props.theme.pd(3)} 0;
  transition: 0.3s;
  color: ${(props) => (props.buttonChange ? "#d23f57" : "#999")};
  border-bottom: ${(props) =>
    props.buttonChange ? "2px solid #d23f57" : "2px solid transparent"};
  background-color: ${(props) =>
    props.buttonChange ? "#fae8eb" : "transparent"};
  cursor: pointer;
`;
export const FilterButton = styled.button<Props>`
  background-color: #d23f57;
  border: 1px solid #d23f57;
  border-radius: 3px;
  color: #fff;
  font-size: ${(props) => props.theme.fz() + "px"};
  cursor: pointer;

  padding: ${(props) => props.theme.pd(2)} ${(props) => props.theme.pd(4)};
`;
export const CategoriesButton = styled.button`
  display: block;
  margin-bottom: ${(props) => props.theme.mg(5)};
  background-color: #d23f57;
  color: #fff;
  border: 1px solid #d23f57;
  border-radius: 3px;
  padding: ${(props) => props.theme.pd(2)};
  cursor: pointer;
  span {
    margin-left: ${(props) => props.theme.mg(2)};
  }
  ${(props) => props.theme.screens.lg} {
    display: none;
  }
`;

export const Main = styled.div<Props>`
  display: flex;
`;
export const SearchArea = styled.div`
  display: none;
  ${(props) => props.theme.screens.lg} {
    display: block;
    width: 30%;
    border-right: 1px solid #ccc;
    padding-right: ${(props) => props.theme.pd(2)};
  }
  ${(props) => props.theme.screens.xl} {
    width: 20%;
  }
`;
export const Condition = styled.div<Props>``;
export const ItemGroup = styled.ul<Props>``;

export const Item = styled.li<Props>`
  > h3 {
    margin-bottom: ${(props) => props.theme.mg(4)};
    font-weight: 700;
  }
  > div {
    margin-bottom: ${(props) => props.theme.mg(2)};
    > input {
    }
    > span {
      color: #999;
    }
  }
`;
export const ItemCost = styled(Item)<Props>`
  .costs {
    display: flex;
    margin-bottom: ${(props) => props.theme.mg(3)};
    .cost {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      /* 20 40 圓形 */
      background-color: #d23f57;
      width: 32px;
      height: 32px;
      color: #fff;
      border-radius: 50% 50% 0;
      /* border-radius 之後要轉正 */
      transform: rotate(45deg);
      margin-left: ${(props) => props.theme.mg(4)};

      span {
        /* 會受到父層影響 要轉正 */
        transform: rotate(-45deg);
        /* 製作獻上小圓點 */
        &::after {
          content: "";
          position: absolute;
          bottom: -175%;
          left: 50%;
          transform: translateX(-50%);
          background-color: #d23f57;
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      }
    }
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: #d23f57;
  }
`;
