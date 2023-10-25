import { FC } from "react";

import {
  AboutOrderBlock,
  CardFooterBlock,
  CatalogBlock,
  Intro,
  OccasionBlock,
  PopularBouquetsBlock,
  QuestionBlock,
} from "../../components";

const Home: FC = () => {
  return (
    <div className="wrapper bg-[#040A0A]">
      <Intro />
      <CatalogBlock />
      <PopularBouquetsBlock />
      <AboutOrderBlock />
      <OccasionBlock />
      <QuestionBlock />
      <CardFooterBlock />
    </div>
  );
};

export default Home;
