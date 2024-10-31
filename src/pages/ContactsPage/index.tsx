import { FC } from "react";

import { DecorativeElement } from "../../components";
import {
  ContactsCardBlocks,
  ContactsFormBlock,
  ContactsMapBlock,
  ContactsTitleBlock,
} from "./companents";

import { ContactsBgColor } from "../../assets";

const ContactsPage: FC = () => {
  return (
    <div className="contacts pt-[120px] relative bg-[#040A0A] h-[2300px]">
      <DecorativeElement className="absolute right-0 top-0 w-[342px] h-[274px] rounded-[342px] bg-[#922D2D] blur-[125px]" />
      <img
        className="absolute right-0 top-0"
        src="./img/PagesImg/ContactsImg/ContactsFlowerTop.png"
        alt="flower"
      />
      <DecorativeElement className="absolute -left-36 top-0 w-[465px] h-[220px] -rotate-[71.859deg] rounded-[466px] bg-[#922D2D] blur-[125px]" />
      <img
        className="absolute left-0"
        src="./img/PagesImg/ContactsImg/ContactsFlowerMiddle.png"
        alt="flower"
      />
      <div className="contacts__wrapper container mx-auto">
        <ContactsTitleBlock />
        <ContactsCardBlocks />
        <ContactsFormBlock />
        <div className="contacts__yandex_map flex flex-col mt-24 gap-5">
          <h1 className="text-[20px] text-light-turquoise font-bold tracking-[0.8px] uppercase">
            Мы на карте
          </h1>
          <ContactsMapBlock />
        </div>
      </div>
      <DecorativeElement className="absolute left-0 -bottom-48 w-[205px] h-[437px] rounded-[437px] bg-[#922D2D] blur-[125px]" />
      <ContactsBgColor />
    </div>
  );
};

export default ContactsPage;
