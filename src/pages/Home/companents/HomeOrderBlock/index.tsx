import { FC, memo } from "react";

import { StepBlock } from "./StepBlock";
import { DecorativeElement } from "../../../../components";
import { HomeTitleBlock } from "../TitleBlock";

const steps = [
  {
    step: 1,
    info: "Выберите какие цветы или подарки вы хотите купить",
  },
  {
    step: 2,
    info: "Оформите заказ, и мы отправим вам подтверждение на электронную почту, а так же менеджер свяжется с вами по телефону или в WhatsApp",
  },
  {
    step: 3,
    info: "Наши флористы бережно подойдут к созданию букета цветов в самом начале дня или накануне",
  },
  {
    step: 4,
    info: "Один из наших курьеров или партнёров доставит ваш заказ по указанному адресу. Мы отправим вам сообщение в Whats App как только заказ будет доставлен",
  },
  {
    step: 5,
    info: "Наслаждайтесь цветами , если вы заказали их для дома или любовью, которой поделились, если вы заказали для друга",
  },
];

const ORDER_TITLE_CLASSNAME =
  "title flex items-center text-[100px] h-[100px] font-normal tracking-[2px] uppercase font-cormorant max-md:text-[40px] max-md:tracking-[0.02em] max-md:h-[50px]";

export const HomeOrderBlock: FC = memo(() => {
  return (
    <div className="about_order relative max-lg:mt-24 mt-[250px]">
      <DecorativeElement className="max-lg:absolute max-lg:right-3 max-lg:top-[10rem] max-lg:h-[166px] max-lg:w-[390px] max-lg:rotate-[-37.57deg] max-lg:rounded-[50%] max-lg:bg-cherry max-lg:blur-[125px] lg:hidden" />
      <DecorativeElement className="max-lg:absolute max-lg:-left-[6rem] max-lg:bottom-0 max-lg:h-[274px] max-lg:w-[335px] max-lg:-rotate-[71.859deg] bg-light-turquoise max-lg:blur-[200px] lg:hidden" />
      <img
        className="absolute top-10 w-[562px] h-[845px] max-lg:w-[250px] max-lg:h-[500px]"
        srcSet="./img/PagesImg/HomeImg/IntroImg/flowerBg.png 1280w, ./img/PagesImg/HomeImg/IntroImg/flower-640.png 640w"
        alt="Flower"
      />

      <div className="about_order__wrapper container mx-auto">
        <HomeTitleBlock
          title="Как сделать"
          subtitle="заказ"
          titleClassName={ORDER_TITLE_CLASSNAME}
          subtitleClassName={ORDER_TITLE_CLASSNAME}
          animation="fade-right"
          
        />
        <div className="mb-5 sm:ml-28 flex justify-center max-lg:ml-[5rem] max-lg:mt-3">
          <div className="bg-pink w-[65px] h-[10px] max-lg:mt-5" />
        </div>
        <div className="about_order__content relative flex sm:content-end flex-col sm:gap-10 sm:gap-x-[110px] sm:flex-wrap sm:h-[500px] max-lg:h-full max-lg:mt-5 max-lg:gap-12">
          {steps.map((obj) => (
            <StepBlock key={obj.info} step={obj.step} info={obj.info} />
          ))}
          <img
            className="absolute right-0 sm:-bottom-[4rem] rotate-[-11.947deg] max-lg:rotate-[-10.255deg] max-lg:w-[137px] max-lg:-bottom-[4rem] max-lg:right-5 max-xl:right-[1rem] z-10"
            srcSet="./img/signature.png 1280w, ./img/signature-640.png 640w"
          />
          <div className="relative z-10 border-r-[1px] border-pink w-0 h-[437px] float-right max-lg:hidden" />
        </div>
      </div>
    </div>
  );
});
