import { ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

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

export type FormSectionProps = {
  title: string;
  children: ReactNode;
};

export type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  autoComplete?: string;
};

export type PromoCodeInputProps = {
  applyPromoCode: () => void;
  register: UseFormRegisterReturn;
};

export type SuggestionListProps = {
  suggestions: GeosuggestResult[];
  onSelect: (addressObj: GeosuggestResult) => void;
};
export type SummaryProps = {
  finalPrice: number;
  discount: number;
  deliveryPrice: number;
  appliedPromo: PromoCode | undefined;
};
