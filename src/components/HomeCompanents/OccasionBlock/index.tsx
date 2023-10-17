import { FC } from "react";

export const OccasionBlock: FC = () => {
  return (
    <div className="occasion_block h-[1000px]">
      <div className="occasion_block__wrapper container mx-auto">
        <div className="occasion_block__top flex justify-between">
          <div className="occasion_block__title flex flex-col">
            <h1 className="text-[100px] flex items-center font-normal h-[100px] tracking-[2px] uppercase font-cormorant">
              особенный
            </h1>
            <div className="flex items-center ml-[130px] gap-7">
              <div className="border-t-[1px] border-pink w-[255px]"></div>
              <h1 className="text-[100px] flex items-center justify-center font-normal h-[100px] tracking-[2px] uppercase font-cormorant">
                повод?
              </h1>
            </div>
          </div>
          <div className="img_block mr-[130px]">
            <img src="./img/occasionImg/packing.png" alt="packing" />
          </div>
        </div>

        <div className="occasion_block__bottom flex justify-around mt-8">
          <div className="content_block flex flex-col gap-8">
            <p className="max-w-[255px] text-[14px] font-normal leading-normal tracking-[.56px] uppercase">
              Мы готовы прийти на помощь и собрать уникальный букет, на любой
              вкус, бюджет и для любого события по вашему индивидуальному
              заказу.
            </p>
            <ul className="max-w-[275px] flex flex-col gap-5">
              <li className="text-[14px] font-normal leading-normal tracking-[.56px] uppercase list-disc">
                учтем даже самые изысканные пожелания
              </li>
              <li className="text-[14px] font-normal leading-normal tracking-[.56px] uppercase list-disc">
                подберем свежайшие цветы и сделаем уникальный букет или
                композицию
              </li>
              <li className="text-[14px] font-normal leading-normal tracking-[.56px] uppercase list-disc">
                оплатить можно при получении или онлайн на сайте
              </li>
            </ul>
          </div>
          <div className="img_block">
            <ul className="flex gap-8">
              <li>
                <img src="./img/occasionImg/bouquet.png" alt="bouquet" />
              </li>
              <li>
                <img src="./img/occasionImg/cloth.png" alt="cloth" />
              </li>
              <li>
                <img src="./img/occasionImg/decoration.png" alt="decoration" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
