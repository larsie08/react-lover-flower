import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { Bouquet } from "./types";
import { FiltersParams } from "../filter/types";

const filterBouquets = (
  items: Bouquet[],
  filtersId: string[] | undefined,
  fieldPriceValue: number[]
) => {
  if (!filtersId || filtersId.length === 0) {
    return items.filter(
      (item) =>
        item.cost >= fieldPriceValue[0] && item.cost <= fieldPriceValue[1]
    );
  }

  return items.filter((bouquet) => {
    const { filters, cost } = bouquet;
    const matchesFilter =
      filtersId.includes(filters.lighting) ||
      Object.values(filters.colors).some((color) =>
        filtersId.includes(color)
      ) ||
      Object.values(filters.format).some((format) =>
        filtersId.includes(format)
      ) ||
      Object.values(filters.flowers).some((flower) =>
        filtersId.includes(flower)
      );

    return (
      matchesFilter && cost >= fieldPriceValue[0] && cost <= fieldPriceValue[1]
    );
  });
};

export const fetchBouquets = createAsyncThunk<Bouquet[], FiltersParams>(
  "bouquets/fetchBouquetsStatus",
  async ({ sortProperty, category, filtersId, fieldPriceValue }) => {
    const params = new URLSearchParams({
      sortBy: sortProperty,
      search: category,
    });

    const { data } = await axios.get<Bouquet[]>(
      `https://655b76e2ab37729791a92825.mockapi.io/items?${params.toString()}`
    );

    return filterBouquets(data, filtersId, fieldPriceValue);
  }
);
