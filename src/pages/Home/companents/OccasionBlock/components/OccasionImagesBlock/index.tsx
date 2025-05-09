import { FC } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "./img/PagesImg/HomeImg/OccasionImg/bouquet.png", alt: "bouquet" },
  { src: "./img/PagesImg/HomeImg/OccasionImg/cloth.png", alt: "cloth" },
  {
    src: "./img/PagesImg/HomeImg/OccasionImg/decoration.png",
    alt: "decoration",
  },
];

export const OccasionImages: FC = () => (
  <ul className="flex gap-8">
    {images.map((img, idx) => (
      <li key={idx}>
        <motion.img
          src={img.src}
          alt={img.alt}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        />
      </li>
    ))}
  </ul>
);
