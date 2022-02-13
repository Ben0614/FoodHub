import styled from "styled-components";

export const DeliverRestaurantsWrap = styled.div``;
export const DeliverRestaurantsTitle = styled.h2`
  font-size: ${(props) => props.theme.fz(2) + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz(2)) + "px"};
  font-weight: 500;
  margin-bottom: ${(props) => props.theme.mg(2)};
`;
export const DeliverRestaurantsItemGroup = styled.div`
  /* 桌機用grid排列 */
  ${(props) => props.theme.screens.lg} {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  ${(props) => props.theme.screens.xl} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
export const DeliverRestaurantsItem = styled.div`
  position: relative;
  border-radius: 10px;
  border: 1px solid #ccc;
  overflow: hidden;
  margin-bottom: ${(props) => props.theme.mg(5)};
  /* 桌機mb改為0 讓gap分隔 */
  ${(props) => props.theme.screens.lg} {
    margin-bottom: 0;
  }
  /* 文字區域 */
  .top,
  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => props.theme.pd(2)} ${(props) => props.theme.pd(3)};
  }
  .top {
    .star {
      display: flex;
      align-items: center;
      svg {
        color: #fbc02d;
      }
      span {
        font-weight: 700;
        margin: ${(props) => props.theme.mg(1)};
      }
    }
  }
  .bottom {
    justify-content: left;
    .price {
      font-weight: 700;
      color: #e94460;
    }
    .time {
      margin-left: ${(props) => props.theme.mg(2)};
      color: #999;
    }
  }
  .title {
    /* 一行顯示 超過隱藏 */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    font-size: ${(props) => props.theme.fz(2) + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz(2)) + "px"};
    color: #000;
  }
`;
// 特惠價
export const SpecialPrice = styled.span`
  position: absolute;
  top: 5%;
  left: 0;
  border-radius: 0 50px 50px 0;
  background-color: #d23f57;
  color: #fff;
  padding: ${(props) => props.theme.pd(2)};
  z-index: 50;
`;
