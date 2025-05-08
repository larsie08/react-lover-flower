import { FC } from "react";

export const OccasionList: FC = () => (
  <ul className="max-w-[275px] flex flex-col gap-5">
    {[
      "учтем даже самые изысканные пожелания",
      "подберем свежайшие цветы и сделаем уникальный букет или композицию",
      "оплатить можно при получении или онлайн на сайте",
    ].map((text, idx) => (
      <li
        key={idx}
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-duration="2000"
        className="text-[14px] font-normal leading-normal tracking-[.56px] uppercase list-disc"
      >
        {text}
      </li>
    ))}
  </ul>
);
