import { FC } from "react";
import { motion } from "framer-motion";

export const OccasionList: FC = () => (
  <ul className="max-w-[275px] flex flex-col gap-5">
    {[
      "учтем даже самые изысканные пожелания",
      "подберем свежайшие цветы и сделаем уникальный букет или композицию",
      "оплатить можно при получении или онлайн на сайте",
    ].map((text, idx) => (
      <motion.li
        key={idx}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-[14px] font-normal leading-normal tracking-[.56px] uppercase list-disc"
      >
        {text}
      </motion.li>
    ))}
  </ul>
);
