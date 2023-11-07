import { FC } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler } from "react-hook-form";

interface MyForm {
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
  } = useForm<MyForm>();

  const submit: SubmitHandler<MyForm> = (data) => console.log(data);
  const error: SubmitErrorHandler<MyForm> = (data) => console.log(data);

  return (
    <div className="mt-16 relative z-20 flex flex-col gap-5">
      <img className="absolute bottom-[8rem] right-[5rem]" src="./img/bgElements/CorporateBg/sign.png" alt="" />
      <h4 className="text-[20px] text-light-turquoise font-normal tracking-[0.8px] uppercase">
        заполните заявку:
      </h4>
      <form
        onSubmit={handleSubmit(submit, error)}
        className="flex flex-col gap-5"
      >
        <div className="flex gap-5">
          <label className="flex flex-col gap-2 w-1/2" htmlFor="">
            Наименование организации
            <input
              className="h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px]"
              placeholder="Введите наименование вашей организации"
              type="text"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? true : false}
            />
          </label>
          <label className="flex flex-col gap-2 w-1/2" htmlFor="">
            УНП
            <input
              className="h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px]"
              placeholder="УНП"
              type="number"
              {...register("index", { required: true })}
              aria-invalid={errors.index ? true : false}
            />
          </label>
        </div>

        <div className="flex gap-5">
          <label className="flex flex-col gap-2 w-1/2" htmlFor="">
            Почтовый адрес
            <input
              className="h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px]"
              placeholder="Введите почтовый адрес"
              type="text"
              {...register("postalAddress", { required: true })}
              aria-invalid={errors.postalAddress ? true : false}
            />
          </label>
          <label className="flex flex-col gap-2 w-1/2" htmlFor="">
            Расчетный счет
            <input
              className="h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px]"
              placeholder="Введите номер расчетного счета"
              type="number"
              {...register("payment", { required: true })}
              aria-invalid={errors.payment ? true : false}
            />
          </label>
        </div>

        <div className="flex gap-5">
          <label className="flex flex-col gap-2 w-1/2" htmlFor="">
            Контактное лицо
            <input
              className="h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px]"
              placeholder="Введите имя контактного лица"
              type="text"
              {...register("contactPerson", { required: true })}
              aria-invalid={errors.contactPerson ? true : false}
            />
          </label>
          <label className="flex flex-col gap-2 w-1/2" htmlFor="">
            Код банка
            <input
              className="h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px]"
              placeholder="Код банка"
              type="number"
              {...register("code", { required: true })}
              aria-invalid={errors.code ? true : false}
            />
          </label>
        </div>

        <div className="flex gap-5">
          <label className="flex flex-col gap-2 w-1/2" htmlFor="">
            Контактный номер телефона
            <input
              className="h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px]"
              placeholder="+7 (977) 777-77-77"
              type="tel"
              {...register("phone", { required: true })}
              aria-invalid={errors.phone ? true : false}
            />
          </label>
          <label className="flex flex-col gap-2 w-1/2" htmlFor="">
            Предполагаемое количество заявок в месяц
            <input
              className="h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px]"
              placeholder="Введите предполагаемое количество заявок в месяц"
              type="number"
              {...register("quantity", { required: true })}
              aria-invalid={errors.quantity ? true : false}
            />
          </label>
        </div>

        <div className="flex flex-col gap-5">
          <label className="flex flex-col gap-2 w-1/2 max-w-[758px]" htmlFor="">
            Стоимость букета сотруднику (если разная – указать)
            <input
              className="h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px]"
              placeholder="Укажите стоимость букета сотруднику"
              type="number"
              {...register("price", { required: true })}
              aria-invalid={errors.price ? true : false}
            />
          </label>
          <label className="flex flex-col gap-2 w-1/2 max-w-[758px]" htmlFor="">
            Адрес электронной почты
            <input
              className="h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px]"
              placeholder="Укажите ваш адрес электронной почты"
              type="email"
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
