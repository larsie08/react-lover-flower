import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { fetchSearchBouquets } from "./asyncActions";

import {
  CategoryProps,
  FilterSliceState,
  SortPropertyEnum,
  SortType,
} from "./types";
import { Bouquet, Status } from "../bouquets/types";

const initialState: FilterSliceState = {
  searchValue: "",
  searchItems: [],
  status: Status.LOADING,
  categoryId: "",
  category: "",
  filtersId: [],
  sort: {
    name: "популярности",
    sortProperty: SortPropertyEnum.RATING,
  },
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
        state.categoryId = "";
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
    setSortValue(state, action: PayloadAction<SortType>) {
      state.sort = action.payload;
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
