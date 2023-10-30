import { Routes, Route } from "react-router-dom";

import { CallModal, Footer, Header } from "./components";

import Home from "./pages/Home";
import { Suspense, lazy } from "react";

const DeliveryPage = lazy(
  () => import(/* webpackChunkName: "DeliveryPage" */ "./pages/DeliveryPage")
);
const AboutUsPage = lazy(
  () => import(/* webpackChunkName: "AboutUsPage" */ "./pages/AboutUsPage")
);
const ContactsPage = lazy(
  () => import(/* webpackChunkName: "ContactsPage" */ "./pages/ContactsPage")
);

function App() {

  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="h-[1000px] bg-[#040A0A]">Идет загрузка...</div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="aboutUs" element={<AboutUsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>

      <Footer />
      <CallModal />
    </>
  );
}

export default App;
