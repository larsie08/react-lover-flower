import { FC, memo } from "react";
import { InputProps } from "../../FormTypes/form.types";

const LABEL_CLASS = "flex flex-col gap-1 text-[14px] font-normal";
const INPUT_CLASS =
  "form__input h-[60px] border border-[#555] bg-[#040A0A] p-4 placeholder:text-[#555] text-[14px] font-normal tracking-[.56px] outline-none aria-[invalid=true]:placeholder:text-[#FF3A44] aria-[invalid=true]:border-[#FF3A44]";

export const Input: FC<InputProps> = memo(
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
