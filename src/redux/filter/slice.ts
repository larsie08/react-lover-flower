import { Status } from './../../../../react-pizza-v2/src/redux/pizza/types';
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CategoryProps, FilterSliceState } from "./types";
import { fetchSearchBouquets } from "./asyncActions";
import { Bouquet } from "../bouquets/types";

const initialState: FilterSliceState = {
  searchValue: "",
  searchItems: [],
  status: Status.LOADING,
  categoryId: null,
  category: "",
  filtersId: [],
  sortValue: "по популярности",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
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
  extraReducers: (builder) => {
    builder.addCase(fetchSearchBouquets.pending, (state) => {
      state.status = Status.LOADING;
      state.searchItems = [];
    });
    builder.addCase(
      fetchSearchBouquets.fulfilled,
      (state, action: PayloadAction<Bouquet[]>) => {
        state.searchItems = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchSearchBouquets.rejected, (state) => {
      state.status = Status.ERROR;
      state.searchItems = [];
    });
  },
});

export const {
  setCategory,
  setFiltersId,
  setClearFiltersId,
  setSortValue,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
