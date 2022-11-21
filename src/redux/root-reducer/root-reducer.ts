import { combineReducers } from "redux";
import controllTabReducer from "../TabController/reducer";
import userAuthReducer from "../user/reducer";

const rootReducer = combineReducers({
  tab: controllTabReducer,
  session: userAuthReducer,
});

export default rootReducer;
