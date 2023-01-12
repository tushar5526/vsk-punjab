import types from "./types";

export const applyYearFilter = (e: any) => ({
  type: types.APPLY_YEAR_FILTER,
  payload: e,
});

export const applyDateFilter = (e: any) => ({
  type: types.APPLY_DATE_FILTER,
  payload: e,
});

export const pushMisYearToState = (e: any) => ({
  type: types.PUSH_YEAR_FOR_MIS,
  payload: e,
});

export const setLoadingForMapRender = (e: any) => ({
  type: types.SET_LOADING,
  payload: e,
});
