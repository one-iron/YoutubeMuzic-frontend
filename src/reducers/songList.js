import * as types from "../action/actionTypes";

const initialState = {
  list: false,
};

const songList = (state = initialState, action) => {
  switch (action.type) {
    case types.GETSONGLIST:
      return {
        list: action.payload.list,
      };
    default:
      return state;
  }
};

export default songList;
