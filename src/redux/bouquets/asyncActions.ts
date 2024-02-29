import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { Bouquet } from "./types";
import { FiltersParams } from "../filter/types";

export const fetchBouquets = createAsyncThunk<Bouquet[], FiltersParams>(
  "bouquets/fetchBouquetsStatus",
  async ({ sortBy, categoryId }) => {
    const { data } = await axios.get<Bouquet[]>(
      `https://655b76e2ab37729791a92825.mockapi.io/items?sortBy=${sortBy}&search=${categoryId}`
    );
    return data;
  }
);
