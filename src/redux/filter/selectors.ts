import { RootState } from "../store";

export const selectCategory = (state: RootState) => state.filter;
export const selectCategoryId = (state: RootState) => state.filter.categoryId;
export const selectFiltersById = (state: RootState) => state.filter.filtersId;
