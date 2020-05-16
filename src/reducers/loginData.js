import * as types from "../action/actionTypes";

const initialState = {
  email: "",
  familyName: "",
  givenName: "",
  imageUrl: "",
};

const loginData = (state = initialState, action) => {
  switch (action.type) {
    case types.GETLOGINDATA:
      return {
        email: action.payload.email,
        familyName: action.payload.familyName,
        givenName: action.payload.givenName,
        imageUrl: action.payload.imageUrl,
      };
    default:
      return state;
  }
};

export default loginData;
