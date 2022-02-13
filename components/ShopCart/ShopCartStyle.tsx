import styled from "styled-components";

interface Props {
  cartIsOpen?: boolean;
}

export const ShopCartWrap = styled.div<Props>`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #fff;
  width: 85%;
  height: 100vh;
  z-index: 9999;
  transform: ${(props) =>
    props.cartIsOpen ? "translateX(0)" : "translateX(100%)"};
  transition: 0.3s;
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
    color: #aaa;
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
  margin-bottom: ${(props) => props.theme.mg(8)};
  color: #000;
  svg {
    cursor: pointer;
    color: #aaa;
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
  button {
    position: relative;
    background-color: #fff;
    border: 1px solid #d23f57;
    border-radius: 50%;
    width: 28px;
    height: 28px;
    font-size: ${(props) => props.theme.fz(1) + "px"};
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
    color: #aaa;
    margin-bottom: ${(props) => props.theme.mg()};
  }
`;
export const Content = styled.div`
  display: flex;
  .text {
    margin-left: ${(props) => props.theme.mg(2)};
    .title {
      width: 120px;
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
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
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
