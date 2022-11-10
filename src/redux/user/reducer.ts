import types from "./types";

const INITIAL_STATE = {
  data: null,
  refreshToken: null,
  token: null,
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.ADD_USER:
      const { user: data, refreshToken, token } = action.payload;
      return {
        ...state,
        data,
        refreshToken,
        token,
      };
    case types.LOGOUT:
      return {
        data: null,
        refreshToken: null,
        token: null,
      };
    default:
      return state;
  }
};

export default userReducer;
