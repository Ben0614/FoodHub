import styled from "styled-components";

interface Props {
  pic: string;
}

export const Category = styled.div`
  background-color: #f6f9fc;
  padding: ${(props) => props.theme.pd(12)} 0;
`;
// 桌機 grid
export const CategoryItemGroup = styled.div`
  ${(props) => props.theme.screens.lg} {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  ${(props) => props.theme.screens.xl} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;
export const CategoryItem = styled.div`
  border-radius: 10px;
  border: 1px solid #ccc;
  overflow: hidden;
  margin-bottom: ${(props) => props.theme.mg(5)};
  .title {
    text-align: center;
    padding: ${(props) => props.theme.pd(4)} 0;
    font-size: ${(props) => props.theme.fz(2) + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz(2)) + "px"};
    color: #000;
  }
  /* 桌機 不用mb 用gap */
  ${(props) => props.theme.screens.lg} {
    margin-bottom: 0;
  }
`;
export const Collections = styled.div`
  padding: ${(props) => props.theme.pd(14)} 0;
  p {
    color: #ccc;
    font-size: 14px;
    line-height: ${(props) => props.theme.lh(14) + "px"};
    margin-bottom: ${(props) => props.theme.mg()};
  }
`;
export const CollectionsTitle = styled.h2`
  font-size: ${(props) => props.theme.fz(5) + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz(5)) + "px"};
`;
// 桌機 flex
export const ComputerFlex = styled.div`
  ${(props) => props.theme.screens.lg} {
    display: flex;
    justify-content: space-between;
  }
`;
export const View = styled.h4`
  color: #e94460;
  margin-bottom: ${(props) => props.theme.mg(5)};
  cursor: pointer;
`;
export const CollectionsItemGroup = styled(CategoryItemGroup)``;
export const CollectionsItem = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* 餐廳背景圖 */
  background: url(${(props) => props.pic}) no-repeat;
  background-size: cover;
  width: 100%;
  height: 60vh;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: ${(props) => props.theme.mg(5)};
  padding: ${(props) => props.theme.pd(4)};
  color: #fff;
  ${(props) => props.theme.screens.lg} {
    margin-bottom: 0;
  }
  .title {
    font-size: ${(props) => props.theme.fz(1) + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz(1)) + "px"};
    font-weight: 700;
  }
  .place {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.theme.fz() + "px"};
    line-height: ${(props) => props.theme.lh(props.theme.fz()) + "px"};
  }
`;

export const Cuisine = styled.div`
  padding: ${(props) => props.theme.pd(14)} 0;
`;
export const CuisineTitle = styled(CollectionsTitle)`
  font-size: ${(props) => props.theme.fz(5) + "px"};
  line-height: ${(props) => props.theme.lh(props.theme.fz(5)) + "px"};
  margin-bottom: ${(props) => props.theme.mg(8)};
`;
export const CuisineItemGroup = styled(CategoryItemGroup)`
  /* 桌機 grid */
  ${(props) => props.theme.screens.xl} {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;
export const CuisineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${(props) => props.theme.mg(8)};
  font-weight: 500;
  .pic {
    margin-bottom: ${(props) => props.theme.mg(6)};
  }
  ${(props) => props.theme.screens.lg} {
    margin-bottom: 0;
  }
`;
export const MobileApp = styled(Category)`
  background-color: #f6f9fc;
  padding: ${(props) => props.theme.pd(12)} 0;
  color: #999;
  /* image包一層pic 讓圖片置中 */
  .pic {
    width: 185px;
    height: 370px;
    margin: 0 auto;
  }
  .content {
    .title {
      font-size: ${(props) => props.theme.fz(7) + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz(7)) + "px"};
      font-weight: 700;
      color: #000;
      margin-bottom: ${(props) => props.theme.mg()};
    }
    h4 {
      font-size: ${(props) => props.theme.fz(2) + "px"};
      line-height: ${(props) => props.theme.lh(props.theme.fz(2)) + "px"};
      margin-bottom: ${(props) => props.theme.mg(3)};
    }
    .radios {
      margin-bottom: ${(props) => props.theme.mg(3)};
      /* 單選 */
      input[type="radio"] {
        width: 16px;
        height: 16px;
        border: 5px solid #000;
        margin: 0;
      }
      #phone {
        margin-left: ${(props) => props.theme.mg(3)};
      }
      label {
        margin-left: ${(props) => props.theme.mg()};
      }
    }
    .search {
      display: flex;
      overflow: hidden;
      margin-bottom: ${(props) => props.theme.mg(8)};
      input {
        flex: 1;
        border-radius: 5px 0 0 5px;
        border: 1px solid #ccc;
        padding: ${(props) => props.theme.pd(3)};
        &:focus {
          outline: 1px solid #ccc;
        }
      }
      button {
        padding: ${(props) => props.theme.pd(2)};
        color: #fff;
        background-color: #d23f57;
        border: none;
        border-radius: 0 5px 5px 0;
        font-size: ${(props) => props.theme.fz(1) + "px"};
        cursor: pointer;
      }
    }
    .download {
      > p {
        margin-bottom: ${(props) => props.theme.mg(3)};
      }
      .load-point {
        display: flex;
        .app-store {
          margin-left: ${(props) => props.theme.mg(3)};
        }
      }
    }
    ${(props) => props.theme.screens.lg} {
      width: 70%;
      .search {
        width: 90%;
      }
    }
  }
`;
