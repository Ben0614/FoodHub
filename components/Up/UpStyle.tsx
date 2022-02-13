import styled from "styled-components";

export const UpWrap = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  background-color: #d23f57;
  border-radius: 50%;
  z-index: 100;
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: ${(props) => props.theme.fz(5) + "px"};
    cursor: pointer;
  }
`;
