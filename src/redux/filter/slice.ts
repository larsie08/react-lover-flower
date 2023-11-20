import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryProps, FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  categoryId: null,
  category: "",
  filtersId: [],
  sortValue: "по популярности",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<CategoryProps>) {
      const { categoryId, category } = action.payload;
      if (state.categoryId === categoryId) {
        state.category = "";
        state.categoryId = null;
      } else {
        state.category = category;
        state.categoryId = categoryId;
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
    setSortValue(state, action: PayloadAction<string>) {
      state.sortValue = action.payload;
    },
  },
});

export const { setCategory, setFiltersId, setClearFiltersId, setSortValue } =
  filterSlice.actions;

export default filterSlice.reducer;
