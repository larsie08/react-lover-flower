import { FC } from "react";

import { Footer, Header } from "../components";

const MainLayout: FC = () => {
  return (
    <div className="wrapper bg-[#040A0A] h-[900px]">
      <Header />
      <div className="content">
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
