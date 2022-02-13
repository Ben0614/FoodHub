import styled from "styled-components";

export const Cross = styled.div`
  text-align: right;
  margin-bottom: ${(props) => props.theme.mg(6)};
`;
export const ItemGroup = styled.ul`
  text-align: left;
  margin-left: 25%;
`;
export const Item = styled.li`
  margin-bottom: ${(props) => props.theme.mg(5)};
  line-height: ${(props) => props.theme.lh(props.theme.fz(1)) + "px"};
  transition: 0.3s;
  color: #aaa;
  &:hover {
    color: #000;
    border-right: 3px solid #d23f57;
  }
  &:nth-child(1) {
    color: #000;
    border-right: 3px solid #d23f57;
  }
`;
