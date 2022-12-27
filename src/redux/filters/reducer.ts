import types from "./types";

const INITIAL_STATE = {
  district: [],
  // block: null,
  // cluster: null,
};

const filterReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.APPLY_DISTRICT_FILTER:
      return {
        ...state,
        district: action.payload,
      };
    case types.APPLY_BLOCK_FILTER:
      return {
        ...state,
        block: action.payload,
      };

    case types.APPLY_CLUSTER_FILTER:
      return {
        ...state,
        cluster: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
