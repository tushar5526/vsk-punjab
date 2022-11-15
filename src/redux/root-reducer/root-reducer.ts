import { combineReducers } from "redux";
import controllTabReducer from "../TabController/reducer";

const rootReducer = combineReducers({
  tab: controllTabReducer,
});

export default rootReducer;
