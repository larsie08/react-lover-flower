import { FC } from "react";

const information = [
  { title: "время работы", content: "с 10:00 до 21:00 без выходных" },
  { title: "Адрес", content: "г. Минск, ул. Тимирязева 67, комн. 112" },
  { title: "Телефон", content: "+375 (29) 113-69-69" },
  { title: "E-mail", content: "zakaz@loverflower.by" },
];

export const ContactsCardBlocks: FC = () => {
  return (
    <div className="card_blocks relative">
      <div className="absolute right-[15rem] bottom-0 w-[1006px] h-[124px] -rotate-[165.265deg] rounded-[1007px] bg-[#922D2D] blur-[125px]" />
      <div className="card_blocks__wrapper relative flex justify-evenly gap-5 mt-16 z-20">
        {information.map((obj, i) => (
          <div
            key={i}
            className="card__block h-[255px] w-[255px] flex flex-col items-center justify-center gap-8 p-5 bg-[black]/[0.20] rounded-[20px] backdrop-blur-[10px]"
          >
            <h1 className="text-[20px] text-light-turquoise font-bold tracking-[0.8px] uppercase">
              {obj.title}
            </h1>
            <p className="text-[20px] text-center font-light leading-[26px] tracking-[0.4px]">
              {obj.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
