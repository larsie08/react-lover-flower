import { FC } from "react";

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
      <li
        data-aos="fade-left"
        data-aos-offset="300"
        data-aos-duration="2000"
        key={idx}
      >
        <img src={img.src} alt={img.alt} />
      </li>
    ))}
  </ul>
);
