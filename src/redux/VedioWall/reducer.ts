import types from "./types";

const INITIAL_STATE: { year: any; date_range: any } = {
  year: [],
  date_range: [],
};
const vedioWallFilterReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.APPLY_DATE_FILTER:
      return {
        ...state,
        date_range: action.payload,
      };

    case types.APPLY_YEAR_FILTER:
      return {
        ...state,
        year: action.payload,
      };
    default:
      return state;
  }
};

export default vedioWallFilterReducer;
