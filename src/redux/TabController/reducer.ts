import types from "./types";

const performaceDashboardId = 22;

const INITIAL_STATE = {
  current: 0,
  dashboard: performaceDashboardId,
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
    default:
      return state;
  }
};

export default controllTabReducer;
