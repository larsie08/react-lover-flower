import { FC, memo } from "react";

const images = [
  "./img/PagesImg/HomeImg/CardImg/tree.png",
  "./img/PagesImg/HomeImg/CardImg/decorations.png",
  "./img/PagesImg/HomeImg/CardImg/candle.png",
  "./img/PagesImg/HomeImg/CardImg/bouquetCard.png",
];

export const BouquetsImagesBlock: FC = memo(() => {
  return (
    <ul className="card_footer_block__content flex z-20 gap-8 max-lg:w-full max-lg:grid max-lg:grid-cols-2 max-lg:mt-6 max-lg:justify-center">
      {images.map((src, idx) => (
        <li
          className="max-lg:w-full max-lg:flex max-lg:justify-center"
          key={idx}
        >
          <img
            className="backdrop-blur-[10px] lg:h-[160px] lg:w-[160px] max-lg:w-[147px] max-lg:h-[137px]"
            src={src}
            alt={`bouquet-${idx}`}
          />
        </li>
      ))}
    </ul>
  );
});
