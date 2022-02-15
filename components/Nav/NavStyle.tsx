import styled from "styled-components";

interface Props {
  isShow?: boolean;
  firstHeight?: boolean;
}

export const NavHeight = styled.div<Props>`
  // true就給高度 false就給0
  height: ${(props) => (props.firstHeight ? "70px" : "0")};
`;

export const NavWrap = styled.div<Props>`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 999;
  padding: ${(props) => props.theme.pd()} ${(props) => props.theme.pd(6)};
  transform: ${(props) => (props.isShow ? "0" : "translateY(-100%)")};
  transition: 0.3s;
`;
export const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;
export const Search = styled.div`
  display: none;
  align-items: center;
  flex-wrap: wrap;
  width: 55%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #000;
  margin-left: ${(props) => props.theme.mg(6)};
  svg {
    cursor: pointer;
    color: #757575;
  }
  h4,
  input,
  div {
    padding: ${(props) => props.theme.pd(2)};
  }
  h4 {
    width: 30%;
    display: flex;
    align-items: center;
    span {
      margin-left: ${(props) => props.theme.mg(1)};
    }
  }
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10%;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      background-color: #ccc;
    }
  }
  input {
    width: 55%;
    border: none;
    &:focus {
      outline: none;
    }
  }
  ${(props) => props.theme.screens.lg} {
    display: flex;
    h4 {
      width: 30%;
    }
    > div {
      width: 10%;
    }
    input {
      width: 55%;
    }
  }
  ${(props) => props.theme.screens.xl} {
    h4 {
      width: 20%;
    }
    > div {
      width: 10%;
    }
    input {
      width: 60%;
    }
  }
  ${(props) => props.theme.screens.twoXl} {
    h4 {
      width: 20%;
    }
    > div {
      width: 5%;
    }
    input {
      width: 70%;
    }
  }
`;
export const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 45%;
  font-size: 25px;
  > svg {
    cursor: pointer;
  }
  ${(props) => props.theme.screens.lg} {
    width: 25%;
    .user {
      span {
        display: block;
      }
    }
  }
  ${(props) => props.theme.screens.xl} {
    width: 20%;
  }
  ${(props) => props.theme.screens.twoXl} {
    width: 15%;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    display: none;
    margin-left: ${(props) => props.theme.mg(2)};
    font-size: ${(props) => props.theme.fz(1) + "px"};
  }
  ${(props) => props.theme.screens.lg} {
    span {
      display: block;
    }
  }
`;

export const Cart = styled.div`
  font-size: 16px;
  cursor: pointer;
`;
