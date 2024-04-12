import { FC, useEffect, useState } from "react";

import { Bouquet } from "../../redux/bouquets/types";

import { LeftArrowSvg, RightArrowSvg } from "../../assets";
import { CardBlock } from "..";

interface SliderProps {
  bouquets: Bouquet[];
  showCatalog?: boolean;
}

export const SliderBlock: FC<SliderProps> = ({
  bouquets,
}) => {
  const [slideItems, setSlideItems] = useState<Bouquet[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  useEffect(() => {
    setSlideItems(bouquets.slice(currentIndex, currentIndex + 3));
  }, [bouquets, currentIndex]);

  const nextSlide = () => {
    if (currentIndex < bouquets.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
      <div className="popular_bouquets__slider gap-8 flex items-center justify-center">
        <div
          onClick={prevSlide}
          className="arrow mb-14 relative z-10 cursor-pointer select-none"
        >
          <LeftArrowSvg />
        </div>
        <div className="grid grid-cols-[repeat(3,_350px)] gap-8">
          {slideItems.map((obj) => (
            <CardBlock
              key={obj.id}
              id={obj.id}
              name={obj.name}
              imageUrl={obj.imageUrl}
              cost={obj.cost}
              filters={obj.filters}
              imgClassName="h-[450px]"
            />
          ))}
        </div>

        <div
          onClick={nextSlide}
          className="arrow mb-14 relative z-10 cursor-pointer select-none"
        >
          <RightArrowSvg />
        </div>
      </div>
    </>
  );
};
