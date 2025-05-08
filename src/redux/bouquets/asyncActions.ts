import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { Bouquet } from "./types";
import { FiltersParams } from "../filter/types";

export const fetchBouquets = createAsyncThunk<Bouquet[], FiltersParams>(
  "bouquets/fetchBouquetsStatus",
  async ({ sortProperty, category, filterIds, fieldPriceValue }) => {
    const params = new URLSearchParams({
      sortBy: sortProperty,
      category: category,
      minPriceValue: String(fieldPriceValue[0]),
      maxPriceValue: String(fieldPriceValue[1]),
    });

    if (filterIds) {
      filterIds.forEach((filter) => {
        params.append("filters", filter);
      });
    }

    const { data } = await axios.get<Bouquet[]>(
      `http://localhost:3000/api/bouquets?${params}`
    );

    return data;
  }
);
