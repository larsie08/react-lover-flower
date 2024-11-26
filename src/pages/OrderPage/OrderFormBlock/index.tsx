import { FC, memo, useCallback, useState } from "react";
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  Controller,
  DefaultValues,
} from "react-hook-form";
import { useOutletContext } from "react-router-dom";
import axios from "axios";
import debounce from "debounce";

import {
  IGeosuggestAnswer,
  IOrderForm,
  IOrderFormProps,
} from "./FormTypes/form.interface";
import {
  FormSectionProps,
  GeosuggestResult,
  InputProps,
  PromoCode,
  PromoCodeInputProps,
  SuggestionListProps,
  SummaryProps,
} from "./FormTypes/form.types";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import grey from "@mui/material/colors/grey";

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

const PROMO_CODES: PromoCode[] = [
  { promoName: "kiriewka", percentageDiscount: 5 },
  { promoName: "bonybog", percentageDiscount: 10 },
];

const LABEL_CLASS = "flex flex-col gap-1 text-[14px] font-normal";
const INPUT_CLASS =
  "form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]";

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

const OrderFormBlock: FC = memo(() => {
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

  const { submitOrder, totalPrice } = useOutletContext<IOrderFormProps>();

  const [discount, setDiscount] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(totalPrice);
  const [addressSuggestions, setAddressSuggestions] =
    useState<GeosuggestResult[]>();
  const [appliedPromo, setAppliedPromo] = useState<PromoCode | undefined>(
    undefined
  );
  const [isAddressListOpen, toggleAddressList] = useState(false);

  const watchDelivery = watch("deliveryRadioGroup");
  const watchPayMethods = watch("payRadioGroupOptions");

  const applyPromoCode = useCallback(() => {
    const promo = getValues("promoCode").trim().toLowerCase();
    if (!promo) return alert("Введите промокод");
    if (appliedPromo) return alert("Промокод уже применён");

    const promoItem = PROMO_CODES.find(({ promoName }) => promoName === promo);
    if (!promoItem) return alert("Промокод недействителен");

    const calculatedDiscount =
      (finalPrice * promoItem.percentageDiscount) / 100;
    setDiscount(Number(calculatedDiscount.toFixed(2)));
    setFinalPrice(finalPrice - calculatedDiscount);
    setAppliedPromo(promoItem);
  }, []);

  const fetchAddressSuggestions = debounce(async () => {
    const address = getValues("address").trim();
    if (!address) return;

    try {
      const { data } = await axios.get<IGeosuggestAnswer>(
        `https://suggest-maps.yandex.ru/v1/suggest?apikey=YOUR_API_KEY&text=${address}&lang=ru&results=20`
      );
      setAddressSuggestions(data.results);
      toggleAddressList(true);
    } catch {
      console.log("Ошибка получения адреса");
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

  const submitForm: SubmitHandler<IOrderForm> = useCallback(
    (data) => {
      submitOrder(data, finalPrice, getValues("address").trim(), appliedPromo);
    },
    [submitOrder, finalPrice, appliedPromo]
  );

  const errorHandler: SubmitErrorHandler<IOrderForm> = (errors) =>
    console.log(errors);

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
                  className="text-[#353535] font-normal aria-checked:text-[white] uppercase tracking-normal"
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
            <div className="flex gap-8">
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
                  className="text-[#353535] font-normal aria-checked:text-[white] uppercase tracking-normal"
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

      <div className="total_price__button_block flex flex-col gap-[10px] mt-7">
        <button
          onClick={handleSubmit(submitForm, errorHandler)}
          type="submit"
          className="w-[255px] mt-2 transition-all cursor-pointer text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]"
        >
          К оплате
        </button>

        <p className="max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed">
          Нажимая на кнопку «К Оплате», я даю свое согласие на обработку
          персональных данных, в соответствии с
          <span className="text-pink underline ml-1">
            Политикой конфиденциальности
          </span>
          , а так же ознакомлен с условиями оплаты и доставки
        </p>
      </div>
    </form>
  );
});

export default OrderFormBlock;

const Input: FC<InputProps> = memo(
  ({
    label,
    placeholder,
    type = "text",
    register,
    error,
    autoComplete = "on",
  }) => (
    <label className={LABEL_CLASS}>
      {label}
      <input
        className={INPUT_CLASS}
        placeholder={placeholder}
        type={type}
        {...register}
        autoComplete={autoComplete}
        aria-invalid={error ? true : false}
      />
    </label>
  )
);

const FormSection: FC<FormSectionProps> = memo(({ title, children }) => (
  <section className="form-section flex flex-col gap-1 [&:not(:first-child)]:mt-16">
    <h3 className="section-title text-[14px] text-light-turquoise font-bold uppercase">
      {title}
    </h3>
    <div className="flex flex-col gap-5 mt-5">{children}</div>
  </section>
));

const PromoCodeInput: FC<PromoCodeInputProps> = memo(
  ({ applyPromoCode, register }) => (
    <div className="promo-code-input h-[60px] flex items-center">
      <input
        className="promo-input h-[60px] w-[160px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
        placeholder="Промокод"
        type="text"
        {...register}
      />
      <button
        type="button"
        onClick={applyPromoCode}
        className="apply-promo-btn border-[.5px] w-[190px] h-full p-4 text-[12px] font-bold tracking-[1.2px] border-light-turquoise uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset] transition"
      >
        Применить
      </button>
    </div>
  )
);

const SuggestionList: FC<SuggestionListProps> = memo(
  ({ suggestions, onSelect }) => (
    <ul className="suggestion-list">
      {suggestions.map((item) => (
        <li
          key={item.distance.value}
          onClick={() => onSelect(item)}
          className="suggestion-item"
        >
          <h4>{item.title.text}</h4>
          <span>{item.subtitle?.text}</span>
        </li>
      ))}
    </ul>
  )
);

const Summary: FC<SummaryProps> = memo(
  ({ finalPrice, discount, deliveryPrice, appliedPromo }) => (
    <div className="summary flex flex-col gap-2 mt-16">
      <div className="flex gap-24">
        <h2 className="text-[30px] text-light-turquoise font-bold uppercase">
          Общая сумма заказа
        </h2>
        <h2 className="text-[30px] text-light-turquoise font-bold uppercase">
          {finalPrice} ₽
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[14px] font-normal uppercase">
          Скидка: {discount} ₽ ({appliedPromo?.percentageDiscount}%)
        </h3>
        <h3 className="text-[14px] font-normal uppercase">
          Доставка: {deliveryPrice} ₽
        </h3>
      </div>
    </div>
  )
);
