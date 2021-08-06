import { combineReducers } from "redux";
import authReducer from "./authReducer";
import moviesReducer from "./moviesReducer";

export default combineReducers({
  moviesReducer,
  authReducer,
});
