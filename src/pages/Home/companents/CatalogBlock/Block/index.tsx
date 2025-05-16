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
          className="relative z-30 h-full w-[445px] rounded-[20px] bg-[#000]/[0.20] px-10 py-5 backdrop-blur-[10px] max-sm:flex max-sm:w-[300px] max-sm:flex-col max-sm:items-center max-sm:justify-between md:w-[540px] lg:w-[480px]"
        >
          <li className="block_title mb-2.5 max-w-[271px] text-[30px] font-bold uppercase tracking-[1.2px] text-light-turquoise max-sm:text-center max-sm:text-[20px] max-sm:tracking-[0.04em]">
            {subTitleBlock}
          </li>
          {items.map((item) => (
            <li
              className="ml-5 list-disc text-[18px] font-normal uppercase tracking-[.72px] max-sm:text-[14px]"
              key={item}
            >
              {item}
            </li>
          ))}
          <li className="float-right mt-6">
            <Link
              to="catalog"
              className="text-standart font-bold uppercase tracking-[1.2px] text-pink underline"
            >
              смотреть каталог
            </Link>
          </li>
        </motion.ul>
      </div>
    );
  },
);
