import { combineReducers } from "redux";
import counterReducer from "./reducer";
import colorReducer from "./reducerColor";
const rootReducer = combineReducers({ counterReducer, colorReducer });
export default rootReducer;
