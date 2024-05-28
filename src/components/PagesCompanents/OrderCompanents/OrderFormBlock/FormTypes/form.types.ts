export type PromoCode = {
  promoName: string;
  percentageDiscount: number;
};

export type GeosuggestResult = {
  title: {
    text: string;
  };
  subtitle?: {
    text: string;
  };
  tags: string[];
  distance: {
    text: string;
    value: number;
  };
};
