import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch } from "../../redux/store";
import {
  Category,
  CategoryProps,
  FlowerCategories,
} from "../../redux/filter/types";
import { setCategory } from "../../redux/filter/slice";

import classNames from "classnames";

import { CartBlock, InfoBlock, Search } from "./HeaderCompanents";

const categories: Category[] = [
  { name: "Букеты из гипсофил", id: FlowerCategories.GypsophilaBouquets },
  { name: "Букеты из ромашек", id: FlowerCategories.ChamomileBouquets },
  { name: "Букеты из хризантем", id: FlowerCategories.ChrysanthemumBouquets },
  {
    name: "Комнатные цветы в горшках",
    id: FlowerCategories.PottedIndoorPlants,
  },
  { name: "Монобукеты", id: FlowerCategories.MonoBouquets },
  { name: "Сборные букеты", id: FlowerCategories.AssortedBouquets },
  { name: "Букет на праздник", id: FlowerCategories.HolidayBouquets },
  { name: "Композиции из цветов", id: FlowerCategories.FlowerCompositions },
  { name: "Конверты", id: FlowerCategories.Envelopes },
  { name: "Открытки", id: FlowerCategories.GreetingCards },
  { name: "Подарки", id: FlowerCategories.Gifts },
  { name: "Букеты из сухоцветов", id: FlowerCategories.DriedFlowerBouquets },
  { name: "Шары", id: FlowerCategories.Balloons },
  { name: "Популярное", id: FlowerCategories.PopularItems },
  { name: "Букеты роз", id: FlowerCategories.RoseBouquets },
  { name: "Цветы на похороны", id: FlowerCategories.FuneralFlowers },
  { name: "Упаковка подарков", id: FlowerCategories.GiftWrapping },
];

const nav = [
  { link: "Доставка и оплата ", url: "delivery" },
  { link: "О нас", url: "aboutUs" },
  { link: "Контакты", url: "contacts" },
  { link: "FAQ", url: "FAQ" },
];

export const Header: FC = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const dispatch = useAppDispatch();
  const defaultPosition = 80;

  const controlNavbar = () => {
    setShow(window.scrollY < lastScrollY ? false : true);
    setLastScrollY(window.scrollY);
  };

  const onClick = (categoryId: number, category: string) => {
    const obj: CategoryProps = { categoryId, category };
    dispatch(setCategory(obj));
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
      className={classNames("header w-full fixed z-40 transition-all", {
        ["-translate-y-full"]: show && lastScrollY > defaultPosition,
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
                to="catalog"
                className="hover:text-light-turquoise hover:underline hover:decoration-light-turquoise cursor-pointer"
              >
                Каталог
              </Link>
              <ul className="submenu absolute -left-4 bg-[grey]/[.3] backdrop-blur-[10px] invisible flex flex-col gap-1 w-[260px] p-2">
                {categories.map((obj) => (
                  <Link
                    to="catalog"
                    onClick={() => onClick(obj.id, obj.name)}
                    key={obj.id}
                    className="text-[14px] font-normal relative z-30 tracking-[.56px] uppercase cursor-pointer hover:text-light-turquoise hover:underline hover:decoration-light-turquoise"
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
        {lastScrollY > defaultPosition ? <CartBlock /> : <InfoBlock />}
      </div>
    </div>
  );
};
