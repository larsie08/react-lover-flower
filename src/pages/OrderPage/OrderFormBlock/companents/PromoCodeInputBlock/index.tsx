import { FC, memo } from "react";
import { PromoCodeInputProps } from "../../FormTypes/form.types";

export const PromoCodeInput: FC<PromoCodeInputProps> = memo(
  ({ applyPromoCode, register }) => (
    <div className="promo-code-input flex h-[60px] w-full items-center">
      <input
        className="promo-input h-[60px] flex-1 border border-[#555] bg-[#040A0A] p-4 text-[14px] font-normal tracking-[.56px] outline-none placeholder:text-[#555] aria-[invalid=true]:border-[#FF3A44] aria-[invalid=true]:placeholder:text-[#FF3A44] max-lg:max-w-[130px] lg:w-[160px]"
        placeholder="Промокод"
        type="text"
        {...register}
      />
      <button
        type="button"
        onClick={applyPromoCode}
        className="apply-promo-btn h-full flex-1 border-[.5px] border-light-turquoise p-4 text-[12px] font-bold uppercase tracking-[1.2px] transition hover:bg-light-turquoise hover:text-[black] focus:border-light-turquoise active:shadow-[0_0_10px_0_#01281F_inset] max-lg:max-w-[170px] lg:w-[190px]"
      >
        Применить
      </button>
    </div>
  ),
);
