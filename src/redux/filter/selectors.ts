import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const category = (state: RootState) => state.filter.category;
const sortOption = (state: RootState) => state.filter.sort;
const sortProperty = (state: RootState) => state.filter.sort.sortProperty;
const filterIds = (state: RootState) => state.filter.filtersId;
const fieldPriceValue = (state: RootState) => state.filter.fieldPriceValue;
const isConfirmStatus = (state: RootState) => state.filter.isConfirm;

export const selectCategoryAndSortOptions = createSelector(
  [category, sortOption],
  (category, sortOption) => ({
    category,
    sortOption,
  })
);

export const selectFiltersAppState = createSelector(
  [sortProperty, category, filterIds, isConfirmStatus, fieldPriceValue],
  (sortProperty, category, filterIds, isConfirmStatus, fieldPriceValue) => ({
    sortProperty,
    category,
    filterIds,
    isConfirmStatus,
    fieldPriceValue,
  })
);

export const selectFilterIds = createSelector(
  filterIds,
  (filterIds) => filterIds
);
