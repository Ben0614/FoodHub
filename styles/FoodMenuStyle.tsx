import styled from "styled-components";

interface Props {
  index?: number;
  activeInput?: boolean;
  // list狀態
  isOpen?: boolean;
  listChange?: number;
}

export const Starbucks = styled.div``;
export const PicGroup = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: ${(props) => props.theme.mg(6)};
  /* 桌機 */
  ${(props) => props.theme.screens.xl} {
    /* 每行四條 */
    /* 第一張圖占2個位置 總共4個 */
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
export const Pic = styled.div<Props>`
  position: relative;
  width: 100%;
  /* 1 / 3 占滿3條線 (2列有3條線) */
  /* 第一張圖佔滿3條線 */
  grid-column: ${(props) => (props.index === 0 ? "1 / 3" : "")};
  height: ${(props) => (props.index === 0 ? "40vh" : "31vh")};
  /* 桌機 */
  ${(props) => props.theme.screens.lg} {
    height: ${(props) => (props.index === 0 ? "60vh" : "45vh")};
  }
  ${(props) => props.theme.screens.xl} {
    /* 橫排 */
    grid-row: ${(props) => (props.index === 0 ? "1 / 3" : "")};
    /* 小圖示大圖的一半-5px (gap) */
    height: ${(props) => (props.index === 0 ? "66vh" : "calc(33vh - 5px)")};
  }
`;
export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${(props) => props.theme.mg(5)};
`;
export const Title = styled.h2`
  font-size: ${(props) => props.theme.fz(5) + "px"};
  font-weight: 700;
`;
export const Star = styled.div`
  display: flex;
  svg {
    color: #fbc02d;
  }
  p {
    span {
      color: #999;
    }
  }
`;
export const Info = styled.div`
  color: #999;
  .map {
    color: #000;
    text-decoration: underline;
  }
  .open-time {
    color: #d23f57;
    margin-left: ${(props) => props.theme.mg(1)};
  }
  p:nth-child(2) {
    display: block;
  }
  p {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fz(1) + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz(1)) + "px"};
    margin-bottom: ${(props) => props.theme.mg(5)};
    span {
      margin-left: ${(props) => props.theme.mg(1)};
    }
  }
`;
export const Main = styled.div`
  /* 隱藏未顯示的List區域 */
  overflow: hidden;
`;
export const ListButtons = styled.ul`
  display: grid;
  column-gap: 5px;
  text-align: center;
  margin-bottom: ${(props) => props.theme.mg(6)};
  grid-template-columns: repeat(3, minmax(0, 1fr));
  /* 桌機 */
  ${(props) => props.theme.screens.lg} {
    width: 350px;
  }
`;
export const ButtonsLi = styled.li<Props>`
  padding: ${(props) => props.theme.pd(3)} 0;
  transition: 0.3s;
  /* 根據isOpen改變顏色 true or false*/
  color: ${(props) => (props.isOpen ? "#d23f57" : "#999")};
  border-bottom: ${(props) =>
    props.isOpen ? "2px solid #d23f57" : "2px solid transparent"};
  background-color: ${(props) => (props.isOpen ? "#fae8eb" : "transparent")};
  cursor: pointer;
`;
export const ListContent = styled.div<Props>`
  display: flex;
  transition: 0.3s;
  /* 根據listChange 判斷顯示哪一個區域 */
  transform: ${(props) =>
    props.listChange === 0
      ? "translateX(0)"
      : props.listChange === 1
      ? "translateX(-100%)"
      : "translateX(-200%)"};
`;

export const Recommend = styled.div<Props>`
  width: 100%;
  flex-shrink: 0;
  /* 三個區域高度不同 未顯示時高度縮到最小隱藏 */
  height: ${(props) => (props.listChange !== 0 ? "0" : "auto")};
  overflow: hidden;
  /* 桌機 */
  ${(props) => props.theme.screens.lg} {
    display: flex;
    justify-content: space-between;
  }
`;
export const CategoriesButton = styled.button`
  margin-bottom: ${(props) => props.theme.mg(5)};
  background-color: #d23f57;
  color: #fff;
  border: 1px solid #d23f57;
  border-radius: 3px;
  padding: ${(props) => props.theme.pd(2)};
  cursor: pointer;
  span {
    margin-left: ${(props) => props.theme.mg(2)};
  }
  /* 桌機 */
  ${(props) => props.theme.screens.lg} {
    display: none;
  }
`;
export const MenuGroup = styled.ul`
  display: none;
  /* 桌機 */
  ${(props) => props.theme.screens.lg} {
    display: block;
    width: 30%;
    border-right: 1px solid #ccc;
  }
`;
export const MenuItem = styled.li`
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
  /* 第一個持續顯示 */
  &:nth-child(1) {
    color: #000;
    border-right: 3px solid #d23f57;
  }
`;

export const RecommendMain = styled.div`
  ${(props) => props.theme.screens.lg} {
    width: 65%;
  }
`;
export const RecommendTitle = styled.h2`
  margin-bottom: ${(props) => props.theme.mg(6)};
  font-size: ${(props) => props.theme.fz(2) + "px"};
  font-weight: 700;
`;
export const RecommendItemGroup = styled.ul``;
export const RecommendItem = styled.li`
  margin-bottom: ${(props) => props.theme.mg(5)};
  text-align: center;
  .pic {
    border-radius:5px;
    overflow: hidden;
    margin-bottom: ${(props) => props.theme.mg(1)};
  }
  .title,
  .meal-content,
  a {
    margin-bottom: ${(props) => props.theme.mg(3)};
  }
  .title {
    font-weight: 700;
  }
  a {
    display: inline-block;
    background: #f5f5f5;
    padding: ${(props) => props.theme.pd()} ${(props) => props.theme.pd(2)};
    font-size: ${(props) => props.theme.fz() + "px"};
    border-radius: 10px;
    color: #999;
  }

  .price {
    margin-bottom: ${(props) => props.theme.mg(3)};
    font-size: ${(props) => props.theme.fz() + "px"};
    span:nth-child(1) {
      text-decoration: line-through;
      color: #999;
    }
    span:nth-child(2),
    span:nth-child(3) {
      margin-left: ${(props) => props.theme.mg(2)};
      color: #999;
    }
    span:nth-child(3) {
      color: #e94460;
    }
  }
  ${(props) => props.theme.screens.lg} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    /* 桌機時使用 */
    .left {
      display: flex;
      align-items: center;
    }
    .text-content {
      margin-left: ${(props) => props.theme.mg(3)};
    }
  }
`;
export const RecommendStar = styled(Star)`
  justify-content: center;
  margin-bottom: ${(props) => props.theme.mg(3)};
  ${(props) => props.theme.screens.lg} {
    justify-content: left;
  }
`;
export const AddButton = styled.button`
  display: inline-block;
  width: 90px;
  height: 35px;
  color: #e94460;
  border: 1px solid #e94460;
  border-radius: 3px;
  background-color: #fff;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: rgba(0,0,0,.1);
  }
  span {
  }
  svg {
    margin-left: ${(props) => props.theme.mg(2)};
  }
`;
export const Book = styled.div<Props>`
  /* 三個區域高度不同 未顯示時高度縮到最小隱藏 */
  height: ${(props) => (props.listChange !== 1 ? "0" : "auto")};
  overflow: hidden;
  width: 100%;
  flex-shrink: 0;
  #date,
  #number {
    width: 100%;
    padding: ${(props) => props.theme.pd(2)} ${(props) => props.theme.pd()};
    margin-bottom: ${(props) => props.theme.mg(5)};
  }
  .form-input {
    height: 37px;
    position: relative;
    margin-bottom: ${(props) => props.theme.mg(5)};
  }
  .input-area {
    padding: 0 ${(props) => props.theme.pd(1)};
  }

  ${(props) => props.theme.screens.lg} {
    display: flex;
    align-items: flex-start;
    .input-area {
      width: 50%;
      display: grid;
      column-gap: 25px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding: ${(props) => props.theme.pd()};
    }
  }
`;
export const SelectDate = styled.div<Props>`
  height: 37px;
  position: relative;
  margin-bottom: ${(props) => props.theme.mg(5)};
  /* select 三角形箭頭 */
  &::after {
    position: absolute;
    content: "◢";
    top: 5px;
    right: 10px;
    transform: rotate(45deg);
    /* 根據activeInput判斷 聚焦時為#e94461 */
    color: ${(props) => (props.activeInput ? "#e94461" : "#000")};
  }
`;
export const SelectGuests = styled(SelectDate)<Props>``;
export const BookInputLabel = styled.label<Props>`
  position: absolute;
  /* 根據activeInput判斷 聚焦時為0% */
  top: ${(props) => (props.activeInput ? "0%" : "50%")};
  /* 根據activeInput判斷 聚焦時為12px */
  font-size: ${(props) => (props.activeInput ? "12px" : "16px")};
  left: ${(props) => props.theme.pd(1)};
  transform: translateY(-50%);
  transition: 0.3s;
  /* 根據activeInput判斷 聚焦時為#e94461 */
  color: ${(props) => (props.activeInput ? "#e94460" : "#000")};
  /* 根據activeInput判斷 聚焦時為1 */
  z-index: ${(props) => (props.activeInput ? "1" : "-1")};
  background: #fff;
  padding: 0 5px;
`;
export const BookInput = styled.input<Props>`
  width: 100%;
  padding: ${(props) => props.theme.pd(2)} ${(props) => props.theme.pd(1)};
  border-radius: 3px;
  /* 根據activeInput判斷 聚焦時為none */
  border: ${(props) => (props.activeInput ? "none" : "1px solid #000")};
  /* 根據activeInput判斷 聚焦時為2px solid #e94460 */
  outline: ${(props) => (props.activeInput ? "2px solid #e94460" : "none")};
  /* 無背景色 */
  background-color: transparent;
`;
export const BookSelectLabel = styled(BookInputLabel)<Props>`
  top: ${(props) => (props.activeInput ? "0%" : "50%")};
  font-size: ${(props) => (props.activeInput ? "12px" : "16px")};
  left: ${(props) => props.theme.pd(1)};
  transition: 0.3s;
  color: ${(props) => (props.activeInput ? "#e94460" : "#000")};
  z-index: ${(props) => (props.activeInput ? "1" : "-1")};
`;
export const BookSelect = styled.select<Props>`
  /*將預設的select選擇框樣式清除*/
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  padding: ${(props) => props.theme.pd(2)} ${(props) => props.theme.pd(1)};
  border-radius: 3px;
  border: ${(props) => (props.activeInput ? "none" : "1px solid #000")};
  outline: ${(props) => (props.activeInput ? "2px solid #e94460" : "none")};
  background-color: transparent;
  &:focus {
    border: none;
    outline: 2px solid #e94460;
  }
  /* 隱藏空白option */
  option:nth-child(1) {
    display: none;
  }
`;
export const BookButton = styled(CategoriesButton)<Props>`
  padding: ${(props) => props.theme.pd(2)} ${(props) => props.theme.pd(4)};
  font-size: ${(props) => props.theme.fz(1) + "px"};
  cursor: pointer;
  ${(props) => props.theme.screens.lg} {
    display: block;
    width: 100px;
  }
`;
export const Review = styled.div<Props>`
  width: 100%;
  flex-shrink: 0;
  /* 三個區域高度不同 未顯示時高度縮到最小隱藏 */
  height: ${(props) => (props.listChange !== 2 ? "0" : "auto")};
  overflow: hidden;
  ${(props) => props.theme.screens.lg} {
    display: flex;
    align-items: flex-start;
  }
`;
export const ReviewItemGroup = styled.ul<Props>`
  ${(props) => props.theme.screens.lg} {
    width: 50%;
  }
`;
export const ReviewItem = styled.li<Props>`
  padding-bottom: ${(props) => props.theme.pd(4)};
  margin-bottom: ${(props) => props.theme.mg(4)};
  border-bottom: 1px solid #ccc;
  .head-host {
    border-radius: 50%;
  }
`;
export const ReviewItemInfo = styled.div<Props>`
  display: flex;
  align-items: center;
  margin-bottom: ${(props) => props.theme.mg(3)};
`;
export const ReviewItemText = styled.div<Props>`
  margin-left: ${(props) => props.theme.mg(3)};
  h3 {
    font-weight: 700;
    margin-bottom: ${(props) => props.theme.mg(1)};
  }
  p {
    color: #999;
  }
`;
export const ReviewItemStar = styled(Star)<Props>`
  align-items: center;
  margin-bottom: ${(props) => props.theme.mg(2)};
  span:nth-child(6),
  span:nth-child(7) {
    font-size: ${(props) => props.theme.fz() + "px"};
    margin-left: ${(props) => props.theme.mg(3)};
  }
  span:nth-child(6) {
    font-weight: 700;
  }
  span:nth-child(7) {
    color: #999;
  }
`;
export const ReviewItemContent = styled.p<Props>`
  line-height: ${(props) => props.theme.lh(props.theme.fz(2)) + "px"};
  margin-bottom: ${(props) => props.theme.mg(2)};
  color: #999;
`;
export const ReviewItemPics = styled.div<Props>`
  display: grid;
  column-gap: 10px;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin-bottom: ${(props) => props.theme.mg(4)};
`;
export const ReviewItemAmount = styled.p<Props>`
  color: #999;
  margin-bottom: ${(props) => props.theme.mg(4)};
`;
export const ReviewItemLikeComment = styled.div<Props>`
  display: flex;
  color: #999;
  .like,
  .comment {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: ${(props) => props.theme.mg(1)};
    }
  }
  .comment {
    margin-left: ${(props) => props.theme.mg(5)};
  }
`;
