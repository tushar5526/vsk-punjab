import types from "./types";

const INITIAL_STATE = {
  duration: 0,
};

const sliderReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case types.SET_DURATION_FOR_AUTO_PLAY:
      return {
        ...state,
        duration: action.payload,
      };
    default:
      return state;
  }
};

export default sliderReducer;
