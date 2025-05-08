import { FC, memo } from "react";
import { PromoCodeInputProps } from "../../FormTypes/form.types";

export const PromoCodeInput: FC<PromoCodeInputProps> = memo(
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
