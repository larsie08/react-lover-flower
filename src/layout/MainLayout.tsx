import { FC } from "react";

import { DecorativeElement, Footer, Header } from "../components";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <div className="wrapper bg-[#040A0A]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
