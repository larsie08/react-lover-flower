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
import classNames from "classnames";

import {
  IGeosuggestAnswer,
  IOrderForm,
  IOrderFormProps,
} from "./FormTypes/form.interface";
import { GeosuggestResult, PromoCode } from "./FormTypes/form.types";

import { FormControlLabel, Radio, RadioGroup, debounce } from "@mui/material";
import grey from "@mui/material/colors/grey";

const deliveryRadioGroupOptions = ["Самовывоз", "Доставка курьером"] as const;
const payRadioGroupOptions = [
  "Банковская карта",
  "Наличными",
  "Apple pay",
  "Google pay",
  "Криптовалюта",
  "С расчетного счета",
] as const;

const validePromoCode: PromoCode[] = [
  { promoName: "kiriewka", percentageDiscount: 5 },
  { promoName: "bonybog", percentageDiscount: 10 },
];

const labelClassName = "flex flex-col gap-1 text-[14px] font-normal";
const inputClassName =
  "form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]";

export type DeliveryRadioGroupOption =
  (typeof deliveryRadioGroupOptions)[number];
export type PayRadioGroupOptions = (typeof payRadioGroupOptions)[number];

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

  const [discount, setDiscount] = useState<number>(0);
  const [deliveryPrice, setDeliveryPrice] = useState<number>(0);
  const [finalPrice, setFinalPrice] = useState<number>(totalPrice);

  const [listOfAddresses, setListOfAddresses] = useState<GeosuggestResult[]>();

  const [appliedPromoCode, setAppiedPromoCode] = useState<PromoCode>();

  const [isOpenAddressesList, toogleIsOpenAddressesList] = useState(false);

  const watchDelivery = watch("deliveryRadioGroup");
  const watchPayMethods = watch("payRadioGroupOptions");

  const submit: SubmitHandler<IOrderForm> = useCallback(
    (data) => {
      const deliveryAddress = getValues("address").trim();

      submitOrder(data, finalPrice, deliveryAddress, appliedPromoCode);
    },
    [submitOrder]
  );

  const error: SubmitErrorHandler<IOrderForm> = (data) => console.log(data);

  const submitPromoCode = () => {
    const promo = getValues("promoCode").trim().toLowerCase();

    if (promo === "") return alert("Введите промокод");
    if (appliedPromoCode) return alert("Вы уже применили промокод");

    const promoItem = validePromoCode.find(
      (promoObj) => promoObj.promoName === promo
    );

    if (!promoItem) return alert("Промокод не действителен");

    const discount = (finalPrice / 100) * promoItem.percentageDiscount;
    const roundedDiscount = parseFloat(discount.toFixed(2));
    setDiscount(roundedDiscount);

    const discountedPrice = finalPrice - roundedDiscount;
    const roundedDiscountedPrice = parseFloat(discountedPrice.toFixed(2));
    setFinalPrice(roundedDiscountedPrice);

    setAppiedPromoCode(promoItem);
  };

  const updateAddress = debounce(() => {
    const address = getValues("address").trim();

    if (address === "") return;

    setListOfAddresses([]);

    fetchAddress(address);
  }, 350);

  const fetchAddress = async (address: string) => {
    try {
      const { data } = await axios.get<IGeosuggestAnswer>(
        `https://suggest-maps.yandex.ru/v1/suggest?apikey=070fb698-002c-430b-9858-7b9dd513018a&text=${address}&lang=ru&types=province,locality,street,house&results=20`
      );

      toogleIsOpenAddressesList(true);
      setListOfAddresses(data.results);
    } catch (error) {
      console.log("Не удалось получить адрес", error);
    }
  };

  const handleAddressValue = (addressObj: GeosuggestResult) => {
    const textTitle = addressObj.title.text;
    const textSubtitle = addressObj.subtitle?.text;

    const address = formatAddress(textTitle, textSubtitle);
    const deliveryPrice = getRandomDeliveryPrice();

    setValue("address", address);
    setDeliveryPrice(deliveryPrice);

    toogleIsOpenAddressesList(false);
  };

  const formatAddress = (textTitle: string, textSubtitle?: string) => {
    if (textSubtitle) {
      const reversedSubtitleValue = textSubtitle
        .split(",")
        .reverse()
        .join(", ");

      return `${reversedSubtitleValue}, ${textTitle}`;
    }
    return textTitle;
  };

  const getRandomDeliveryPrice = () => Math.round(Math.random() * (1000 - 100));

  return (
    <form>
      <div className="order__forms_block w-[540px]">
        <section className="form__contacts flex flex-col gap-5">
          <h3 className="form_title text-[14px] text-light-turquoise font-bold uppercase">
            Контактные данные
          </h3>
          <div className="flex flex-col gap-5">
            <label className={labelClassName} htmlFor="name">
              Ваше имя*
              <input
                className={inputClassName}
                placeholder="Введите ваше имя"
                type="text"
                {...register("name", { required: true })}
                aria-invalid={errors.name ? true : false}
              />
            </label>
            <label className={labelClassName} htmlFor="phone">
              Ваш телефон*
              <input
                className={inputClassName}
                placeholder="+7 (977) 777-77-77"
                type="number"
                {...register("phone", { required: true })}
                aria-invalid={errors.phone ? true : false}
              />
            </label>
            <label className={labelClassName} htmlFor="email">
              Ваш e-mail*
              <input
                className={inputClassName}
                placeholder="Введите вашу почту"
                type="email"
                {...register("email", { required: true })}
                aria-invalid={errors.email ? true : false}
              />
            </label>
            <label className={labelClassName} htmlFor="secondPhone">
              Телефон получателя (необязательно)
              <input
                className={inputClassName}
                placeholder="+7 (977) 777-77-77"
                type="number"
                {...register("secondPhone")}
              />
            </label>
            <label className={labelClassName} htmlFor="receiverName">
              Имя получателя (необязательно)
              <input
                className={inputClassName}
                placeholder="Введите имя получателя"
                type="text"
                {...register("receiverName")}
              />
            </label>
            <label className={labelClassName} htmlFor="comment">
              Комментарий к заказу
              <input
                className={inputClassName}
                placeholder="Примечания к вашему заказу, особые пожелания отделу доставки"
                type="text"
                {...register("comment")}
              />
            </label>
          </div>
        </section>
        <section className="form__shipping_methods flex flex-col gap-5 mt-16">
          <h3 className="form_title text-[14px] text-light-turquoise font-bold uppercase">
            Доставка
          </h3>
          <Controller
            render={({ field }) => (
              <RadioGroup aria-label="delivery" {...field}>
                {deliveryRadioGroupOptions.map((name) => (
                  <FormControlLabel
                    key={name}
                    value={name}
                    control={
                      <Radio
                        sx={{
                          color: grey[900],
                          "&.Mui-checked": {
                            color: grey[50],
                          },
                        }}
                      />
                    }
                    label={name}
                    className="text-[#353535] font-normal aria-checked:text-[white] uppercase tracking-normal"
                    aria-checked={watchDelivery === name ? true : false}
                  />
                ))}
              </RadioGroup>
            )}
            name="deliveryRadioGroup"
            control={control}
          />
          {watchDelivery === "Доставка курьером" && (
            <div className="flex flex-col gap-5">
              <label className={`${labelClassName} relative`} htmlFor="city">
                Адрес*
                <input
                  className={inputClassName}
                  placeholder="Введите адрес"
                  type="text"
                  autoComplete="off"
                  {...register("address", {
                    required: true,
                    onChange: updateAddress,
                  })}
                  aria-invalid={errors.address ? true : false}
                />
                {listOfAddresses && isOpenAddressesList && (
                  <ul
                    className={classNames(
                      "input__answer_block flex flex-col absolute w-full overflow-hidden top-[85px] z-10 h-[220px]",
                      { ["overflow-y-scroll"]: listOfAddresses.length > 4 }
                    )}
                  >
                    {listOfAddresses.map((addressObj) => (
                      <li
                        key={addressObj.distance.value}
                        onClick={() => handleAddressValue(addressObj)}
                        className="h-[50px] w-full bg-[black] border-y group/address-items hover:bg-light-turquoise active:bg-cherry transition-colors active:shadow-[0_0_10px_0_#1B000E_inset]"
                      >
                        <h4 className="text-[14px] font-normal tracking-[.56px] group-hover/address-items:text-[black] group-active/address-items:text-[white]">
                          {addressObj.title.text}
                        </h4>

                        <span className="text-[14px] font-normal tracking-[.56px] group-hover/address-items:text-[black] group-active/address-items:text-[white]">
                          {addressObj.subtitle?.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </label>

              <div className="flex gap-8">
                <label className={labelClassName} htmlFor="apartmentNumber">
                  Кв/офис
                  <input
                    className={`${inputClassName} w-[160px]`}
                    placeholder="Кв/офис"
                    type="text"
                    {...register("apartmentNumber", { required: true })}
                    aria-invalid={errors.apartmentNumber ? true : false}
                  />
                </label>
                <label className={labelClassName} htmlFor="deliveryTime">
                  Время доставки
                  <input
                    className={`${inputClassName} w-[160px]`}
                    placeholder="__/__"
                    type="time"
                    {...register("deliveryTime", { required: true })}
                    aria-invalid={errors.deliveryTime ? true : false}
                  />
                </label>
              </div>
            </div>
          )}
        </section>
        <section className="form__payment_methods flex flex-col gap-5 mt-16">
          <h3 className="form_title text-[14px] text-light-turquoise font-bold uppercase">
            Доставка
          </h3>
          <Controller
            render={({ field }) => (
              <RadioGroup aria-label="payMethods" {...field}>
                {payRadioGroupOptions.map((name) => (
                  <FormControlLabel
                    key={name}
                    value={name}
                    control={
                      <Radio
                        sx={{
                          color: grey[900],
                          "&.Mui-checked": {
                            color: grey[50],
                          },
                        }}
                      />
                    }
                    label={name}
                    className="text-[#353535] text-[14px] font-normal aria-checked:text-[white] uppercase tracking-normal"
                    aria-checked={watchPayMethods === name ? true : false}
                  />
                ))}
              </RadioGroup>
            )}
            name="payRadioGroupOptions"
            control={control}
          />
        </section>
        <section className="form__promo_code flex flex-col gap-1 mt-16">
          <h3 className="form_title text-[14px] text-light-turquoise font-bold uppercase">
            Оплата
          </h3>
          <div className="h-[60px] flex items-center">
            <input
              className="form__input h-[60px] w-[160px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              placeholder="Промокод"
              type="text"
              id="promoCode"
              {...register("promoCode")}
            />
            <button
              type="button"
              onClick={submitPromoCode}
              className="border-[.5px] w-[190px] h-full p-4 text-[12px] font-bold tracking-[1.2px] border-light-turquoise uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset] transition"
            >
              Применить
            </button>
          </div>
        </section>
        <section className="form__total_price flex flex-col gap-5 mt-16">
          <div className="total_price__block flex flex-col gap-2">
            <div className="total_price flex gap-24">
              <h2 className="text-[30px] text-light-turquoise font-bold uppercase">
                Общая сумма заказа
              </h2>
              <h2 className="text-[30px] text-light-turquoise font-bold uppercase">
                {finalPrice} ₽
              </h2>
            </div>
            <div className="flex gap-4">
              <h3 className="text-[14px] font-normal uppercase">
                Скидка = {discount} ₽
              </h3>
              {appliedPromoCode && (
                <h4 className="text-[14px] font-normal uppercase">
                  ({appliedPromoCode.percentageDiscount} %)
                </h4>
              )}
            </div>
            <h3 className="text-[14px] font-normal uppercase">
              Доставка = {deliveryPrice} ₽
            </h3>
          </div>
          <div className="total_price__button_block flex flex-col gap-[10px]">
            <button
              onClick={handleSubmit(submit, error)}
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
        </section>
      </div>
    </form>
  );
});

export default OrderFormBlock;
