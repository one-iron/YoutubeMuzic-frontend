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

export const pressPlay = () => {
  return {
    type: types.PRESSPLAY,
  };
};

export const modalOn = () => {
  return {
    type: types.MODALON,
  };
};

export const playerOn = () => {
  return {
    type: types.PLAYERON,
  };
};

export const playerOff = () => {
  return {
    type: types.PLAYEROFF,
  };
};

export const setPlayerSrc = (id, src, thumb, name, artist, view, like) => {
  return {
    type: types.SETPLAYERSRC,
    payload: {
      id,
      src,
      thumb,
      name,
      artist,
      view,
      like,
    },
  };
};
