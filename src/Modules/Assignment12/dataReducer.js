const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "DISPLAY_DATA": {
      return {
        ...state,
        data: payload,
      };
    }
    default:
      return state;
  }
};
export default dataReducer;
