import { FC, memo, useState } from "react";
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  Controller,
  DefaultValues,
} from "react-hook-form";
import axios from "axios";
import debounce from "debounce";

import {
  FormSection,
  Input,
  PromoCodeInput,
  SuggestionList,
  Summary,
} from "./companents";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { grey } from "@mui/material/colors";

import {
  IGeosuggestAnswer,
  IOrderForm,
  IOrderFormProps,
} from "./FormTypes/form.interface";
import { GeosuggestResult, PromoCode } from "./FormTypes/form.types";

const DELIVERY_OPTIONS = ["Самовывоз", "Доставка курьером"] as const;
const PAYMENT_OPTIONS = [
  "Банковская карта",
  "Наличными",
  "Apple pay",
  "Google pay",
  "Криптовалюта",
  "С расчетного счета",
] as const;

export type DeliveryRadioGroupOption = (typeof DELIVERY_OPTIONS)[number];
export type PayRadioGroupOptions = (typeof PAYMENT_OPTIONS)[number];

const defaultValues: DefaultValues<IOrderForm> = {
  name: "",
  phone: "",
  email: "",
  secondPhone: "",
  receiverName: "",
  comment: "",
  deliveryRadioGroup: "Самовывоз",
  payRadioGroupOptions: "Банковская карта",
  promoCode: "",
  address: "",
  apartmentNumber: "",
  deliveryTime: "",
};

const OrderFormBlock: FC<IOrderFormProps> = memo(
  ({ submitOrder, totalPrice, sendAlert }) => {
    const {
      register,
      handleSubmit,
      control,
      watch,
      getValues,
      setValue,
      formState: { errors },
    } = useForm<IOrderForm>({
      defaultValues,
    });

    const [discount, setDiscount] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(0);
    const [finalPrice, setFinalPrice] = useState(totalPrice);
    const [addressSuggestions, setAddressSuggestions] =
      useState<GeosuggestResult[]>();
    const [appliedPromo, setAppliedPromo] = useState<PromoCode | undefined>(
      undefined,
    );
    const [isAddressListOpen, toggleAddressList] = useState(false);

    const watchDelivery = watch("deliveryRadioGroup");
    const watchPayMethods = watch("payRadioGroupOptions");

    const applyPromoCode = async () => {
      const promo = getValues("promoCode").trim().toLowerCase();
      if (!promo) return alert("Введите промокод");
      if (appliedPromo) return alert("Промокод уже применён");

      const promoItem = await fetchPromocode(promo);

      if (!promoItem) {
        return sendAlert("error");
      }

      const calculatedDiscount =
        (finalPrice * promoItem.percentageDiscount) / 100;

      setDiscount(Number(calculatedDiscount.toFixed(2)));
      setFinalPrice(finalPrice - calculatedDiscount);
      setAppliedPromo(promoItem);

      sendAlert("success");
    };

    const fetchPromocode = async (promo: string) => {
      try {
        const { data } = await axios.get<PromoCode>(
          `http://localhost:3000/api/promocode/${promo}`,
        );

        return data;
      } catch (error) {
        console.log(error);
      }
    };

    const fetchAddressSuggestions = debounce(async () => {
      const address = getValues("address").trim();
      if (!address) return;

      try {
        const { data } = await axios.get<IGeosuggestAnswer>(
          `https://suggest-maps.yandex.ru/v1/suggest?apikey=YOUR_API_KEY&text=${address}&lang=ru&results=20`,
        );
        setAddressSuggestions(data.results);
        toggleAddressList(true);
      } catch {
        console.log("Ошибка получения адреса");
        sendAlert("error");
      }
    }, 350);

    const handleAddressSelection = (addressObj: GeosuggestResult) => {
      const formattedAddress = `${addressObj.subtitle?.text ?? ""}, ${
        addressObj.title.text
      }`;
      setValue("address", formattedAddress);
      setDeliveryPrice(Math.round(Math.random() * 900 + 100));
      toggleAddressList(false);
    };

    const submitForm: SubmitHandler<IOrderForm> = (data) => {
      submitOrder(data, finalPrice, getValues("address").trim(), appliedPromo);
    };

    const errorHandler: SubmitErrorHandler<IOrderForm> = (errors) => {
      sendAlert("error");
      console.log(errors);
    };

    return (
      <form
        onSubmit={handleSubmit(submitForm, errorHandler)}
        className="order__forms_block w-[540px]"
      >
        <FormSection title="Контактные данные">
          <Input
            label="Ваше имя*"
            placeholder="Введите ваше имя"
            register={register("name", { required: true })}
            error={errors.name}
          />
          <Input
            label="Ваш телефон*"
            placeholder="+7 (977) 777-77-77"
            type="tel"
            register={register("phone", { required: true })}
            error={errors.phone}
          />
          <Input
            label="Ваш e-mail*"
            placeholder="Введите вашу почту"
            type="email"
            register={register("email", { required: true })}
            error={errors.email}
          />
          <Input
            label="Телефон получателя (необязательно)"
            placeholder="+7 (977) 777-77-77"
            type="tel"
            register={register("secondPhone")}
          />
          <Input
            label="Имя получателя (необязательно)"
            placeholder="Введите имя получателя"
            register={register("receiverName")}
          />
          <Input
            label="Комментарий к заказу"
            placeholder="Примечания к вашему заказу"
            register={register("comment")}
          />
        </FormSection>

        <FormSection title="Доставка">
          <Controller
            control={control}
            name="deliveryRadioGroup"
            render={({ field }) => (
              <RadioGroup {...field}>
                {DELIVERY_OPTIONS.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={
                      <Radio
                        sx={{
                          color: grey[900],
                          "&.Mui-checked": { color: grey[50] },
                        }}
                      />
                    }
                    label={option}
                    className="font-normal uppercase tracking-normal text-[#353535] aria-checked:text-[white]"
                    aria-checked={watchDelivery === option}
                  />
                ))}
              </RadioGroup>
            )}
          />
          {watchDelivery === "Доставка курьером" && (
            <>
              <Input
                label="Адрес*"
                placeholder="Введите адрес"
                register={register("address", {
                  required: true,
                  onChange: fetchAddressSuggestions,
                })}
                error={errors.address}
                autoComplete="off"
              />
              <div className="flex gap-8 max-lg:max-w-[300px]">
                <Input
                  label="Кв/офис"
                  placeholder="Кв/офис"
                  register={register("address", {
                    required: true,
                    onChange: fetchAddressSuggestions,
                  })}
                  error={errors.address}
                  autoComplete="off"
                />
                <Input
                  label="Время доставки"
                  placeholder="__/__"
                  register={register("address", {
                    required: true,
                    onChange: fetchAddressSuggestions,
                  })}
                  error={errors.address}
                  autoComplete="off"
                />
              </div>

              {isAddressListOpen && addressSuggestions && (
                <SuggestionList
                  suggestions={addressSuggestions}
                  onSelect={handleAddressSelection}
                />
              )}
            </>
          )}
        </FormSection>

        <FormSection title="Оплата">
          <Controller
            control={control}
            name="payRadioGroupOptions"
            render={({ field }) => (
              <RadioGroup {...field}>
                {PAYMENT_OPTIONS.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={
                      <Radio
                        sx={{
                          color: grey[900],
                          "&.Mui-checked": { color: grey[50] },
                        }}
                      />
                    }
                    label={option}
                    className="font-normal uppercase tracking-normal text-[#353535] aria-checked:text-[white]"
                    aria-checked={watchPayMethods === option}
                  />
                ))}
              </RadioGroup>
            )}
          />
        </FormSection>

        <FormSection title="Промокод">
          <PromoCodeInput
            applyPromoCode={applyPromoCode}
            register={register("promoCode")}
          />
        </FormSection>

        <Summary
          finalPrice={finalPrice}
          discount={discount}
          deliveryPrice={deliveryPrice}
          appliedPromo={appliedPromo}
        />

        <div className="total_price__button_block flex flex-col gap-[10px] max-lg:mt-5 lg:mt-7">
          <button
            onClick={handleSubmit(submitForm, errorHandler)}
            type="submit"
            className="mt-2 w-[255px] cursor-pointer border border-light-turquoise bg-light-turquoise p-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[black] transition-all hover:border-cherry hover:bg-cherry hover:text-[white] focus:border focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]"
          >
            К оплате
          </button>

          <p className="max-w-[342px] font-roboto_condensed text-[10px] font-normal tracking-[0.2px]">
            Нажимая на кнопку «К Оплате», я даю свое согласие на обработку
            персональных данных, в соответствии с
            <span className="ml-1 text-pink underline">
              Политикой конфиденциальности
            </span>
            , а так же ознакомлен с условиями оплаты и доставки
          </p>
        </div>
      </form>
    );
  },
);

export default OrderFormBlock;
