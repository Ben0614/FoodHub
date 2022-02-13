import styled from "styled-components";

interface Props {
  navbarIsOpen?: boolean;
  isShowList?: boolean;
}

export const NavbarWrap = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 90%;
  height: 100vh;
  z-index: 9999;
  transform: ${(props) =>
    props.navbarIsOpen ? "translateX(0)" : "translateX(-100%)"};
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
  color: #000;
  margin-bottom: ${(props) => props.theme.mg(4)};
  h2 {
    margin-left: ${(props) => props.theme.mg(1)};
    font-size: ${(props) => props.theme.fz(1) + "px"};
    font-weight: 700;
  }
  svg {
    cursor: pointer;
  }
`;
export const Dashboards = styled.div`
  padding: 0 ${(props) => props.theme.pd(3)};
`;
export const Title = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.isShowList ? "#d23f57" : "#aaa")};
  margin-bottom: ${(props) => props.theme.mg(4)};
  font-size: ${(props) => props.theme.fz() + "px"};
  h3 {
    width: 60%;
  }
  svg {
    font-size: ${(props) => props.theme.fz(2) + "px"};
  }
`;
export const TitleArrow = styled.div<Props>`
  transform: ${(props) => (props.isShowList ? "rotate(-180deg)" : "rotate(0)")};
  transition: 0.3s;
`;
export const Restaurant = styled(Dashboards)``;
export const ItemGroup = styled.div<Props>`
  margin-bottom: ${(props) => props.theme.mg(4)};
  transition: 0.3s;
  overflow: hidden;
  height: 0;
`;
export const Item = styled.p`
  width: 80%;
  font-size: ${(props) => props.theme.fz() + "px"};
  margin: 0 0 ${(props) => props.theme.mg(3)} auto;
  color: #aaa;
  cursor: pointer;
`;
