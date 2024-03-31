import { FC, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "../../redux/store";
import { setIsOpenCart, setIsOpenModal } from "../../redux/modal/slice";
import { setCartItem } from "../../redux/cart/slice";
import { BouquetFilters } from "../../redux/bouquets/types";
import { fetchBouquets } from "../../redux/bouquets/asyncActions";

import {
  HomeOrderBlock,
  CardFooterBlock,
  CatalogBlock,
  Intro,
  OccasionBlock,
  PopularBouquetsBlock,
  QuestionBlock,
} from "../../components";

const Home: FC = () => {
  const dispatch = useAppDispatch();

  const cart = useSelector((state: RootState) => state.cart.items);
  const bouquets = useSelector((state: RootState) => state.bouquets.items);
  const sortBy = useSelector(
    (state: RootState) => state.filter.sort.sortProperty
  );
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);

  const openModal = () => dispatch(setIsOpenModal(true));
  const openCart = () => dispatch(setIsOpenCart(true));

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchBouquets({ sortBy, categoryId }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  const onClick = useMemo(
    () =>
      (
        id: number,
        name: string,
        imageUrl: string,
        cost: number,
        filters: BouquetFilters
      ) => {
        const bouquet = { id, name, imageUrl, cost, count: 1, filters };
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
