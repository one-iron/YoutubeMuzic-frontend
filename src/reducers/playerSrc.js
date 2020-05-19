import * as types from "../action/actionTypes";

const initialState = {
  src: "",
};

const playerSrc = (state = initialState, action) => {
  switch (action.type) {
    case types.SETPLAYERSRC:
      return {
        src: action.payload.src,
      };
    default:
      return state;
  }
};

export default playerSrc;
