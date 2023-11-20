export interface CategoryProps {
  categoryId: number | null;
  category: string;
}

export interface FilterSliceState {
  categoryId: number | null;
  category: string;
  filtersId: string[];
  sortValue: string;
}

