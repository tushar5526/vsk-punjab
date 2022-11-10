import { combineReducers } from "redux";
import controllTabReducer from "../TabController/reducer";
import userReducer from "../user/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  tab: controllTabReducer,
});

export default rootReducer;
