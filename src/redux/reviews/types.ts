import { Status } from "../bouquets/types";

export interface Reviews {
  reviewId: string;
  bouquetId: string;
  review: {
    rating: number;
    feedback: string;
    name: string;
    email: string;
    currentDate: string;
  };
}

export interface ReviewsSliceState {
  reviews: Reviews[];
  status: Status;
}

export interface ReviewsParams {
  bouquetId: string | undefined;
}
