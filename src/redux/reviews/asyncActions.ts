import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Reviews, ReviewsParams } from "./types";

export const fetchReviews = createAsyncThunk<Reviews[], ReviewsParams>(
  "filter/fetchReviewsStatus",
  async ({id}) => {
    const { data } = await axios.get<Reviews[]>(
      `https://655b76e2ab37729791a92825.mockapi.io/items/${id}/reviews`
    );
    return data;
  }
);
