import { FC, memo } from "react";

const images = [
  "./img/PagesImg/HomeImg/CardImg/tree.png",
  "./img/PagesImg/HomeImg/CardImg/decorations.png",
  "./img/PagesImg/HomeImg/CardImg/candle.png",
  "./img/PagesImg/HomeImg/CardImg/bouquetCard.png",
];

export const BouquetsImagesBlock: FC = memo(() => {
  return (
    <ul className="card_footer_block__content flex z-20 gap-8 max-sm:w-full max-sm:grid max-sm:grid-cols-2 max-sm:mt-6 max-sm:justify-center">
      {images.map((src, idx) => (
        <li
          className="max-sm:w-full max-sm:flex max-sm:justify-center"
          key={idx}
        >
          <img
            className="backdrop-blur-[10px] lg:h-[160px] lg:w-[160px] max-sm:w-[147px] max-sm:h-[137px]"
            src={src}
            alt={`bouquet-${idx}`}
          />
        </li>
      ))}
    </ul>
  );
});
