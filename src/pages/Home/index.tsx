import { FC } from "react";

import {
  AboutOrderBlock,
  CardFooterBlock,
  CatalogBlock,
  Footer,
  Intro,
  OccasionBlock,
  PopularBouquetsBlock,
  QuestionBlock,
} from "../../components";

export const Home: FC = () => {
  return (
    <div className="wrapper bg-[#040A0A]">
      <Intro />
      <CatalogBlock />
      <PopularBouquetsBlock />
      <AboutOrderBlock />
      <OccasionBlock />
      <QuestionBlock />
      <CardFooterBlock />
      <Footer />
    </div>
  );
};
