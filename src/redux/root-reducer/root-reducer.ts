import { combineReducers } from "redux";
import filterReducer from "../filters/reducer";
import controllTabReducer from "../TabController/reducer";
import userAuthReducer from "../user/reducer";

const rootReducer = combineReducers({
  tab: controllTabReducer,
  session: userAuthReducer,
  filters: filterReducer,
});

export default rootReducer;
