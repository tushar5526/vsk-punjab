import types from "./types";

export const toogleTab = (current: number) => ({
  type: types.ADD_TAB,
  payload: current,
});
