import { FC } from "react";
import { DecorativeElement } from "../../../../components";

const information = [
  { title: "время работы", content: "с 10:00 до 21:00 без выходных" },
  { title: "Адрес", content: "г. Минск, ул. Тимирязева 67, комн. 112" },
  { title: "Телефон", content: "+375 (29) 113-69-69" },
  { title: "E-mail", content: "zakaz@loverflower.by" },
];

export const ContactsCardBlocks: FC = () => {
  return (
    <div className="card_blocks relative">
      <DecorativeElement className="absolute right-[15rem] bottom-0 w-[1006px] h-[124px] -rotate-[165.265deg] rounded-[1007px] bg-[#922D2D] blur-[125px] max-lg:hidden" />

      <div className="card_blocks__wrapper relative flex max-lg:flex-col justify-evenly gap-5 lg:mt-16 max-lg:mt-5 z-20">
        {information.map((obj, i) => (
          <div
            key={i}
            className="card__block lg:h-[255px] w-[255px] flex flex-col lg:items-center justify-center lg:gap-8 max-lg:gap-2 lg:p-5 lg:bg-[black]/[0.20] rounded-[20px] lg:backdrop-blur-[10px]"
          >
            <h1 className="lg:text-[20px] max-lg:text-[14px] text-light-turquoise font-bold tracking-[0.8px] uppercase">
              {obj.title}
            </h1>
            <p className="lg:text-[20px] max-lg:text-[14px] lg:text-center font-light lg:leading-[26px] tracking-[0.4px]">
              {obj.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
