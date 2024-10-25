import { FC, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";

import { Bouquet } from "../../redux/bouquets/types";

import "swiper/css";

import { LeftArrowSvg, RightArrowSvg } from "../../assets";
import { CardBlock } from "..";

interface SliderProps {
  bouquets: Bouquet[];
  showCatalog?: boolean;
}

export const SliderBlock: FC<SliderProps> = memo(({ bouquets }) => {
  return (
    <>
      <div className="popular_bouquets__slider gap-8 flex items-center justify-center">
        <button className="arrow-prev mb-14 relative z-10 cursor-pointer select-none">
          <LeftArrowSvg />
        </button>

        <Swiper
          spaceBetween={10}
          freeMode={true}
          slidesPerView={3}
          navigation={{ prevEl: ".arrow-prev", nextEl: ".arrow-next" }}
          mousewheel={true}
          modules={[FreeMode, Mousewheel, Navigation]}
          className="flex flex-nowrap select-none z-30 relative"
        >
          {bouquets.map((obj) => (
            <SwiperSlide key={obj.id}>
              <CardBlock
                key={obj.id}
                id={obj.id}
                name={obj.name}
                imageUrl={obj.imageUrl}
                cost={obj.cost}
                filters={obj.filters}
                imgClassName="h-[450px] w-[350px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="arrow-next mb-14 relative cursor-pointer select-none z-10">
          <RightArrowSvg />
        </button>
      </div>
    </>
  );
});
