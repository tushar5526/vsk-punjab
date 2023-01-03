import types from "./types";

const INITIAL_STATE = {
  current: 0,
  dashboard: 26,
};

const controllTabReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.ADD_TAB:
      const { current, dashboard } = action.payload;
      return {
        ...state,
        current,
        dashboard,
      };
    case types.ADD_FILTER_TAB:
      return {
        ...state,
        dashboard: action.payload,
      };
    default:
      return state;
  }
};

export default controllTabReducer;
