import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import { CallModal, Footer, Header } from "./components";

import ScrollToTop from "./hooks/ScrollToTop";

import Home from "./pages/Home";

const DeliveryPage = lazy(() => import("./pages/DeliveryPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const CorporatePage = lazy(() => import("./pages/CorporatePage"));

function App() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div className="h-[1000px] bg-[#040A0A]">Идет загрузка...</div>
        }
      >
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="aboutUs" element={<AboutUsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="FAQ" element={<FAQPage />} />
          <Route path="corporate" element={<CorporatePage />} />
        </Routes>
      </Suspense>

      <Footer />
      <CallModal />
    </>
  );
}

export default App;
