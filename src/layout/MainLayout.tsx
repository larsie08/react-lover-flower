import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "../components";

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
