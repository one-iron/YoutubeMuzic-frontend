import * as types from "../action/actionTypes";

const initialState = {
  isPlayerOn: false,
};

const isPlayerOn = (state = initialState, action) => {
  switch (action.type) {
    case types.PLAYERON:
      return { value: true };
    case types.PLAYEROFF:
      return { value: false };
    default:
      return state;
  }
};

export default isPlayerOn;
