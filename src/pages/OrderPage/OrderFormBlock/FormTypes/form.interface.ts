import { AlertColor } from "@mui/material";
import { DeliveryRadioGroupOption, PayRadioGroupOptions } from "..";
import { GeosuggestResult, PromoCode } from "./form.types";


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
  sendAlert: (severityOption: AlertColor) => void
}

export interface IGeosuggestAnswer {
  results: GeosuggestResult[];
}
