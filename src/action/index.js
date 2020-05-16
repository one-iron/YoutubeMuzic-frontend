import * as types from "./actionTypes";

export const getLoginData = (email, familyName, givenName, imageUrl) => {
  return {
    type: types.GETLOGINDATA,
    payload: {
      email,
      familyName,
      givenName,
      imageUrl,
    },
  };
};

export const getSongList = (list) => {
  return {
    type: types.GETSONGLIST,
    payload: {
      list,
    },
  };
};

export const modalOn = () => {
  return {
    type: types.MODALON,
  };
};

export const palyerOn = () => {
  return {
    type: types.PLAYERON,
  };
};

export const palyerOff = () => {
  return {
    type: types.PLAYEROFF,
  };
};
