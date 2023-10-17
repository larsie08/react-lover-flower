import { FC } from "react";

import {
  AboutOrderBlock,
  CatalogBlock,
  Footer,
  Header,
  Intro,
  OccasionBlock,
  PopularBouquetsBlock,
} from "../../components";

export const Home: FC = () => {
  return (
    <div className="wrapper bg-[#040A0A]">
      <Intro />
      <CatalogBlock />
      <PopularBouquetsBlock />
      <AboutOrderBlock />
      <OccasionBlock />
      <Footer />
    </div>
  );
};
