import { FC } from "react";

import { DecorativeElement, PathBlock, TitlePageBlock } from "../../components";

import {
  DeliveryAdditionallyBlock,
  DeliveryBlockTitle,
  DeliveryCardBlocks,
  DeliveryInfoBlock,
} from "./companents";

const titlePathBlock = [
  { text: "Главная", path: "/" },
  { text: "доставка и оплата", path: "/delivery" },
];

const TITLE_CLASSNAME =
  "flex items-center md:h-[100px] md:text-[100px] max-md:text-[40px] font-normal font-cormorant tracking-[2px] uppercase";
const SUBTITLE_CLASSNAME =
  "flex items-center ml-20 md:h-[100px] md:text-[100px] max-md:text-[40px] font-normal font-cormorant tracking-[2px] uppercase";
const TITLE_WRAPPER_CLASSNAME = "delivery_page__title mt-14";

const DeliveryPage: FC = () => {
  return (
    <div className="delivery_page relative pt-[120px] pb-[160px] bg-[#040A0A]">
      <DecorativeElement className="absolute right-0 top-0 w-[505px] h-[625px] rounded-[625px] bg-[#6B535F] blur-[125px] max-md:hidden" />
      <DecorativeElement className="absolute left-0 top-0 w-[274px] h-[220px] rounded-[274px] bg-[#6B535F] blur-[125px]" />
      <DecorativeElement className="absolute -left-[5rem] md:top-[70rem] max-md:top-[120rem] md:w-[538px] md:h-[431px] max-md:w-[320px] max-md:h-[260px] rounded-[537px] bg-[#6B535F] blur-[125px]" />
      <picture>
        <source
          srcSet="./img/PagesImg/DeliveryImg/adaptiveFlowerTop.png 640w"
          media="(max-width: 767px)"
        />
        <img
          className="absolute right-0 md:w-[550px] md:h-[660px] max-md:w-[150px] max-md:h-[150px] z-10"
          src="./img/PagesImg/DeliveryImg/deliveryFlowerTop.png"
          srcSet="./img/PagesImg/DeliveryImg/deliveryFlowerTop.png 1280w, ./img/PagesImg/DeliveryImg/adaptiveFlowerTop.png 640w"
          loading="lazy"
          alt="flower"
        />
      </picture>
      <picture>
        <source
          srcSet="./img/PagesImg/DeliveryImg/adaptiveFlowerCenter.png 640w"
          media="(max-width: 767px)"
        />
        <img
          className="absolute left-0 md:top-[75rem] max-md:top-[125rem] md:w-[370px] md:h-[880px] max-md:w-[300px] max-md:h-[400px] z-10"
          src="./img/PagesImg/DeliveryImg/deliveryFlowerCenter.png"
          srcSet="./img/PagesImg/DeliveryImg/deliveryFlowerCenter.png 1280w, ./img/PagesImg/DeliveryImg/adaptiveFlowerCenter.png 640w"
          loading="lazy"
          alt="flower"
        />
      </picture>
      <div className="delivery_page__wrapper relative container mx-auto max-md:px-3 z-20">
        <PathBlock items={titlePathBlock} />

        <TitlePageBlock
          title="доставка"
          subtitle="и оплата"
          titleClassName={TITLE_CLASSNAME}
          subtitleClassName={SUBTITLE_CLASSNAME}
          wrapperClassName={TITLE_WRAPPER_CLASSNAME}
        />

        <div className="delivery_page__subtitle flex items-center gap-3 max-md:mt-[3rem]">
          <p className="text-[100px] text-pink font-normal font-cormorant">!</p>
          <div className="flex flex-col gap-1">
            <DeliveryBlockTitle title="Дорогие клиенты!" />

            <p className="max-w-[570px] text-[14px] font-normal tracking-[.56px] uppercase">
              Во время пандемии (COVID-19) компания Lover Flower призывает всех
              меньше контактировать с другими людьми для защиты себя и своих
              близких. Именно поэтому мы организовали
              <span className="text-[14px] text-light-turquoise font-normal tracking-[.56px] uppercase">
                {" "}
                БЕСКОНТАКТНУЮ ДОСТАВКУ
              </span>
            </p>
          </div>
        </div>

        <DeliveryCardBlocks />
        <DeliveryInfoBlock />
        <DeliveryAdditionallyBlock />
      </div>
      <picture>
        <source
          srcSet="./img/PagesImg/DeliveryImg/adaptiveFlowerBottom.png 640w"
          media="(max-width: 767px)"
        />
        <img
          className="absolute right-0 md:-bottom-[2rem] max-md:-bottom-[7rem] md:w-[800px] md:h-[700px] max-md:w-[300px] max-md:h-[350px] z-10"
          src="./img/PagesImg/DeliveryImg/deliveryFlowerFooter.png"
          srcSet="./img/PagesImg/DeliveryImg/deliveryFlowerFooter.png 1280w, ./img/PagesImg/DeliveryImg/adaptiveFlowerBottom.png 640w"
          loading="lazy"
          alt="flower"
        />
      </picture>
      <img
        className="absolute max-md:bottom-[2rem] md:left-[25rem] max-md:left-0 -rotate-[14.166deg]"
        src="./img/PagesImg/DeliveryImg/sign.png"
        loading="lazy"
        alt="lower flower"
      ></img>
      <DecorativeElement className="absolute md:left-0 max-md:-left-[5rem] md:-bottom-[10rem] max-md:-bottom-[3rem] w-[205px] md:h-[436px] max-md:h-[100px] rounded-[436px] bg-[#6B535F] md:blur-[125px] max-md:blur-[50px]" />
      <DecorativeElement className="absolute right-0 md:-bottom-[2rem] max-md:-bottom-[3rem] md:w-[489px] max-md:w-[250px] md:h-[818px] max-md:h-[100px] rounded-[500px] bg-[#6B535F] md:blur-[125px] max-md:blur-[50px]" />
    </div>
  );
};

export default DeliveryPage;
