import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { Bouquet } from "./types";
import { FiltersParams } from "../filter/types";

const filterBouquets = (items: Bouquet[], filterIds: string[] | undefined) => {
  if (!filterIds || filterIds.length === 0) {
    return items;
  }

  const filteredBouquets: Bouquet[] = [];

  const isFilterMatch = (bouquet: Bouquet) => {
    const itemFilters = bouquet.filters;
    return (
      filterIds.includes(itemFilters.lighting) ||
      Object.values(itemFilters.colors).some((color: string) =>
        filterIds.includes(color)
      ) ||
      Object.values(itemFilters.format).some((format: string) =>
        filterIds.includes(format)
      ) ||
      Object.values(itemFilters.flowers).some((flower: string) =>
        filterIds.includes(flower)
      )
    );
  };

  for (const item of items) {
    if (
      isFilterMatch(item) &&
      !filteredBouquets.some((bouquet) => bouquet.id === item.id)
    ) {
      filteredBouquets.push(item);
    }
  }

  return filteredBouquets;
};

export const fetchBouquets = createAsyncThunk<Bouquet[], FiltersParams>(
  "bouquets/fetchBouquetsStatus",
  async ({ sortProperty, category, filterIds }) => {
    const { data } = await axios.get<Bouquet[]>(
      `https://655b76e2ab37729791a92825.mockapi.io/items?sortBy=${sortProperty}&search=${category}`
    );

    return filterBouquets(data, filterIds);
  }
);
