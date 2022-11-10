import types from "./types";

const INITIAL_STATE = {
  user: null,
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
