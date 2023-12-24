import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

import { Bouquet } from "./types";

export const fetchBouquets = createAsyncThunk<Bouquet[]>(
  "bouquets/fetchBouquetsStatus",
  async () => {
    const { data } = await axios.get<Bouquet[]>(
      "https://655b76e2ab37729791a92825.mockapi.io/items"
    );
    return data;
  }
);

