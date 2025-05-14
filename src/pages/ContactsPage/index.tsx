import { FC } from "react";

import { DecorativeElement, PathBlock, TitlePageBlock } from "../../components";
import {
  ContactsCardBlocks,
  ContactsFormBlock,
  ContactsMapBlock,
} from "./companents";

const titlePathBlock = [
  { text: "Главная", path: "/" },
  { text: "контакты", path: "/contacts" },
];

const TITLE_CLASSNAME =
  "flex items-center lg:ml-20 lg:h-[100px] lg:text-[100px] max-lg:text-[40px] font-normal font-cormorant tracking-[2px] uppercase";
const TITLE_WRAPPER_CLASSNAME =
  "contacts__title relative z-10 lg:mt-14 max-lg:mt-5";

const ContactsPage: FC = () => {
  return (
    <div className="contacts pt-[120px] max-lg:px-4 relative bg-[#040A0A] lg:pb-[200px] max-lg:pb-[150px]">
      <DecorativeElement className="absolute lg:right-0 max-lg:left-[-10rem] top-0 w-[342px] h-[274px] rounded-[342px] bg-[#922D2D] lg:blur-[125px] max-lg:blur-[100px]" />
      <img
        className="absolute right-0 top-0"
        src="./img/PagesImg/ContactsImg/ContactsFlowerTop.png"
        loading="lazy"
        alt="flower"
      />
      <DecorativeElement className="absolute lg:-left-36 max-lg:left-0 lg:top-0 max-lg:top-[40rem] lg:w-[465px] max-lg:w-[270px] lg:h-[220px] max-lg:h-[220px] -rotate-[71.859deg] rounded-[466px] bg-[#922D2D] lg:blur-[125px] max-lg:blur-[125px]" />
      <img
        className="absolute left-0 max-lg:hidden"
        src="./img/PagesImg/ContactsImg/ContactsFlowerMiddle.png"
        loading="lazy"
        alt="flower"
      />
      <div className="contacts__wrapper container mx-auto">
        <PathBlock items={titlePathBlock} />

        <TitlePageBlock
          title="контакты"
          titleClassName={TITLE_CLASSNAME}
          wrapperClassName={TITLE_WRAPPER_CLASSNAME}
        />

        <ContactsCardBlocks />
        <ContactsFormBlock />
        <div className="contacts__yandex_map flex flex-col mt-24 gap-5">
          <h1 className="lg:text-[20px] max-lg:text-[14px] text-light-turquoise font-bold tracking-[0.8px] uppercase">
            Мы на карте
          </h1>
          <ContactsMapBlock />
        </div>
      </div>
      <DecorativeElement className="absolute lg:left-0 max-lg:left-[-5rem] lg:-bottom-48 w-[205px] h-[437px] rounded-[437px] bg-[#922D2D] blur-[125px]" />
      <DecorativeElement className="absolute right-0 -bottom-[20rem] w-[400px] h-[400px] bg-[#922D2D] blur-[125px] rounded-[100px] z-10 max-lg:hidden" />
    </div>
  );
};

export default ContactsPage;
