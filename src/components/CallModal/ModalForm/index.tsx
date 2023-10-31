import { FC } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";

interface ModalForm {
  name: string;
  tel: number;
}

export const ModalForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ModalForm>();

  const submit: SubmitHandler<ModalForm> = (data) => {
    console.log(data);
  };

  const error: SubmitErrorHandler<ModalForm> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(submit, error)}
      className="call_modal__form flex flex-col gap-3 mt-3"
    >
      <input
        className="w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:bg-[#0F2222] placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
        type="text"
        placeholder="Ваше имя"
        {...register("name", { required: true })}
        aria-invalid={errors.name ? true : false}
      />
      <input
        className="w-full h-[60px] border border-light-turquoise bg-[#0F2222] p-4 placeholder:text-[#395959] text-[14px] font-normal tracking-[.56px] uppercase aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]"
        type="tel"
        placeholder="+7 (977) 777-77-77"
        {...register("name", { required: true })}
        aria-invalid={errors.name ? true : false}
      />
      <button className="w-[255px] mt-2 text-[black] text-[12px] border border-light-turquoise font-bold tracking-[1.2px] uppercase bg-light-turquoise p-4 hover:border-cherry hover:bg-cherry hover:text-[white] focus:border-cherry active:bg-cherry active:text-[white] active:shadow-[0_0_10px_0_#1B000E_inset]">
        отправить
      </button>
    </form>
  );
};
