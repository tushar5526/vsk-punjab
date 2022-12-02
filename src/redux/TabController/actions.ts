import types from "./types";

export const toogleTab = (obj: object) => ({
  type: types.ADD_TAB,
  payload: obj,
});
export const toogleFilter = (filterId: object) => ({
  type: types.ADD_FILTER_TAB,
  payload: filterId,
});
