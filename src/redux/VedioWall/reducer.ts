import types from "./types";

interface State {
  year: any;
  date_range: any;
  mis_year: any;
  loading: any;
}

const INITIAL_STATE: State = {
  year: [],
  date_range: [],
  mis_year: "13",
  loading: false,
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
    case types.PUSH_YEAR_FOR_MIS:
      return {
        ...state,
        mis_year: action.payload,
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default vedioWallFilterReducer;
