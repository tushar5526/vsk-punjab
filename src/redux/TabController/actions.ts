import types from "./types";

export const toogleTab = (obj: object) => ({
  type: types.ADD_TAB,
  payload: obj,
});
