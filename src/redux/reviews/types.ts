import { Status } from "../bouquets/types";

export interface Reviews {
  reviewId: string;
  bouquetId: string;
  review: {
    rating: number;
    feedback: string;
    name: string;
    email: string;
  };
}

export interface ReviewsSliceState {
  reviews: Reviews[];
  status: Status;
}

export interface ReviewsParams {
  id: string | undefined;
}
