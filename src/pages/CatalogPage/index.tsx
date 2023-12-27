import { FC } from "react";

import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";
import { setCartItem } from "../../redux/cart/slice";

import {
  CatalogCategoryBlock,
  CatalogFilterBlock,
  CatalogSortBlock,
  CatalogTitleBlock,
  DecorativeElement,
  CardBlock,
} from "../../components";
import { CatalogLeftSvg, CatalogRightSvg } from "../../assets";

const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const items = useSelector((state: RootState) => state.bouquets.items);

  const onClick = (
    id: number,
    name: string,
    imageUrl: string,
    cost: number,
    count: number
  ) => {
    const bouquet = { id, name, imageUrl, cost, count};
    dispatch(setCartItem(bouquet));
  };

  return (
    <div className="catalog_page relative pt-[120px] h-[3000px] bg-[#040A0A]">
      <img
        className="absolute top-0 left-0 z-10"
        src="./img/bgElements/CatalogBg/CatalogFlowerLeft.png"
      />
      <DecorativeElement className="absolute top-0 right-0 w-[393px] h-[280px] bg-cherry rounded-[393px] blur-[125px]" />
      <DecorativeElement className="absolute top-[35rem] right-[15rem] w-[435px] h-[257px] rotate-[32.828deg] bg-cherry rounded-[435px] blur-[125px]" />
      <DecorativeElement className="absolute top-[25rem] left-[5rem] w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px]" />
      <DecorativeElement className="absolute top-[50rem] left-0 w-[505px] h-[360px] rotate-[32.828deg] bg-cherry rounded-[505px] blur-[125px]" />
      <DecorativeElement className="absolute top-[95rem] left-0 w-[750px] h-[175px] -rotate-[71.859deg] bg-light-turquoise rounded-[750px] blur-[125px]" />
      <img
        className="absolute top-0 right-0"
        src="./img/bgElements/CatalogBg/CatalogFlowerRight.png"
      />
      <div className="catalog_page__wrapper container mx-auto">
        <CatalogTitleBlock />
        <div className="catalog_page__content flex flex-col mt-8">
          <div className="flex justify-between relative z-30">
            <CatalogCategoryBlock />
            <CatalogSortBlock />
          </div>
          <div className="flex">
            <div className="catalog_page__sticky w-[255px]">
              <CatalogFilterBlock />
            </div>
            <div className="catalog_page__cards relative grid grid-cols-[repeat(3,_255px)] mx-auto gap-7 mt-3">
              {items.map((obj) => (
                <CardBlock
                  key={obj.id}
                  id={obj.id}
                  name={obj.name}
                  cost={obj.cost}
                  imageUrl={obj.imageUrl}
                  onClick={onClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <CatalogLeftSvg />
      <DecorativeElement className="absolute -bottom-[13rem] right-[15rem] w-[880px] h-[212px] rotate-[21.097deg] bg-light-turquoise rounded-[880px] blur-[125px]" />
      <CatalogRightSvg />
    </div>
  );
};

export default CatalogPage;
