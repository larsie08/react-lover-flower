export interface CategoryProps {
  categoryId: FlowerCategories | null;
  category: string;
}

export interface FilterSliceState {
  searchValue: string;
  categoryId: FlowerCategories | null;
  category: string;
  filtersId: string[];
  sortValue: string;
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
  searchValue: string;
};
