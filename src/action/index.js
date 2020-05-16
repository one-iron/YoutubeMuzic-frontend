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
