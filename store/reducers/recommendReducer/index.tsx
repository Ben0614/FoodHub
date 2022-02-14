import { RecommendAction } from "../../../type";

const RecommendReducer = (state = [], action: RecommendAction) => {
  // console.log("action", action);
  switch (action.type) {
    case "list-data":
      return action.payload;
    default:
      return state;
  }
};

export default RecommendReducer;
