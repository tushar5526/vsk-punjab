import types from "./types";
import { fixMomentDateForMis } from "../../pages/VedioWall/utils";

interface INITIAL_STATE {
  year: any;
  single_date: any;
  mis_year: any;
  loading: any;
}
const initDate = fixMomentDateForMis();
const INITIAL_STATE: INITIAL_STATE = {
  year: [],
  single_date: initDate,
  mis_year: "13",
  loading: false,
};

const vedioWallFilterReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.APPLY_DATE_FILTER:
      return {
        ...state,
        single_date: action.payload,
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
