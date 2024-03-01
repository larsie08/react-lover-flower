import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { RootState, useAppDispatch } from "../../redux/store";
import {
  Category,
  CategoryProps,
  FlowerCategoriesEnum,
} from "../../redux/filter/types";
import { setCategory } from "../../redux/filter/slice";

import { CartBlock, InfoBlock, Search } from "./HeaderCompanents";

const categories: Category[] = [
  { name: "Популярное", id: FlowerCategoriesEnum.PopularItems },
  { name: "Сборные букеты", id: FlowerCategoriesEnum.AssortedBouquets },
  { name: "Монобукеты", id: FlowerCategoriesEnum.MonoBouquets },
  { name: "Розы", id: FlowerCategoriesEnum.RoseBouquets },
  { name: "Свадебные", id: FlowerCategoriesEnum.HolidayBouquets },
  { name: "Композиции из цветов", id: FlowerCategoriesEnum.FlowerCompositions },
  {
    name: "интерьерные композиции",
    id: FlowerCategoriesEnum.PottedIndoorPlants,
  },
  {
    name: "сухоцветы",
    id: FlowerCategoriesEnum.DriedFlowerBouquets,
  },
  { name: "Подарки", id: FlowerCategoriesEnum.Gifts },
  {
    name: "Букеты из хризантем",
    id: FlowerCategoriesEnum.ChrysanthemumBouquets,
  },
];

const nav = [
  { link: "Доставка и оплата ", url: "delivery" },
  { link: "О нас", url: "aboutUs" },
  { link: "Контакты", url: "contacts" },
  { link: "FAQ", url: "FAQ" },
];

const defaultPosition = 80;

export const Header: FC = () => {
  const dispatch = useAppDispatch();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const cart = useSelector((state: RootState) => state.cart.items);

  const controlNavbar = () => {
    setShow(window.scrollY < lastScrollY ? false : true);
    setLastScrollY(window.scrollY);
  };

  const onClick = (categoryId: FlowerCategoriesEnum, category: string) => {
    const obj: CategoryProps = { categoryId, category };
    dispatch(setCategory(obj));
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setShow(false);
  }, [cart]);

  return (
    <div
      id="header"
      className={classNames("w-full fixed z-40 transition", {
        ["-translate-y-full"]: show && lastScrollY > defaultPosition,
        ["bg-[black]"]: lastScrollY > defaultPosition,
      })}
    >
      <div className="header__wrapper flex justify-between container mx-auto">
        <div className="content h-[80px] flex">
          <Link to="/" className="logo">
            <img src="./img/logo.png" alt="logo" />
          </Link>
          <ul className="navbar flex ml-[70px] items-center gap-12">
            <li className="group catalog-header text-[14px] font-normal tracking-[.56px] relative uppercase py-3">
              <Link
                to="catalog"
                className="hover:text-light-turquoise hover:underline hover:decoration-light-turquoise cursor-pointer"
              >
                Каталог
              </Link>
              <ul className="submenu absolute group-[:hover]:visible group-[:hover]:opacity-100 opacity-0 -left-4 top-[40px] invisible bg-[grey]/[.3] backdrop-blur-[10px] flex flex-col gap-1 w-[260px] p-2 transition-all z-20">
                {categories.map((obj) => (
                  <Link
                    to="catalog"
                    onClick={() => onClick(obj.id, obj.name)}
                    key={obj.id}
                    className="catalog_name group-[:hover]:opacity-100 opacity-0 text-[14px] font-normal relative z-30 tracking-[.56px] uppercase cursor-pointer hover:text-light-turquoise hover:underline hover:decoration-light-turquoise"
                  >
                    {obj.name}
                  </Link>
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
          <Search lastScrollY={lastScrollY} />
        </div>
        {lastScrollY > defaultPosition ? (
          <CartBlock cart={cart} />
        ) : (
          <InfoBlock />
        )}
      </div>
    </div>
  );
};
