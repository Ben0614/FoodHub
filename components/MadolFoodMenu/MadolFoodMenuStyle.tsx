import styled from "styled-components";

export const Cross = styled.div`
  text-align: right;
  margin-bottom: ${(props) => props.theme.mg(6)};
  cursor: pointer;
`;
export const ItemGroup = styled.ul`
  text-align: left;
  /* 靠右 */
  margin-left: 25%;
`;
export const Item = styled.li`
  margin-bottom: ${(props) => props.theme.mg(5)};
  line-height: ${(props) => props.theme.lh(props.theme.fz(1)) + "px"};
  transition: 0.3s color;
  color: #999;
  cursor: pointer;
  /* 觸碰時顯示右線 */
  &:hover {
    color: #000;
    border-right: 3px solid #d23f57;
  }
  /* 第一個保持顯示右線 */
  &:nth-child(1) {
    color: #000;
    border-right: 3px solid #d23f57;
  }
`;
