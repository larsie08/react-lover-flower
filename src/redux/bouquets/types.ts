export interface BouquetsSliceState {
  items: Bouquet[];
  status: Status;
}

export type Bouquet = {
  id: number;
  name: string;
  cost: number;
  imageUrl: string;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
