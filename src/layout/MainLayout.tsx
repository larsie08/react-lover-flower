import { FC } from "react";
import { Outlet } from "react-router-dom";

import { Footer, Header } from "../components";
import AOSProvider from "../components/AOSProvider";

const MainLayout: FC = () => {
  return (
    <div className="layout bg-[#040A0A] flex flex-col justify-between h-[100vh]">
      <Header />
      <div>
        <AOSProvider>
          <Outlet />
        </AOSProvider>
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
