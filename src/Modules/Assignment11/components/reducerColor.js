import { COLOR_INFO_GET } from "./utils";
const initialState = {
  colorInformationList: [],
};
const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLOR_INFO_GET:
      return {
        ...state,
        colorInformationList: [...action.payload],
      };
    default:
      return state;
  }
};
export default colorReducer;
