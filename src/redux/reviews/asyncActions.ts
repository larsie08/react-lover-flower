import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { Reviews, ReviewsParams } from "./types";

export const fetchReviews = createAsyncThunk<Reviews[], ReviewsParams>(
  "reviews/fetchReviewsStatus",
  async ({ bouquetId }) => {
    const { data } = await axios.get<Reviews[]>(
      `http://localhost:3000/api/review/${bouquetId}`
    );
    return data;
  }
);
