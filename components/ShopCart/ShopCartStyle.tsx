import styled from "styled-components";

interface Props {
  cartIsOpen?: boolean;
}

export const ShopCartWrap = styled.div<Props>`
  /* flex 為了讓結帳按鈕可以保持在底部 */
  /* 按鈕的css要設定margin-top: auto */
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  border-left: 1px solid #ccc;
  /* 使用滾軸 */
  max-height: 100vh;
  overflow-y: auto;
  width: 85%;
  height: 100vh;
  z-index: 9999;
  /* 根據狀態判斷位置 開啟或關閉 */
  transform: ${(props) =>
    props.cartIsOpen ? "translateX(0)" : "translateX(100%)"};
  transition: 0.3s;
  /* 桌機 */
  ${(props) => props.theme.screens.lg} {
    width: 350px;
  }
`;
export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.pd(4)};
  border-bottom: 1px solid #ccc;
  .total {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fz(1) + "px"};
    color: #999;
    font-weight: 700;
    span {
      margin-left: ${(props) => props.theme.mg(1)};
    }
  }
  > svg {
    cursor: pointer;
    color: #d23f57;
  }
`;
export const ItemGroup = styled.div`
  padding: ${(props) => props.theme.pd(3)};
`;
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: ${(props) => props.theme.mg(8)};
  color: #000;
  /* X */
  svg {
    cursor: pointer;
    color: #999;
  }
`;
export const Pic = styled.div`
  overflow: hidden;
  border-radius: 10px;
`;
export const Number = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* + - 按鈕 */
  button {
    position: relative;
    background-color: #fff;
    border: 1px solid #d23f57;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    font-size: ${(props) => props.theme.fz(1) + "px"};
    cursor: pointer;
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #d23f57;
    }
  }
  button:nth-child(1) {
    margin-bottom: ${(props) => props.theme.mg()};
  }
  span {
    color: #999;
    margin-bottom: ${(props) => props.theme.mg()};
  }
`;
export const Content = styled.div`
  display: flex;
  .text {
    /* 與圖片間隔 */
    margin-left: ${(props) => props.theme.mg(2)};
    .title {
      width: 120px;
      /* 一行顯示 隱藏超出 */
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: ${(props) => props.theme.fz(1) + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz(1)) + "px"};
    }
    p:nth-child(2) {
      font-size: ${(props) => props.theme.fz() + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
    }
    p:nth-child(3) {
      font-size: ${(props) => props.theme.fz(1) + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz(1)) + "px"};
      color: #d23f57;
      font-weight: 700;
    }
  }
`;

export const Accounts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* margin-top: auto 為了讓結帳按鈕可以保持在底部 */
  margin-top: auto;
  padding: 0 ${(props) => props.theme.pd(3)};
`;
export const AccountsButton = styled.button`
  overflow: hidden;
  background-color: #d23f57;
  border: 1px solid #d23f57;
  border-radius: 5px;
  padding: ${(props) => props.theme.pd(2)} 0;
  margin-bottom: ${(props) => props.theme.mg(2)};
  color: #fff;
  font-weight: 700;
  cursor: pointer;
`;
export const ViewButton = styled(AccountsButton)`
  background-color: #fff;
  color: #d23f57;
  cursor: pointer;
`;
