import { DeliveryRadioGroupOption, PayRadioGroupOptions } from "..";

import { GeosuggestResult, PromoCode } from "./FormTypes/form.types";

export interface IOrderForm {
  name: string;
  phone: string;
  email: string;
  secondPhone: string;
  receiverName: string;
  comment: string;
  deliveryRadioGroup: DeliveryRadioGroupOption;
  payRadioGroupOptions: PayRadioGroupOptions;
  promoCode: string;
  address: string;
  apartmentNumber: string;
  deliveryTime: string;
}

export interface IOrderFormProps {
  submitOrder: (
    formData: IOrderForm,
    finalPrice: number,
    deliveryAddress?: string,
    appliedPromoCode?: PromoCode
  ) => void;
  totalPrice: number;
}

export interface IGeosuggestAnswer {
  results: GeosuggestResult[];
}
