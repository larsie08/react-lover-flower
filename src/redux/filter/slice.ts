import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import {
  CategoryProps,
  FilterSliceState,
  SortPropertyEnum,
  SortType,
} from "./types";

const initialState: FilterSliceState = {
  category: "",
  filtersId: [],
  fieldPriceValue: [],
  isConfirm: false,
  sort: {
    name: "популярности",
    sortProperty: SortPropertyEnum.RATING,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<CategoryProps>) {
      const { category } = action.payload;
      if (state.category === category) {
        state.category = "";
      } else {
        state.category = category;
      }
    },
    setFiltersId(state, action: PayloadAction<string>) {
      const { payload } = action;
      state.filtersId = state.filtersId.includes(payload)
        ? state.filtersId.filter((itemId) => itemId !== payload)
        : [...state.filtersId, payload];
    },
    setClearFiltersId(state) {
      state.filtersId = [];
    },
    setSortValue(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
    },
    setConfirm(state, action: PayloadAction<boolean>) {
      state.isConfirm = action.payload;
    },
    setFieldPriceValue(state, action: PayloadAction<number[]>) {
      state.fieldPriceValue = action.payload;
    },
  },
});

export const {
  setCategory,
  setFiltersId,
  setClearFiltersId,
  setSortValue,
  setConfirm,
  setFieldPriceValue,
} = filterSlice.actions;

export default filterSlice.reducer;
