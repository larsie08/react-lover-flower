import { FC } from "react";
import classNames from "classnames";
import { Collapse } from "@mui/material";
import { CatalogTipSvg } from "../../../../../assets";

type AdaptiveOpenButtonProps = {
  textButton: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClickAdaptiveBlock: () => void;
};

export const AdaptiveOpenButton: FC<AdaptiveOpenButtonProps> = ({
  textButton,
  isOpen,
  onClickAdaptiveBlock,
  children,
}) => {
  return (
    <>
      <div
        onClick={onClickAdaptiveBlock}
        className="flex gap-5 items-center cursor-pointer"
      >
        <span
          className={classNames(
            "text-[16px]  font-normal tracking-[0.1em] underline uppercase",
            { ["text-light-turquoise"]: isOpen },
            { ["text-pink"]: !isOpen }
          )}
        >
          {textButton}
        </span>
        <CatalogTipSvg isOpen={isOpen} />
      </div>

      <Collapse orientation="vertical" in={isOpen}>
        {children}
      </Collapse>
    </>
  );
};
