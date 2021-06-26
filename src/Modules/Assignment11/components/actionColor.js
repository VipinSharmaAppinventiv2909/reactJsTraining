import { COLOR_INFO_GET } from "./utils";

export const getColorInformation = (colorList) => {
  return {
    type: COLOR_INFO_GET,
    payload: colorList,
  };
};
export const getUserData = () => {
  return (dispatch) => {
    fetch("https://reqres.in/api/unknown")
      .then((res) => res.json())
      .then((convertedJson) => {
        dispatch(getColorInformation(convertedJson.data));
      });
  };
};
