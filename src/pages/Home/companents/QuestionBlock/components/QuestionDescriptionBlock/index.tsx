import { FC } from "react";
import { motion } from "framer-motion";

export const QuestionDescriptionBlock: FC<{ screenWidth: number }> = ({
  screenWidth,
}) => {
  return (
    <div className="z-20 flex flex-col max-sm:ml-2 max-sm:mt-[8rem] max-sm:gap-5 sm:gap-14">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="line border-t-[1px] border-light-turquoise max-sm:w-[96px] sm:max-w-[255px]"
      ></motion.div>

      <motion.p
        initial={{
          opacity: 0,
          y: screenWidth <= 768 ? 100 : 0,
          x: screenWidth >= 768 ? -100 : 0,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-sm:text-[14px] max-sm:font-normal max-sm:tracking-[0.04em] md:w-[255px]"
      >
        Отправьте ваш вопрос, заказ, предложение или жалобу через форму обратной
        связи, и наш специалист свяжется с вами в течение 15 минут.
      </motion.p>
    </div>
  );
};
