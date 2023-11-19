export interface CategoryProps {
  categoryId: number;
  category: string;
}

export interface FilterSliceState {
  categoryId: number;
  category: string;
  filtersId: string[];
}
