import { FC, useEffect, useRef, useState } from "react";

import classNames from "classnames";

import { SearchSvg } from "../../assets";

export const Search: FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const _event = event as PopupClick;
  //     if (
  //       inputRef.current &&
  //       !_event.composedPath().includes(inputRef.current)
  //     ) {
  //       setIsClicked(false);
  //     }
  //   };

  //   document.body.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.body.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  const clickLabel = () => {
    setIsClicked(true);
  };

  const hidden: string = "hidden";

  return (
    <form className="ml-[50px] flex items-center">
      <SearchSvg />
      <label
        ref={labelRef}
        onClick={clickLabel}
        className={classNames({ [hidden]: isClicked })}
        htmlFor="search"
      >
        Поиск
      </label>
      <input
        className={classNames(
          "outline-none border-[#555] bg-[#000] relative transition-[width] h-[30px] w-0 text-[14px] font-normal tracking-[.56px] uppercase placeholder:font-light placeholder:tracking-[.28px] placeholder:normal-case",
          { ["focus:border-b focus:w-[360px]"]: isClicked }
        )}
        placeholder="Введите свой запрос"
        ref={inputRef}
        type="search"
        id="search"
        name="search"
      />
    </form>
  );
};
