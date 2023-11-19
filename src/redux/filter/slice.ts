import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryProps, FilterSliceState } from "./types";

const initialState: FilterSliceState = {
  categoryId: NaN,
  category: "",
  filtersId: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<CategoryProps>) {
      if (state.categoryId === action.payload.categoryId) {
        state.category = "";
        state.categoryId = NaN;
      } else {
        state.category = action.payload.category;
        state.categoryId = action.payload.categoryId;
      }
    },
    setFiltersId(state, action: PayloadAction<string>) {
      if (state.filtersId.includes(action.payload)) {
        state.filtersId = state.filtersId.filter(
          (itemId) => itemId !== action.payload
        );
      } else {
        state.filtersId = [...state.filtersId, action.payload];
      }
    },
    setClearFiltersId(state) {
      state.filtersId = []
    },
  },
});

export const { setCategory, setFiltersId, setClearFiltersId } =
  filterSlice.actions;

export default filterSlice.reducer;
