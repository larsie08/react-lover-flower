import { Status } from "../bouquets/types";

export interface Reviews {
  reviewId: number;
  rating: number;
  feedback: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface ReviewsSliceState {
  reviews: Reviews[];
  status: Status;
}

export interface ReviewsParams {
  bouquetId: string;
}
