import { FC, memo, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { useAppDispatch } from "../../redux/store";
import { Category, FlowerCategoriesEnum } from "../../redux/filter/types";
import { setCategory } from "../../redux/filter/slice";
import { setIsOpenCart } from "../../redux/modal/slice";
import { selectCartItems } from "../../redux/cart/selectors";

import { CartBlock, InfoBlock, Search } from "./HeaderCompanents";
import { NavigationMenu } from "./HeaderCompanents/NavigationMenu";

const CATEGORIES: Category[] = [
  { name: FlowerCategoriesEnum.PopularItems },
  { name: FlowerCategoriesEnum.AssortedBouquets },
  { name: FlowerCategoriesEnum.MonoBouquets },
  { name: FlowerCategoriesEnum.RoseBouquets },
  { name: FlowerCategoriesEnum.HolidayBouquets },
  { name: FlowerCategoriesEnum.FlowerCompositions },
  {
    name: FlowerCategoriesEnum.PottedIndoorPlants,
  },
  {
    name: FlowerCategoriesEnum.DriedFlowerBouquets,
  },
  { name: FlowerCategoriesEnum.Gifts },
  {
    name: FlowerCategoriesEnum.ChrysanthemumBouquets,
  },
];

const NAV_LINKS = [
  { label: "Доставка и оплата ", url: "delivery" },
  { label: "О нас", url: "aboutUs" },
  { label: "Контакты", url: "contacts" },
  { label: "FAQ", url: "FAQ" },
];

const SCROLL_HIDE_THRESHOLD = 80;

export const Header: FC = memo(() => {
  const dispatch = useAppDispatch();

  const [showHeader, toggleShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const items = useSelector(selectCartItems);

  const toggleHeaderVisibility = useCallback(() => {
    toggleShowHeader(window.scrollY > lastScrollY ? false : true);
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  const handleCategorySelect = useCallback(
    (category: string) => {
      dispatch(setCategory({ category }));
    },
    [dispatch]
  );

  const openCart = useCallback(() => {
    dispatch(setIsOpenCart(true));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", toggleHeaderVisibility);

    return () => {
      window.removeEventListener("scroll", toggleHeaderVisibility);
    };
  }, [lastScrollY]);

  return (
    <div
      id="header"
      className={classNames("w-full fixed z-40 transition", {
        ["-translate-y-full"]:
          !showHeader && lastScrollY > SCROLL_HIDE_THRESHOLD,
        ["bg-[black]"]: lastScrollY > SCROLL_HIDE_THRESHOLD,
      })}
    >
      <div className="header__wrapper flex justify-between container mx-auto">
        <div className="content h-[80px] flex">
          <NavigationMenu
            handleCategorySelect={handleCategorySelect}
            categories={CATEGORIES}
            navLinks={NAV_LINKS}
          />
          <Search
            lastScrollY={lastScrollY}
            SCROLL_HIDE_THRESHOLD={SCROLL_HIDE_THRESHOLD}
            showHeader={showHeader}
          />
        </div>
        {lastScrollY > SCROLL_HIDE_THRESHOLD ? (
          <CartBlock cart={items} openCart={openCart} />
        ) : (
          <InfoBlock />
        )}
      </div>
    </div>
  );
});
