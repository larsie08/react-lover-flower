import { FC } from "react";

import { CardCircleSvg } from "../../../../assets";

const infoCards = [
  {
    title: "Удобрения для срезанных цветов",
    content:
      "При указании об этом в пожеланиях к букету, мы приложим пакетик удобрения для вас",
  },
  {
    title: "подпишем открытку",
    content:
      "В пожеланиях к букету укажите текст, какой хотите разместить и выберите на сайте саму открытку",
  },
  {
    title: "Фото букета перед отправкой",

    content:
      "В примечании к заказу укажите об этом и мы отправим фото готового букета перед доставкой. В праздничные дни в связи с большой загруженностью такой возможности нет",
  },
  {
    title: "Букет-сюрприз",
    content:
      "Если хотите, чтобы получатель не знал, что ему вручат а также от кого, то укажите об этом в примечании к заказу",
  },
];

export const BouquetAdditionBlock: FC = () => {
  return (
    <>
      <h1 className="title text-[20px] text-pink font-bold tracking-[0.8px] uppercase">
        Дополнительно к заказу:
      </h1>
      <div className="cards flex gap-8">
        {infoCards.map((obj, id) => (
          <div
            key={id}
            className="card [&:last-of-type_p]:mt-6 relative p-6 flex flex-col items-center gap-5 rounded-[20px] bg-[#000]/[0.30] backdrop-blur-[10px] z-10"
          >
            <CardCircleSvg />
            <h2 className="max-w-[125px] text-center text-[14px] mt-2 text-light-turquoise font-normal tracking-[0.56px] uppercase">
              {obj.title}
            </h2>
            <p className=" max-w-[218px] text-center text-[14px] font-normal tracking-[0.84px]">
              {obj.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
