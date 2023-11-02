import { FC } from "react";

import { SocialsSvg } from "../../assets";
import { Link } from "react-router-dom";

const catalog = [
  "Популярное",
  "Сухоцветы",
  "Букеты роз",
  "Композиции из цветов",
  "Индивидуальный букет",
  "Букет на праздник",
  "Упаковка подарков",
  "Шары",
  "Открытки",
  "Конверты",
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
  { link: "для корпоративных клиентов", url: "/" },
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

export const Footer: FC = () => {
  return (
    <footer className="footer relative z-20 bg-[#000] h-[380px]">
      <div className="container mx-auto flex h-full justify-between">
        <div className="flex flex-col ">
          <div className="logo">
            <img src="./img/logo.png" alt="logo" />
          </div>
          <h3 className="text-light-turquoise mt-[8px] text-[14px] uppercase tracking-[0.56px]">
            реквизиты
          </h3>
          <p className="mt-[10px] max-w-[16rem] text-standart font-light uppercase">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            praesentium saepe quae laborum suscipit consectetur expedita est
            neque autem ipsam et fugit deserunt earum molestiae a, nulla dolor
            corporis magni.
          </p>
        </div>
        <ul className="flex flex-col gap-2 mt-7">
          <li className="text-[14px] font-bold text-light-turquoise mb-2.5 uppercase">
            Каталог
          </li>
          {catalog.map((item, i: number) => (
            <li
              key={i}
              className="text-standart font-light uppercase tracking-[0.48px] cursor-pointer hover:text-light-turquoise hover:underline"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-2 mt-7">
          <li className="text-[14px] font-bold text-light-turquoise mb-2.5 uppercase">
            Букет
          </li>
          {bouquet.map((item, i: number) => (
            <li
              key={i}
              className="text-standart font-light uppercase tracking-[0.48px] cursor-pointer hover:text-light-turquoise hover:underline"
            >
              {item}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-6 mt-7 max-w-[160px]">
          {links.map((obj, i: number) => (
            <Link
              key={i}
              to={obj.url}
              className="text-[14px] font-bold text-light-turquoise uppercase cursor-pointer hover:underline"
            >
              {obj.link}
            </Link>
          ))}
        </ul>
        <div className="flex flex-col gap-5 mt-7">
          {info.map((obj, i: number) => (
            <div key={i} className="flex flex-col gap-1.5">
              <h2 className="text-[14px] font-normal text-light-turquoise uppercase">
                {obj.title}
              </h2>
              <p className="text-[10px] font-light tracking-[1px] uppercase">
                {obj.content}
              </p>
            </div>
          ))}
          <div className="mt-9">
            <SocialsSvg />
          </div>
        </div>
      </div>
    </footer>
  );
};
