import types from "./types";

export const addUserToStore = (payload: any) => ({
  type: types.ADD_USER,
  payload,
});
