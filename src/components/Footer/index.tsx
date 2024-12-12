import { FC, memo, useCallback } from "react";

import { Category, FlowerCategoriesEnum } from "../../redux/filter/types";
import { useAppDispatch } from "../../redux/store";
import { setCategory } from "../../redux/filter/slice";

import { SocialsSvg } from "../../assets";
import {
  FooterBouquetBlock,
  FooterCategoriesBlock,
  FooterInfoBlock,
  FooterPagesBlock,
  FooterTitleBlock,
} from "./FooterCompanents";

const categories: Category[] = [
  { name: FlowerCategoriesEnum.PopularItems },
  {
    name: FlowerCategoriesEnum.DriedFlowerBouquets,
  },
  { name: FlowerCategoriesEnum.RoseBouquets },
  { name: FlowerCategoriesEnum.FlowerCompositions },
  { name: FlowerCategoriesEnum.AssortedBouquets },
  { name: FlowerCategoriesEnum.MonoBouquets },

  { name: FlowerCategoriesEnum.HolidayBouquets },

  {
    name: FlowerCategoriesEnum.PottedIndoorPlants,
  },

  { name: FlowerCategoriesEnum.Gifts },
  {
    name: FlowerCategoriesEnum.ChrysanthemumBouquets,
  },
];

const bouquet = [
  "Для девушки",
  "Для мужчины",
  "Для жены",
  "Для мамы",
  "Для коллеги",
  "Для начальника",
  "Для дочки",
  "Для детей",
  "Для женщины",
];

const links = [
  { link: "Доставка и оплата", url: "delivery" },
  { link: "О нас", url: "aboutUs" },
  { link: "FAQ", url: "FAQ" },
  { link: "Контакты", url: "contacts" },
  { link: "для корпоративных клиентов", url: "corporate" },
];

const info = [
  {
    title: "zakaz@loverflower.by",
    content: "Доставка 24/7 по договоренности с оператором",
  },
  {
    title: "ул. Тимирязева 67",
    content: "10:00 до 21:00 без выходных",
  },
  {
    title: "+375 (29) 113-69-69",
    content: "прием звонков круглосуточно",
  },
];

export const Footer: FC = memo(() => {
  const dispatch = useAppDispatch();

  const onClick = useCallback(
    (category: string) => {
      const obj = { category };
      dispatch(setCategory(obj));
    },
    [dispatch]
  );

  return (
    <footer className="footer relative z-50 pb-[30px] bg-[#000] h-[380px] max-sm:h-[672px]">
      <div className="container mx-auto flex h-full sm:justify-between transition-all max-sm:flex-col max-sm:items-center">
        <div className="flex flex-col">
          <div className="logo flex max-sm:justify-center">
            <img src="./img/logo.png" alt="logo" />
          </div>
          <h3 className="text-light-turquoise mt-[8px] text-[14px] uppercase tracking-[0.56px] max-sm:hidden sm:block">
            реквизиты
          </h3>
          <p className="mt-[10px] max-w-[16rem] text-standart font-light uppercase max-sm:hidden sm:block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            praesentium saepe quae laborum suscipit consectetur expedita est
            neque autem ipsam et fugit deserunt earum molestiae a, nulla dolor
            corporis magni.
          </p>
        </div>
        <ul className="flex flex-col gap-2 sm:mt-7 max-sm:mt-5">
          <FooterTitleBlock title="Каталог" />
          {categories.map((category) => (
            <FooterCategoriesBlock
              key={category.name}
              category={category}
              onClick={onClick}
            />
          ))}
        </ul>
        <ul className="flex-col gap-2 sm:mt-7 max-sm:hidden sm:flex">
          <FooterTitleBlock title={"Букет"} />
          {bouquet.map((name) => (
            <FooterBouquetBlock key={name} name={name} />
          ))}
        </ul>
        <ul className="flex flex-col gap-6 sm:mt-7 max-sm:gap-2.5 max-w-[160px] max-sm:items-center">
          {links.map((obj) => (
            <FooterPagesBlock key={obj.url} page={obj} />
          ))}
        </ul>
        <div className="flex flex-col gap-5 mt-7">
          {info.map((obj) => (
            <FooterInfoBlock
              key={obj.title}
              name={obj.title}
              contentInfo={obj.content}
            />
          ))}
          <div className="mt-9 flex justify-center">
            <SocialsSvg />
          </div>
        </div>
      </div>
    </footer>
  );
});
