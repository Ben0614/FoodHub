import styled from "styled-components";

export const FooterWrap = styled.header`
  background-color: #f6f9fc;
  padding: 35px 0 70px;

  ${(props) => props.theme.screens.lg} {
    .introduction {
      width: 30%;
    }
  }
`;

export const Download = styled.div`
  > p {
    margin-bottom: ${(props) => props.theme.mg(3)};
  }
  .load-point {
    display: flex;
    .app-store {
      margin-left: ${(props) => props.theme.mg(3)};
    }
  }
`;
export const ComputerFlex = styled.div`
  ${(props) => props.theme.screens.lg} {
    display: flex;
    justify-content: space-between;
  }
`;
export const ItemGroup = styled.ul`
  ${(props) => props.theme.screens.lg} {
    width: 65%;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${(props) => props.theme.screens.xl} {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;
export const Item = styled.li`
  margin-bottom: ${(props) => props.theme.mg(5)};
  p {
    font-size: ${(props) => props.theme.fz(1) + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz(1)) + "px"};
    margin-bottom: ${(props) => props.theme.mg(2)};
    color: #aaa;
  }
`;
export const ItemTitle = styled.h2`
  font-size: ${(props) => props.theme.fz(5) + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz(5)) + "px"};
  margin-bottom: ${(props) => props.theme.mg(2)};
`;

export const Sns = styled.div`
  display: flex;
  ${(props) => props.theme.screens.lg} {
    justify-content: flex-end;
    margin-right: 46%;
  }
  ${(props) => props.theme.screens.xl} {
    margin-right: 70px;
  }
  .link {
    position: relative;
    width: 30px;
    height: 30px;
    margin-left: ${(props) => props.theme.mg(2)};
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      opacity: 0.9;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0f345f;
      border-radius: 50%;
    }
    svg {
      position: absolute;
      font-size: ${(props) => props.theme.fz(1) + "px"};
      color: #fff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 50;
    }
  }
  .link:nth-child(1) {
    margin-left: 0;
  }
`;
