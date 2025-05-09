import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { getAnimationVariant } from "../../../../utils/getAnimationVariant";

type TitleBlock = {
  title: string;
  subtitle?: string;
  titleClassName: string;
  subtitleClassName?: string;
  subtitleWrapperClassName?: string;
  animation: "fade-right" | "fade-left";
  renderTitleText?: () => ReactNode;
};

export const HomeTitleBlock: FC<TitleBlock> = ({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
  subtitleWrapperClassName,
  animation,
  renderTitleText,
}) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const variants = getAnimationVariant(animation);

  return (
    <div
      ref={ref}
      className="title_block flex flex-col max-lg:items-center relative z-30"
    >
      <motion.h1
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        className={titleClassName}
      >
        {title}
      </motion.h1>

      {subtitle && (
        <div className={subtitleWrapperClassName}>
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1.2 }}
            className={subtitleClassName || ""}
          >
            {subtitle}
          </motion.h2>
        </div>
      )}

      {renderTitleText?.()}
    </div>
  );
};
