import styled from "styled-components";

export const Cross = styled.div`
  text-align: right;
  margin-bottom: ${(props) => props.theme.mg(4)};
  cursor: pointer;
`;
export const ItemGroup = styled.ul`
  text-align: left;
  margin-left: 25%;
`;
export const Item = styled.li`
  > h3 {
    margin-bottom: ${(props) => props.theme.mg(3)};
    font-weight: 700;
  }
  > div {
    margin-bottom: ${(props) => props.theme.mg(4)};
    > input {
    }
    > span {
      color: #999;
      margin-left: ${(props) => props.theme.mg(1)};
    }
  }
`;
export const ItemCost = styled(Item)`
  .costs {
    display: flex;
    margin-bottom: ${(props) => props.theme.mg(3)};
    .cost {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #d23f57;
      width: 32px;
      height: 32px;
      color: #fff;
      /* 切出形狀 */
      border-radius: 50% 50% 0;
      /* 轉正 */
      transform: rotate(45deg);
      margin-left: ${(props) => props.theme.mg(4)};

      span {
        position: relative;
        /* 字會受到父層的影響 把字轉正 */
        transform: rotate(-45deg);
        /* 點 */
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
