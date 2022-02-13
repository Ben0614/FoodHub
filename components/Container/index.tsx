import styled from "styled-components";

/* 直接引用變數和函式 */
const Container = styled.div`
  width: ${(props) => props.theme.container.md};
  max-width: 100%;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.pd(3)};
  ${(props) => props.theme.screens.lg} {
    width: ${(props) => props.theme.container.lg};
  }
  ${(props) => props.theme.screens.xl} {
    width: ${(props) => props.theme.container.xl};
  }
  ${(props) => props.theme.screens.twoXl} {
    width: ${(props) => props.theme.container.twoXl};
  }
`;

export default Container;
