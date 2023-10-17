import { FC } from "react";

import { Search } from "../Search";

const submenu = [
  "Популярное",
  "Сборные букеты",
  "монобукеты",
  "розы",
  "свадебные",
  "Композиции из цветов к коробке",
  "интерьерные композиции",
  "осенние",
  "индивидуальный букет",
  "сухоцветы",
  "горшечные",
  "дополнительно",
];

const nav = ["Доставка и оплата ", "О нас", "Контакты", "FAQ"];

export const Header: FC = () => {
  return (
    <div className="header__wrapper relative z-20">
      <div className="h-full flex justify-between container mx-auto">
        <div className="content h-[80px] flex">
          <div className="logo">
            <img src="/img/logo.png" alt="logo" />
          </div>
          <ul className="navbar flex ml-[70px] items-center gap-12">
            <li className="catalog_header text-[14px] font-normal tracking-[.56px] relative uppercase hover:text-light-turquoise hover:underline hover:decoration-light-turquoise">
              <a className="">Каталог</a>
              <ul className="submenu absolute -left-4 bg-[grey]/[.3] backdrop-blur-[10px] opacity-0 flex flex-col gap-1 w-[260px] p-2">
                {submenu.map((item, i) => (
                  <li
                    key={i}
                    className="text-[14px] font-normal tracking-[.56px] uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>

            {nav.map((item, i) => (
              <li
                className="text-[14px] font-normal tracking-[.56px] uppercase hover:text-light-turquoise hover:underline hover:decoration-light-turquoise"
                key={i}
              >
                <a href="/">{item}</a>
              </li>
            ))}
          </ul>
          <Search />
        </div>
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex flex-col gap-1.5 items-end">
            <h2 className="text-[14px] font-normal tracking-[1.4px] text-light-turquoise uppercase">
              zakaz@loverflower.by
            </h2>
            <p className="text-[10px] font-light tracking-[1px] uppercase">
              Доставка 24/7 по договоренности с оператором
            </p>
          </div>
          <div className="flex flex-col gap-1.5 items-end">
            <h2 className="text-[14px] font-normal tracking-[1.4px] text-light-turquoise uppercase">
              ул. Тимирязева 67
            </h2>
            <p className="text-[10px] font-light tracking-[1px] uppercase max-w-[80px]">
              10:00 до 21:00 без выходных
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
