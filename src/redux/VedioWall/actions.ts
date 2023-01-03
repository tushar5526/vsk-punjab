import types from "./types";

export const applyYearFilter = (e: any) => ({
  type: types.APPLY_YEAR_FILTER,
  payload: e,
});

export const applyDateFilter = (e: any) => ({
  type: types.APPLY_DATE_FILTER,
  payload: e,
});
