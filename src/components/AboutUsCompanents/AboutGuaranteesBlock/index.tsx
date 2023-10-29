import { FC } from "react";

export const AboutGuaranteesBlock: FC = () => {
  return (
    <div className="about_us__guarantees max-w-[825px] flex flex-col gap-5 ml-48 mt-24">
      <h3 className="text-[60px] text-light-turquoise font-normal font-cormorant leading-[64px] tracking-[1.2px] uppercase">
        гарантии
      </h3>
      <p className="text-[20px] font-light tracking-[0.4px] uppercase">
        Каждый цветок уникален и чтобы вы были уверены в качестве, мы пришлем
        вам фотографию именно вашего букета до его отправки получателю. Вся
        предоставленная Вами информация конфиденциальна и будет известна только
        нам и курьеру для осуществления доставки.
      </p>
    </div>
  );
};
