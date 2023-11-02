import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classNames from "classnames";

import { CartBlock, InfoBlock, Search } from "./HeaderCompanents";

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

const nav = [
  { link: "Доставка и оплата ", url: "delivery" },
  { link: "О нас", url: "aboutUs" },
  { link: "Контакты", url: "contacts" },
  { link: "FAQ", url: "FAQ" },
];

export const Header: FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const defaultPosition = 80;

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={classNames("header w-full fixed z-40", {
        ["invisible"]: show && lastScrollY > defaultPosition,
        ["bg-[black]"]: lastScrollY > defaultPosition,
      })}
    >
      <div className="header__wrapper h-full flex justify-between container mx-auto">
        <div className="content h-[80px] flex">
          <Link to="/" className="logo">
            <img src="./img/logo.png" alt="logo" />
          </Link>
          <ul className="navbar flex ml-[70px] items-center gap-12">
            <li className="catalog_header text-[14px] font-normal tracking-[.56px] relative uppercase">
              <Link
                to="/"
                className="hover:text-light-turquoise hover:underline hover:decoration-light-turquoise cursor-pointer"
              >
                Каталог
              </Link>
              <ul className="submenu absolute -left-4 bg-[grey]/[.3] backdrop-blur-[10px] invisible flex flex-col gap-1 w-[260px] p-2">
                {submenu.map((item, i) => (
                  <li
                    key={i}
                    className="text-[14px] font-normal relative z-30 tracking-[.56px] uppercase cursor-pointer hover:text-light-turquoise hover:underline hover:decoration-light-turquoise"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </li>

            {nav.map((obj, i) => (
              <li
                className="text-[14px] font-normal tracking-[.56px] uppercase hover:text-light-turquoise hover:underline hover:decoration-light-turquoise"
                key={i}
              >
                <Link to={obj.url}>{obj.link}</Link>
              </li>
            ))}
          </ul>
          <Search />
        </div>
        {lastScrollY > defaultPosition ? <CartBlock /> : <InfoBlock />}
      </div>
    </div>
  );
};
