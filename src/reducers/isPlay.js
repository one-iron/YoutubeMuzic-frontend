import * as types from "../action/actionTypes";

const initailState = true;

const isPlay = (state = initailState, action) => {
  switch (action.type) {
    case types.PRESSPLAY:
      return !state;
    default:
      return state;
  }
};

export default isPlay;
