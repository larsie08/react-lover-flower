import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { Bouquet } from "./types";
import { FiltersParams } from "../filter/types";

const filterBouquets = (data: Bouquet[], filtersId: string[] | undefined) => {
  if (filtersId && filtersId.length > 0) {
    return data.reduce((acc: Bouquet[], item) => {
      const itemColors = Object.values(item.filters.colors);
      const itemFormat = Object.values(item.filters.format);
      const itemFlower = Object.values(item.filters.flowers);
      if (
        filtersId.includes(item.filters.lighting) ||
        filtersId.some((filter) =>
          itemColors.some((color: string) => color === filter)
        ) ||
        filtersId.some((filter) =>
          itemFormat.some((format: string) => format === filter)
        ) ||
        filtersId.some((filter) =>
          itemFlower.some((flower: string) => flower === filter)
        )
      ) {
        if (!acc.some((bouquet) => bouquet.id === item.id)) acc.push(item);
      }
      return acc;
    }, []);
  } else return data;
};

export const fetchBouquets = createAsyncThunk<Bouquet[], FiltersParams>(
  "bouquets/fetchBouquetsStatus",
  async ({ sortBy, categoryId, filtersId }) => {
    const { data } = await axios.get<Bouquet[]>(
      `https://655b76e2ab37729791a92825.mockapi.io/items?sortBy=${sortBy}&search=${categoryId}`
    );

    return filterBouquets(data, filtersId);
  }
);
