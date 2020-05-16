import * as types from "../action/actionTypes";

const initialState = {
  isModalOn: false,
};

const isModalOn = (state = initialState, action) => {
  switch (action.type) {
    case types.MODALON:
      return {
        isModalOn: !state.isModalOn,
      };
    default:
      return state;
  }
};

export default isModalOn;
