import { Bouquet, Status } from "../bouquets/types";

export interface CategoryProps {
  categoryId: FlowerCategories | null;
  category: string;
}

export interface FilterSliceState {
  searchValue: string;
  searchItems: Bouquet[];
  status: Status;
  categoryId: FlowerCategories | null;
  category: string;
  filtersId: string[];
  sort: {
    name: string;
    sortProperty: SortPropertyEnum;
  };
}

export type Category = {
  name: string;
  id: FlowerCategories;
};

export enum FlowerCategories {
  GypsophilaBouquets = 1,
  ChamomileBouquets,
  ChrysanthemumBouquets,
  PottedIndoorPlants,
  MonoBouquets,
  AssortedBouquets,
  HolidayBouquets,
  FlowerCompositions,
  Envelopes,
  GreetingCards,
  Gifts,
  DriedFlowerBouquets,
  Balloons,
  PopularItems,
  RoseBouquets,
  FuneralFlowers,
  GiftWrapping,
}

export type SearchFiltersParams = {
  searchValue?: string;
};

export type FiltersParams = {
  sortBy: string;
};

export enum SortPropertyEnum {
  RATING = "rating",
  NAME = "name",
  COST = "cost",
}

export type SortType = {
  name: string;
  sortProperty: SortPropertyEnum;
};
