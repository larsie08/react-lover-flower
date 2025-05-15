import { FC, HTMLInputTypeAttribute } from "react";
import {
  useForm,
  SubmitHandler,
  SubmitErrorHandler,
  UseFormRegisterReturn,
  FieldError,
} from "react-hook-form";
import { useScreenWidth } from "../../../../utils/useScreenWidth";
import { AlertColor } from "@mui/material";
import { useAppDispatch } from "../../../../redux/store";
import {
  setModalState,
  setSeverityOption,
} from "../../../../redux/modal/slice";
import { ModalType } from "../../../../redux/modal/types";

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

type InputProps = {
  labelText: string;
  type: HTMLInputTypeAttribute;
  id: string;
  placeHolderText: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export const CorporateFormBlock: FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CorporateForm>();

  const screenWidth = useScreenWidth();

  const isMobile = screenWidth >= 1024;

  const sendAlert = (severityOption: AlertColor) => {
    dispatch(setModalState({ modalType: ModalType.Alert, isOpen: true }));
    dispatch(setSeverityOption({ severity: severityOption }));
  };

  const submit: SubmitHandler<CorporateForm> = (data) => {
    sendAlert("success");
    console.log(data);
  };
  const error: SubmitErrorHandler<CorporateForm> = (data) => {
    sendAlert("error");
    console.log(data);
  };

  return (
    <div className="relative z-20 mt-16 flex flex-col gap-5">
      <img
        className="absolute bottom-[8rem] right-[5rem] max-lg:hidden"
        src="./img/bgElements/CorporateBg/sign.png"
        loading="lazy"
        alt="sign"
      />
      <h4 className="text-[20px] font-normal uppercase tracking-[0.8px] text-light-turquoise">
        заполните заявку:
      </h4>
      <form
        onSubmit={handleSubmit(submit, error)}
        className="flex flex-col gap-5 max-lg:items-center"
      >
        <div className="flex w-full gap-5 max-lg:flex-col max-lg:items-center">
          <FormInput
            labelText="Наименование организации"
            placeHolderText="Введите наименование вашей организации"
            type="text"
            id="name"
            register={register("name", { required: true })}
            error={errors.name}
          />
          <FormInput
            labelText={isMobile ? "УНП" : "Почтовый адрес"}
            placeHolderText={isMobile ? "УНП" : "Введите почтовый адрес"}
            type={isMobile ? "number" : "text"}
            id={isMobile ? "index" : "postalAddress"}
            register={register(isMobile ? "index" : "postalAddress", {
              required: true,
            })}
            error={isMobile ? errors.index : errors.postalAddress}
          />
        </div>

        <div className="flex w-full gap-5 max-lg:flex-col max-lg:items-center">
          <FormInput
            labelText={isMobile ? "Почтовый адрес" : "Контактное лицо"}
            placeHolderText={
              isMobile
                ? "Введите почтовый адрес"
                : "Введите имя контактного лица"
            }
            type="text"
            id={isMobile ? "postalAddress" : "contactPerson"}
            register={register(isMobile ? "postalAddress" : "contactPerson", {
              required: true,
            })}
            error={isMobile ? errors.postalAddress : errors.contactPerson}
          />
          <FormInput
            labelText={
              isMobile ? "Расчетный счет" : "Контактный номер телефона"
            }
            placeHolderText={isMobile ? "Расчетный счет" : "+7 (977) 777-77-77"}
            type="number"
            id={isMobile ? "payment" : "phone"}
            register={register(isMobile ? "payment" : "phone", {
              required: true,
            })}
            error={isMobile ? errors.payment : errors.phone}
          />
        </div>

        <div className="flex w-full gap-5 max-lg:flex-col max-lg:items-center">
          <FormInput
            labelText={
              isMobile
                ? "Контактное лицо"
                : "Стоимость букета сотруднику (если разная – указать)"
            }
            placeHolderText={
              isMobile
                ? "Введите имя контактного лица"
                : "Укажите стоимость букета сотруднику"
            }
            type={isMobile ? "text" : "number"}
            id={isMobile ? "contactPerson" : "price"}
            register={register(isMobile ? "contactPerson" : "price", {
              required: true,
            })}
            error={isMobile ? errors.contactPerson : errors.price}
          />
          <FormInput
            labelText={isMobile ? "Код банка" : "Адрес электронной почты"}
            placeHolderText={
              isMobile ? "Код банка" : "Укажите ваш адрес электронной почты"
            }
            type={isMobile ? "number" : "email"}
            id={isMobile ? "code" : "email"}
            register={register(isMobile ? "code" : "email", { required: true })}
            error={isMobile ? errors.code : errors.email}
          />
        </div>

        <div className="flex w-full gap-5 max-lg:flex-col max-lg:items-center">
          <FormInput
            labelText={isMobile ? "Контактный номер телефона" : "УНП"}
            placeHolderText={isMobile ? "+7 (977) 777-77-77" : "УНП"}
            type={isMobile ? "tel" : "number"}
            id={isMobile ? "phone" : "index"}
            register={register(isMobile ? "phone" : "index", {
              required: true,
            })}
            error={isMobile ? errors.phone : errors.index}
          />
          <FormInput
            labelText={
              isMobile
                ? "Предполагаемое количество заявок в месяц"
                : "Расчетный счет"
            }
            placeHolderText={
              isMobile
                ? "Введите предполагаемое количество заявок в месяц"
                : "Расчетный счет"
            }
            type="number"
            id={isMobile ? "quantity" : "payment"}
            register={register(isMobile ? "quantity" : "payment", {
              required: true,
            })}
            error={isMobile ? errors.quantity : errors.payment}
          />
        </div>

        <div className="flex w-full flex-col gap-5 max-lg:items-center">
          <FormInput
            labelText={
              isMobile
                ? "Стоимость букета сотруднику (если разная – указать)"
                : "Код банка"
            }
            placeHolderText={
              isMobile ? "Укажите стоимость букета сотруднику" : "Код банка"
            }
            type="number"
            id={isMobile ? "price" : "code"}
            register={register(isMobile ? "price" : "code", { required: true })}
            error={isMobile ? errors.price : errors.code}
          />
          <FormInput
            labelText={
              isMobile
                ? "Адрес электронной почты"
                : "Предполагаемое количество заявок в месяц"
            }
            placeHolderText={
              isMobile
                ? "Укажите ваш адрес электронной почты"
                : "Введите предполагаемое количество заявок в месяц"
            }
            type={isMobile ? "email" : "number"}
            id={isMobile ? "email" : "quantity"}
            register={register(isMobile ? "email" : "quantity", {
              required: true,
            })}
            error={isMobile ? errors.email : errors.quantity}
          />
        </div>
        <button className="focus mt-2 w-[255px] border border-light-turquoise bg-light-turquoise p-4 text-[12px] font-bold uppercase tracking-[1.2px] text-[black] hover:border-cherry hover:bg-cherry hover:text-[white] focus:border focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]">
          отправить
        </button>
        <p className="max-w-[342px] font-roboto_condensed text-[10px] font-normal tracking-[0.2px]">
          Нажимая на кнопку «Отправить», я даю свое согласие на обработку
          персональных данных, в соответствии с
          <span className="ml-1 text-[#8B3131] underline">
            Политикой конфиденциальности
          </span>
        </p>
      </form>
    </div>
  );
};

const FormInput: FC<InputProps> = ({
  labelText,
  type,
  register,
  placeHolderText,
  id,
  error,
}) => {
  return (
    <label
      className="flex w-full flex-1 flex-col gap-2 max-lg:max-w-[300px] max-lg:text-[14px] lg:max-w-[758px]"
      htmlFor={type}
    >
      {labelText}
      <input
        className="form__input h-[60px] w-full border border-[#555] bg-[#040A0A] p-4 text-[14px] font-normal tracking-[.56px] outline-none placeholder:text-[#555] aria-[invalid=true]:border-[#FF3A44] aria-[invalid=true]:placeholder:text-[#FF3A44]"
        placeholder={placeHolderText}
        type={type}
        id={id}
        {...register}
        aria-invalid={error ? true : false}
      />
    </label>
  );
};
