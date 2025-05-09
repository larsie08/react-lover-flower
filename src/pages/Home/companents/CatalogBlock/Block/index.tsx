import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { getAnimationVariant } from "../../../../../utils/getAnimationVariant";

type BlockProps = {
  items: string[];
  title: string;
  subTitleBlock: string;
  animation: "fade-left" | "fade-right";
  titleClassName: string;
  marginTop?: string;
  height?: string;
};

export const Block: FC<BlockProps> = memo(
  ({
    items,
    title,
    subTitleBlock,
    animation,
    titleClassName,
    marginTop,
    height = "h-[280px]",
  }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const variants = getAnimationVariant(animation);

    return (
      <div
        ref={ref}
        className={`catalog__content_block relative ${height} ${marginTop}`}
      >
        <h2 className={titleClassName}>{title}</h2>

        <motion.ul
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="w-[445px] relative z-30 h-full bg-[#000]/[0.20] backdrop-blur-[10px] rounded-[20px] px-10 py-5 max-sm:w-[300px] max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-between md:w-[540px] lg:w-[480px]"
        >
          <li className="block_title text-[30px] mb-2.5 max-w-[271px] font-bold tracking-[1.2px] text-light-turquoise uppercase max-sm:text-[20px] max-sm:tracking-[0.04em] max-sm:text-center">
            {subTitleBlock}
          </li>
          {items.map((item) => (
            <li
              className="text-[18px] font-normal ml-5 tracking-[.72px] uppercase list-disc max-sm:text-[14px]"
              key={item}
            >
              {item}
            </li>
          ))}
          <li className="mt-6 float-right">
            <Link
              to="catalog"
              className="text-standart font-bold text-pink tracking-[1.2px] underline uppercase"
            >
              смотреть каталог
            </Link>
          </li>
        </motion.ul>
      </div>
    );
  }
);
