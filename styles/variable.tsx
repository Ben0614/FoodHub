// 文字大小基準
const baseSize = 12;
const baseLineSize = 10;
// 文字大小級距
const sizeLevel = 4;
// line-height 倍數
const paddingLevel = 1.2;

const container = {
  sm: "640px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
  twoXl: "1785px",
};

const screens = {
  sm: "@media (min-width: 640px)",
  md: "@media (min-width: 768px)",
  lg: "@media (min-width: 992px)",
  xl: "@media (min-width: 1280px)",
  twoXl: "@media (min-width: 1785px)",
};

const letters = {
  title: "5px",
  viewAll: "2px",
  name: "5px",
  pinYin: "3px",
  link: "1px",
  siteSupport: "2px",
};

const fw = {
  bigTitle: 200,
  fixedNav: 200,
  viewAll: 300,
  en: 300,
  jp: 400,
  jpTitle: 500,
  scheduleDate: 500,
  scheduleWeek: 200,
};

const fz = (level = 0) => {
  if (level <= 0) {
    level = 0;
  }
  return baseSize + sizeLevel * Math.round(level);
};
const lh = (fontSize: number = 1) => {
  if (fontSize <= 0) {
    fontSize = 0;
  }
  return Math.ceil((fontSize * paddingLevel) / baseLineSize) * baseLineSize;
};

const col = (i: number) => {
  if (i >= 12) {
    i = 12;
  }
  // 取到小數點後4位
  let col = Math.round((i / 12) * 1000000) / 10000;
  return col;
};

const pd = (i = 1) => {
  let pd = i * 5;
  return pd + "px";
};

const mg = (i = 1) => {
  let mg = i * 5;
  return mg + "px";
};

const theme = {
  container,
  screens,
  letters,
  fw,
  fz,
  lh,
  col,
  pd,
  mg,
};

export { theme };
