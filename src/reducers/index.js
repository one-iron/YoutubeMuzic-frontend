import { combineReducers } from "redux";
import loginData from "./loginData";
import songList from "./songList";
import isModalOn from "./isModalOn";
import isPlayerOn from "./isModalOn";

const reducers = combineReducers({
  loginData,
  songList,
  isModalOn,
  isPlayerOn,
});

export default reducers;
