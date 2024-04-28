import { FC } from "react";
import {
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
  Controller,
  DefaultValues,
} from "react-hook-form";
import { useOutletContext } from "react-router-dom";

import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import grey from "@mui/material/colors/grey";

type DeliveryRadioGroupOption = (typeof deliveryRadioGroupOptions)[number];
type PayRadioGroupOptions = (typeof payRadioGroupOptions)[number];

export interface OrderForm {
  name: string;
  phone: string;
  email: string;
  secondPhone: string;
  receiverName: string;
  comment: string;
  deliveryRadioGroup: DeliveryRadioGroupOption;
  payRadioGroupOptions: PayRadioGroupOptions;
  promoCode: string;
  promoButton: boolean;
}

const deliveryRadioGroupOptions = ["Самовывоз", "Доставка курьером"] as const;
const payRadioGroupOptions = [
  "Банковская карта",
  "Наличными",
  "Apple pay",
  "Google pay",
  "Криптовалюта",
  "С расчетного счета",
] as const;

const labelClassName = "flex flex-col gap-1 text-[14px] font-normal";
const inputClassName =
  "form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]";

const defaultValues: DefaultValues<OrderForm> = {
  name: "",
  phone: "",
  email: "",
  secondPhone: "",
  receiverName: "",
  comment: "",
  deliveryRadioGroup: "Самовывоз",
  payRadioGroupOptions: "Банковская карта",
  promoCode: "",
  promoButton: false,
};

const OrderFormBlock: FC = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<OrderForm>({
    defaultValues,
  });

  const totalPrice = useOutletContext<number>();

  const submit: SubmitHandler<OrderForm> = (data) => console.log(data);
  const error: SubmitErrorHandler<OrderForm> = (data) => console.log(data);

  const watchDelivery = watch("deliveryRadioGroup");
  const watchPayMethods = watch("payRadioGroupOptions");

  return (
    <form onSubmit={handleSubmit(submit, error)}>
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
                {deliveryRadioGroupOptions.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
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
                    label={item}
                    className="text-[#353535] font-normal aria-checked:text-[white] uppercase tracking-normal"
                    aria-checked={watchDelivery === item ? true : false}
                  />
                ))}
              </RadioGroup>
            )}
            name="deliveryRadioGroup"
            control={control}
          />
          {/* {watchDelivery === "Доставка курьером" && <div>delivery</div>} */}
        </section>
        <section className="form__payment_methods flex flex-col gap-5 mt-16">
          <h3 className="form_title text-[14px] text-light-turquoise font-bold uppercase">
            Доставка
          </h3>
          <Controller
            render={({ field }) => (
              <RadioGroup aria-label="delivery" {...field}>
                {payRadioGroupOptions.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
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
                    label={item}
                    className="text-[#353535] text-[14px] font-normal aria-checked:text-[white] uppercase tracking-normal"
                    aria-checked={watchPayMethods === item ? true : false}
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
              className="border-[.5px] w-[190px] h-full p-4 text-[12px] font-bold tracking-[1.2px] border-light-turquoise uppercase hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset] transition"
              {...register("promoButton")}
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
                {totalPrice} ₽
              </h2>
            </div>
            <h3 className="text-[14px] font-normal uppercase">Скидка = 0 ₽</h3>
            <h3 className="text-[14px] font-normal uppercase">
              Доставка = 0 ₽
            </h3>
          </div>
          <div className="total_price__button_block flex flex-col gap-[10px]">
            <input
              type="submit"
              value="К оплате"
              className="w-[255px] mt-2 transition-all cursor-pointer text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]"
            />

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
};

export default OrderFormBlock;
