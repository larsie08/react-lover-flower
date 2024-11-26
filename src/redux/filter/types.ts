export interface CategoryProps {
  category: string;
}

export interface FilterSliceState {
  category: string;
  filtersId: string[];
  fieldPriceValue: number[];
  isConfirm: boolean;
  sort: {
    name: string;
    sortProperty: SortPropertyEnum;
  };
}

export type Category = {
  name: FlowerCategoriesEnum;
};

export enum FlowerCategoriesEnum {
  GypsophilaBouquets = "Букеты из гипсофил",
  ChamomileBouquets = "Букеты из ромашек",
  ChrysanthemumBouquets = "Букеты из хризантем",
  PottedIndoorPlants = "Комнатные цветы в горшках",
  MonoBouquets = "Монобукеты",
  AssortedBouquets = "Сборные букеты",
  HolidayBouquets = "Букет на праздник",
  FlowerCompositions = "Композиции из цветов",
  Envelopes = "Конверты",
  GreetingCards = "Открытки",
  Gifts = "Подарки",
  DriedFlowerBouquets = "Букеты из сухоцветов",
  Balloons = "Шары",
  PopularItems = "Популярное",
  RoseBouquets = "Букеты роз",
  FuneralFlowers = "Цветы на похороны",
  GiftWrapping = "Упаковка подарков",
}

export enum SortPropertyEnum {
  RATING = "rating",
  NAME = "name",
  COST = "cost",
}

export type FiltersParams = {
  sortProperty: string;
  category: string;
  filterIds?: string[];
  fieldPriceValue: number[];
};

export type SortType = {
  name: string;
  sortProperty: SortPropertyEnum;
};
