import * as types from "../action/actionTypes";

const initialState = {
  src: "",
};

const playerSrc = (state = initialState, action) => {
  switch (action.type) {
    case types.SETPLAYERSRC:
      return {
        src: action.payload.src,
        thumb: action.payload.thumb,
        name: action.payload.name,
        artist: action.payload.artist,
        view: action.payload.view,
        like: action.payload.like,
      };
    default:
      return state;
  }
};

export default playerSrc;
