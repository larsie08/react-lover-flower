import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { Reviews, ReviewsSliceState } from "./types";
import { fetchReviews } from "./asyncActions";
import { Status } from "../bouquets/types";

const initialState: ReviewsSliceState = {
  reviews: [],
  status: Status.LOADING,
};

const reviewsSlice = createSlice({
  name: "reviws",
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<Reviews>) {
      state.reviews.push({ ...action.payload });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchReviews.pending, (state) => {
      state.status = Status.LOADING;
      state.reviews = [];
    });
    builder.addCase(
      fetchReviews.fulfilled,
      (state, action: PayloadAction<Reviews[]>) => {
        state.reviews = action.payload;
        state.status = Status.SUCCESS;
      }
    );
    builder.addCase(fetchReviews.rejected, (state) => {
      state.status = Status.ERROR;
      state.reviews = [];
    });
  },
});

export const { addReview } = reviewsSlice.actions;

export default reviewsSlice.reducer;
