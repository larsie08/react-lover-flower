import { FC } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

interface CorporateForm {
  name: string;
  index: number;
  email: string;
  payment: number;
  contactPerson: string;
  code: number;
  phone: number;
  quantity: number;
  price: number;
  postalAddress: string;
}

export const CorporateFormBlock: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CorporateForm>();

  const submit: SubmitHandler<CorporateForm> = (data) => console.log(data);
  const error: SubmitErrorHandler<CorporateForm> = (data) => console.log(data);

  return (
    <div className="mt-16 relative z-20 flex flex-col gap-5">
      <img
        className="absolute bottom-[8rem] right-[5rem]"
        src="./img/bgElements/CorporateBg/sign.png"
        alt=""
      />
      <h4 className="text-[20px] text-light-turquoise font-normal tracking-[0.8px] uppercase">
        заполните заявку:
      </h4>
      <form
        onSubmit={handleSubmit(submit, error)}
        className="flex flex-col gap-5"
      >
        <div className="flex gap-5">
          <label className="flex flex-col gap-2 w-1/2" htmlFor="name">
            Наименование организации
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none  aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              placeholder="Введите наименование вашей организации"
              type="text"
              id="name"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? true : false}
            />
          </label>
          <label className="flex flex-col gap-2 w-1/2" htmlFor="index">
            УНП
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              placeholder="УНП"
              type="number"
              id="index"
              {...register("index", { required: true })}
              aria-invalid={errors.index ? true : false}
            />
          </label>
        </div>

        <div className="flex gap-5">
          <label className="flex flex-col gap-2 w-1/2" htmlFor="postalAddress">
            Почтовый адрес
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              placeholder="Введите почтовый адрес"
              type="text"
              id="postalAddress"
              {...register("postalAddress", { required: true })}
              aria-invalid={errors.postalAddress ? true : false}
            />
          </label>
          <label className="flex flex-col gap-2 w-1/2" htmlFor="payment">
            Расчетный счет
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              placeholder="Введите номер расчетного счета"
              type="number"
              id="payment"
              {...register("payment", { required: true })}
              aria-invalid={errors.payment ? true : false}
            />
          </label>
        </div>

        <div className="flex gap-5">
          <label className="flex flex-col gap-2 w-1/2" htmlFor="contactPerson">
            Контактное лицо
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              placeholder="Введите имя контактного лица"
              type="text"
              id="contactPerson"
              {...register("contactPerson", { required: true })}
              aria-invalid={errors.contactPerson ? true : false}
            />
          </label>
          <label className="flex flex-col gap-2 w-1/2" htmlFor="code">
            Код банка
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              placeholder="Код банка"
              type="number"
              id="code"
              {...register("code", { required: true })}
              aria-invalid={errors.code ? true : false}
            />
          </label>
        </div>

        <div className="flex gap-5">
          <label className="flex flex-col gap-2 w-1/2" htmlFor="phone">
            Контактный номер телефона
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              placeholder="+7 (977) 777-77-77"
              type="tel"
              id="phone"
              {...register("phone", { required: true })}
              aria-invalid={errors.phone ? true : false}
            />
          </label>
          <label className="flex flex-col gap-2 w-1/2" htmlFor="quantity">
            Предполагаемое количество заявок в месяц
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              placeholder="Введите предполагаемое количество заявок в месяц"
              type="number"
              id="quantity"
              {...register("quantity", { required: true })}
              aria-invalid={errors.quantity ? true : false}
            />
          </label>
        </div>

        <div className="flex flex-col gap-5">
          <label
            className="flex flex-col gap-2 w-1/2 max-w-[758px]"
            htmlFor="price"
          >
            Стоимость букета сотруднику (если разная – указать)
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              placeholder="Укажите стоимость букета сотруднику"
              type="number"
              id="price"
              {...register("price", { required: true })}
              aria-invalid={errors.price ? true : false}
            />
          </label>
          <label
            className="flex flex-col gap-2 w-1/2 max-w-[758px]"
            htmlFor="email"
          >
            Адрес электронной почты
            <input
              className="form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
              placeholder="Укажите ваш адрес электронной почты"
              type="email"
              id="email"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? true : false}
            />
          </label>
        </div>
        <button className="w-[255px] mt-2 text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border focus:border-cherry focus active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]">
          отправить
        </button>
        <p className="max-w-[342px] text-[10px] font-normal tracking-[0.2px] font-roboto_condensed">
          Нажимая на кнопку «Отправить», я даю свое согласие на обработку
          персональных данных, в соответствии с
          <span className="text-[#8B3131] underline ml-1">
            Политикой конфиденциальности
          </span>
        </p>
      </form>
    </div>
  );
};
