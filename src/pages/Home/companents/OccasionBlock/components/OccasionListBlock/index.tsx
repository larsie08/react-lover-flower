import { FC, memo } from "react";
import { motion } from "framer-motion";

export const OccasionList: FC<{ screenWidth: number }> = memo(
  ({ screenWidth }) => (
    <ul className="flex max-w-[275px] flex-col gap-5">
      {[
        "учтем даже самые изысканные пожелания",
        "подберем свежайшие цветы и сделаем уникальный букет или композицию",
        "оплатить можно при получении или онлайн на сайте",
      ].map((text, idx) => (
        <motion.li
          key={idx}
          initial={{
            opacity: 0,
            y: screenWidth <= 768 ? 100 : 0,
            x: screenWidth >= 768 ? -100 : 0,
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="list-disc text-[14px] font-normal uppercase leading-normal tracking-[.56px]"
        >
          {text}
        </motion.li>
      ))}
    </ul>
  ),
);
