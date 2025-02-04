import { FC, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Navigation } from "swiper/modules";

import { Bouquet } from "../../redux/bouquets/types";

import "swiper/css";

import { LeftArrowSvg, RightArrowSvg } from "../../assets";
import { CardBlock } from "..";

type SliderBlockProps = {
  bouquets: Bouquet[];
  screenWidth: number;
};

export const SliderBlock: FC<SliderBlockProps> = memo(
  ({ bouquets, screenWidth }) => {
    return (
      <>
        <div className="popular_bouquets__slider gap-8 flex items-center justify-center">
          <button className="arrow-prev mb-14 relative z-10 cursor-pointer select-none max-md:hidden">
            <LeftArrowSvg />
          </button>

          <Swiper
            spaceBetween={10}
            freeMode={true}
            slidesPerView={screenWidth > 1024 ? 3 : 2}
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
          <button className="arrow-next mb-14 relative cursor-pointer select-none z-10 max-md:hidden">
            <RightArrowSvg />
          </button>
        </div>
      </>
    );
  }
);
