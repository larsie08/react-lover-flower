import { FC, memo } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { useAppDispatch } from "../../../redux/store";
import { selectModalStatus } from "../../../redux/modal/selectors";
import { ModalType } from "../../../redux/modal/types";
import { setModalState } from "../../../redux/modal/slice";

import { MenuAdditionalBlock, MenuInfoBlock } from "./HamburgerComponents";
import { SearchSvg } from "../../../assets";
import { CloseSvg } from "../../../assets/SVG/ModalSvg/CloseSvg";
import { DecorativeElement } from "../../DecorativeElement";

const links = [
  { link: "Главная", url: "/" },
  { link: "Каталог", url: "catalog" },
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
];

export const HamburgerMenu: FC = memo(() => {
  const dispatch = useAppDispatch();

  const { isOpenHamburgerMenu } = useSelector(selectModalStatus);

  const onClose = () => {
    dispatch(
      setModalState({ modalType: ModalType.HamburgerMenu, isOpen: false })
    );
  };

  return createPortal(
    <div
      className={classNames(
        "hamburger-menu fixed z-40 top-0 left-0 w-0 h-[100vh] bg-[black] opacity-0 transition-all duration-200",
        { "w-[260px] opacity-100 visible": isOpenHamburgerMenu },
        { invisible: !isOpenHamburgerMenu }
      )}
    >
      <div className="content flex flex-col px-2.5 py-5 justify-between h-full">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <img src="./img/logo.png" alt="logo" />
          <button onClick={onClose}>
            <CloseSvg />
          </button>
        </div>

        {/* Search Section */}
        <Link className="relative flex items-center mt-2" to="search">
          <SearchSvg />
          <span className="text-[14px] tracking-[0.04em] font-normal uppercase">
            Поиск
          </span>
        </Link>

        {/* Links Section */}
        <div className="flex flex-col gap-2.5 mt-2.5">
          {links.map((link) => (
            <Link
              key={link.url}
              to={link.url}
              onClick={onClose}
              className="text-[14px] tracking-[0.04em] font-normal uppercase"
            >
              {link.link}
            </Link>
          ))}
        </div>
        <DecorativeElement className="border-b-[1px] border-[#555555] mt-2.5 w-[100px]" />

        {/* Info Section */}
        <div className="mt-5 flex flex-col gap-2.5">
          {info.map((item) => (
            <MenuInfoBlock
              key={item.title}
              title={item.title}
              content={item.content}
            />
          ))}

          {/* Additional Info */}
          <MenuAdditionalBlock />
        </div>
      </div>
    </div>,

    document.getElementById("portal") as Element
  );
});
