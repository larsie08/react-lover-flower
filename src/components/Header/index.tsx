import { FC, memo, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { useAppDispatch } from "../../redux/store";
import { Category, FlowerCategoriesEnum } from "../../redux/filter/types";
import { setCategory } from "../../redux/filter/slice";
import { selectCartState } from "../../redux/cart/selectors";
import { setModalState } from "../../redux/modal/slice";
import { ModalType } from "../../redux/modal/types";

import { CartBlock, InfoBlock, Search } from "./HeaderCompanents";
import { NavigationMenu } from "./HeaderCompanents/NavigationMenu";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  const [showHeader, toggleShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(window.outerWidth);
  const { cartItems } = useSelector(selectCartState);

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
    dispatch(setModalState({ modalType: ModalType.Cart, isOpen: true }));
    dispatch(
      setModalState({ modalType: ModalType.HamburgerMenu, isOpen: false })
    );
  }, [dispatch]);

  const openHamburgerMenu = useCallback(() => {
    dispatch(
      setModalState({ modalType: ModalType.HamburgerMenu, isOpen: true })
    );
  }, [dispatch]);

  const handleScreenWidth = () => {
    setScreenWidth(window.outerWidth);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleHeaderVisibility);

    return () => {
      window.removeEventListener("scroll", toggleHeaderVisibility);
    };
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, [window.outerWidth]);

  return (
    <div
      id="header"
      className={classNames("w-full fixed z-40 transition", {
        ["-translate-y-full"]:
          !showHeader && lastScrollY > SCROLL_HIDE_THRESHOLD,
        ["bg-[black]"]:
          (location.pathname !== "/" && screenWidth < 768) ||
          lastScrollY > SCROLL_HIDE_THRESHOLD,
      })}
    >
      <div className="header__wrapper flex justify-between h-[80px] container mx-auto">
        <div className="my-auto ml-2.5 lg:hidden">
          <button onClick={openHamburgerMenu} className="p-3 relative z-20">
            <img
              src="./img/headerImg/burgerIcon.png"
              alt="icon"
              className="my-auto"
            />
          </button>
        </div>

        <div
          className={classNames(
            "intro__content flex flex-col my-auto lg:hidden",
            {
              ["hidden"]:
                location.pathname === "/" &&
                lastScrollY < SCROLL_HIDE_THRESHOLD,
            }
          )}
        >
          <h1 className="text-[20px] h-[25px] font-light tracking-[0.2em] uppercase font-cormorant flex justify-center items-center">
            lover
          </h1>
          <h1 className="text-[20px] h-[25px] font-light tracking-[0.2em] uppercase font-cormorant flex justify-center items-center relative z-20">
            Flower
          </h1>
        </div>

        <div className="content max-lg:hidden lg:flex">
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
        {screenWidth <= 768 || lastScrollY > SCROLL_HIDE_THRESHOLD ? (
          <CartBlock cart={cartItems} openCart={openCart} />
        ) : (
          <InfoBlock />
        )}
      </div>
    </div>
  );
});
