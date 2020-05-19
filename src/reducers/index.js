import { combineReducers } from "redux";
import loginData from "./loginData";
import songList from "./songList";
import isModalOn from "./isModalOn";
import isPlayerOn from "./isPlayerOn";
import audio from "./audio";
import playerSrc from "./playerSrc";

const reducers = combineReducers({
  loginData,
  songList,
  isModalOn,
  isPlayerOn,
  audio,
  playerSrc,
});

export default reducers;
