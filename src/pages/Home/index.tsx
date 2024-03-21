import { FC, useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../redux/store";
import { setIsOpenCart, setIsOpenModal } from "../../redux/modal/slice";

import {
  HomeOrderBlock,
  CardFooterBlock,
  CatalogBlock,
  Intro,
  OccasionBlock,
  PopularBouquetsBlock,
  QuestionBlock,
} from "../../components";
import { setCartItem } from "../../redux/cart/slice";

const Home: FC = () => {
  const dispatch = useAppDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const bouquets = useSelector((state: RootState) => state.bouquets.items);

  const openModal = () => dispatch(setIsOpenModal(true));
  const openCart = () => dispatch(setIsOpenCart(true));

  const onClick = useMemo(
    () => (id: number, name: string, imageUrl: string, cost: number) => {
      const bouquet = { id, name, imageUrl, cost, count: 1 };
      dispatch(setCartItem(bouquet));
    },
    [dispatch]
  );

  return (
    <div className="wrapper bg-[#040A0A]">
      <Intro cart={cart} openCart={openCart} openModal={openModal} />
      <CatalogBlock />
      <PopularBouquetsBlock onClick={onClick} bouquets={bouquets} />
      <HomeOrderBlock />
      <OccasionBlock />
      <QuestionBlock />
      <CardFooterBlock />
    </div>
  );
};

export default Home;
