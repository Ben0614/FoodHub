import styled from "styled-components";

export const BreadcrumbWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fz() + "px"};
  margin: ${(props) => props.theme.mg(5)} 0;
  svg {
    margin-left: ${(props) => props.theme.mg(2)};
  }
`;
export const Home = styled.p`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const NewYork = styled.p`
  display: flex;
  align-items: center;
  margin-left: ${(props) => props.theme.mg(2)};
  cursor: pointer;
`;
export const Now = styled.p`
  margin-left: ${(props) => props.theme.mg(2)};
  color: #999;
`;
