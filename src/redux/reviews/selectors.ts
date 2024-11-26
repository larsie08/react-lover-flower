import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const reviews = (state: RootState) => state.reviews.reviews;

export const selectReviews = createSelector([reviews], (reviews) => reviews);
