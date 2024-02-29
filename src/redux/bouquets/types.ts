export interface BouquetsSliceState {
  items: Bouquet[];
  status: Status;
}

export type Bouquet = {
  id: number;
  name: string;
  cost: number;
  imageUrl: string;
  category1?: string;
  category2?: string;
  category3?: string;
  category4?: string;
  category5?: string;
};

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
