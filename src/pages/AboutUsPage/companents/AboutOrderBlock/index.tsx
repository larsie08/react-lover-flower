import { FC } from "react";

const listText = [
  "выбор оттенков и сортов цветков в любое время года",
  "отправка фото готовой композиции перед отправкой;",
  "возможность заказать цветы с доставкой в течение часа;",
  "выгодные цены – на сайте только те варианты, что Вы сможете купить;",
  "полная конфиденциальность по заказу;",
  "мы подбираем открытку, воздушные шар, подарок по Вашему желанию;",
  "в нашем уютном цветочном магазине цветы, которые приятно дарить.",
];

export const AboutOrderBlock: FC = () => {
  return (
    <div className="about_us__order flex flex-col mt-24 gap-5">
      <h3 className="max-w-[695px] md:ml-48 md:text-[60px] max-md:text-[20px] text-light-turquoise font-normal font-cormorant md:leading-[64px] tracking-[1.2px] uppercase">
        Заказ букетов на сайте компании Lower Flower – это:
      </h3>
      <ul className="flex flex-col md:ml-[30rem] max-md:ml-2 md:text-[20px] max-md:text-[14px] font-light md:leading-[34px] tracking-[0.8px] list-disc">
        {listText.map((text) => (
          <li>{text}</li>
        ))}
      </ul>
    </div>
  );
};
