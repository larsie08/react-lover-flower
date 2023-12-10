import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Bouquet } from "../bouquets/types";
import { SearchFiltersParams } from "./types";

export const fetchSearchBouquets = createAsyncThunk<
  Bouquet[],
  SearchFiltersParams
>("filter/fetchBouquetsStatus", async ({searchValue}) => {
  const { data } = await axios.get<Bouquet[]>(
    `https://655b76e2ab37729791a92825.mockapi.io/items?search=${searchValue}`
  );
  return data;
});
