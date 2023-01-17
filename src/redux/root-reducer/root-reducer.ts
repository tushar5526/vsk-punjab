import { combineReducers } from "redux";
import controllTabReducer from "../TabController/reducer";
import userAuthReducer from "../user/reducer";
import vedioWallFilterReducer from "../VedioWall/reducer";
import sliderReducer from "../Slider/reducer";

const rootReducer = combineReducers({
  tab: controllTabReducer,
  session: userAuthReducer,
  vedio_wall: vedioWallFilterReducer,
  slider: sliderReducer,
});

export default rootReducer;
