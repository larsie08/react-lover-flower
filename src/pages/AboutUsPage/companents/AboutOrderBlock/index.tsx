import { FC } from "react";

export const AboutOrderBlock: FC = () => {
  return (
    <div className="about_us__order flex flex-col mt-24 gap-5">
      <h3 className="max-w-[695px] ml-48 text-[60px] text-light-turquoise font-normal font-cormorant leading-[64px] tracking-[1.2px] uppercase">
        Заказ букетов на сайте компании Lower Flower – это:
      </h3>
      <ul className="flex flex-col ml-[30rem] text-[20px] font-light leading-[34px] tracking-[0.8px] list-disc">
        <li>выбор оттенков и сортов цветков в любое время года</li>
        <li>отправка фото готовой композиции перед отправкой;</li>
        <li>возможность заказать цветы с доставкой в течение часа;</li>
        <li>
          выгодные цены – на сайте только те варианты, что Вы сможете купить;
        </li>
        <li>полная конфиденциальность по заказу;</li>
        <li>
          мы подбираем открытку, воздушные шар, подарок по Вашему желанию;
        </li>
        <li>
          в нашем уютном цветочном магазине цветы, которые приятно дарить.
        </li>
      </ul>
    </div>
  );
};
