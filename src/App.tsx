import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { CallModal, Footer, Header } from "./components";

import Home from "./pages/Home";

const DeliveryPage = lazy(
  () => import(/* webpackChunkName: "DeliveryPage" */ "./pages/DeliveryPage")
);
const AboutUsPage = lazy(
  () => import(/* webpackChunkName: "AboutUsPage" */ "./pages/AboutUsPage")
);
const ContactsPage = lazy(
  () => import(/* webpackChunkName: "ContactsPage" */ "./pages/ContactsPage")
);
const FAQPage = lazy(
  () => import(/* webpackChunkName: "FAQPage" */ "./pages/FAQPage")
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
          <Route path="FAQ" element={<FAQPage />} />
        </Routes>
      </Suspense>

      <Footer />
      <CallModal />
    </>
  );
}

export default App;
