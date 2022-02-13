import styled from "styled-components";

export const LocalitiesWrap = styled.div`
  padding: ${(props) => props.theme.pd(14)} 0;
  p {
    color: #ccc;
    font-size: 14px;
    line-height: ${(props) => props.theme.lh(14) + "px"};
  }
`;
export const LocalitiesTitle = styled.h2`
  font-size: ${(props) => props.theme.fz(5) + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz(5)) + "px"};
  margin-bottom: ${(props) => props.theme.mg(4)};
`;
export const LocalitiesItemGroup = styled.div`
  margin-bottom: ${(props) => props.theme.mg(12)};
`;
export const ComputerGrid = styled.div`
  ${(props) => props.theme.screens.lg} {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  ${(props) => props.theme.screens.xl} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const LocalitiesItem = styled.div`
  h3 {
    margin-bottom: ${(props) => props.theme.mg(4)};
  }
  span {
    color: #ccc;
    margin-left: ${(props) => props.theme.mg(1)};
  }
`;
