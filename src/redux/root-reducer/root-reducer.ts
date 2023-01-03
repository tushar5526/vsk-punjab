import { combineReducers } from "redux";
import controllTabReducer from "../TabController/reducer";
import userAuthReducer from "../user/reducer";
import vedioWallFilterReducer from "../VedioWall/reducer";

const rootReducer = combineReducers({
  tab: controllTabReducer,
  session: userAuthReducer,
  vedio_wall: vedioWallFilterReducer,
});

export default rootReducer;
