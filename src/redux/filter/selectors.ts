import { RootState } from "../store";

export const selectCategory = (state: RootState) => state.filter;
export const selectFiltersById = (state: RootState) => state.filter.filtersId;
