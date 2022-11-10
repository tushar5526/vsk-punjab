import types from "./types";

const INITIAL_STATE = {
  current: 1,
};

const controllTabReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.ADD_TAB:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};

export default controllTabReducer;
