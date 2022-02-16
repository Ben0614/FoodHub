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
  border-right: 1px solid #ccc;
  width: 90%;
  /* 使用滾軸 */
  max-height: 100vh;
  overflow-y: auto;
  height: 100vh;
  z-index: 9999;
  /* 根據navbarIsOpen狀態判斷開啟或關閉 */
  transform: ${(props) =>
    props.navbarIsOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: 0.3s;
  /* 桌機 修改大小 */
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
    font-size: ${(props) => props.theme.fz(2) + "px"};
    font-weight: 700;
  }
  svg {
    font-size: ${(props) => props.theme.fz(1) + "px"};
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
  /* 根據isShowList狀態 判斷變色 */
  color: ${(props) => (props.isShowList ? "#d23f57" : "#999")};
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
  /* 根據isShowList狀態 判斷 位置 */
  transform: ${(props) => (props.isShowList ? "rotate(-180deg)" : "rotate(0)")};
  transition: 0.3s;
`;
export const Restaurant = styled(Dashboards)``;
export const ItemGroup = styled.div<Props>`
  margin-bottom: ${(props) => props.theme.mg(4)};
  transition: 0.3s;
  /* 預設高度為0 都不開啟 */
  /* 用hidden隱藏 */
  overflow: hidden;
  height: 0;
`;
export const Item = styled.p`
  width: 80%;
  font-size: ${(props) => props.theme.fz() + "px"};
  margin: 0 0 ${(props) => props.theme.mg(3)} auto;
  color: #999;
  cursor: pointer;
`;
