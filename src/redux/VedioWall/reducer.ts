import moment from "moment";
import types from "./types";
import { fixMomentDateForMis } from "../../pages/VedioWall/utils";

interface State {
  year: any;
  date_range: any;
  mis_year: any;
  loading: any;
  date: any;
}
const initDate = fixMomentDateForMis();
const INITIAL_STATE: State = {
  year: [],
  date_range: [],
  mis_year: "13",
  loading: false,
  date: initDate,
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

    case types.ADD_DATE_FOR_FILTER:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
};

export default vedioWallFilterReducer;
