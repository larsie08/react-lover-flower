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
import { DecorativeElement } from "..";
import { setIsOpenCart } from "../../redux/modal/slice";

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

  const openButton = () => {
    dispatch(setIsOpenCart(true));
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
                className="group/link hover:text-light-turquoise hover:decoration-light-turquoise cursor-pointer transition-all"
              >
                Каталог
                <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/link:w-full group-hover/link:visible transition-all" />
              </Link>
              <ul className="submenu absolute group-[:hover]:visible group-[:hover]:opacity-100 opacity-0 -left-4 top-[40px] invisible bg-[grey]/[.3] backdrop-blur-[10px] flex flex-col gap-1 w-[260px] p-2 transition-all z-20">
                {categories.map((obj) => (
                  <Link
                    to="catalog"
                    onClick={() => onClick(obj.id, obj.name)}
                    key={obj.id}
                    className="group/categories catalog_name group-[:hover]:opacity-100 opacity-0 text-[14px] font-normal relative z-30 tracking-[.56px] uppercase cursor-pointer hover:text-light-turquoise"
                  >
                    {obj.name}
                    <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/categories:w-full group-hover/categories:visible transition-all duration-300" />
                  </Link>
                ))}
              </ul>
            </li>

            {nav.map((obj, i) => (
              <li
                className="group/nav text-[14px] font-normal tracking-[.56px] uppercase hover:text-light-turquoise transition-colors"
                key={i}
              >
                <Link to={obj.url} className="relative">
                  {obj.link}
                  <DecorativeElement className="absolute invisible h-[1px] w-0 bg-light-turquoise group-hover/nav:w-full group-hover/nav:visible transition-all" />
                </Link>
              </li>
            ))}
          </ul>
          <Search lastScrollY={lastScrollY} />
        </div>
        {lastScrollY > defaultPosition ? (
          <CartBlock cart={cart} openButton={openButton} />
        ) : (
          <InfoBlock />
        )}
      </div>
    </div>
  );
};
