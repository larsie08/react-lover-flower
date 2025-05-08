import { Reviews } from "../reviews/types";

export interface BouquetsSliceState {
  items: Bouquet[];
  status: Status;
}

export type BouquetFilters = {
  lighting: string;
  colors: {
    color1: string;
    color2?: string;
    color3?: string;
  };
  format: {
    format1: string;
    format2?: string;
    format3?: string;
  };
  flowers: {
    flower1: string;
    flower2?: string;
    flower3?: string;
  };
};

export type BouquetCategories = {
  category1?: string;
  category2?: string;
  category3?: string;
  category4?: string;
  category5?: string;
};

export type Bouquet = {
  id: number;
  name: string;
  cost: number;
  imageUrl: string;
  categories: BouquetCategories;
  filters: BouquetFilters;
  reviews?: Reviews[];
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export type UpdateBouquetProps = {
  id: number;
  review: Reviews;
};
