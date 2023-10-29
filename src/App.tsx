import { Routes, Route } from "react-router-dom";
import "./App.css";

import { CallModal, Footer, Header } from "./components";

import Home from "./pages/Home";
import { Suspense, lazy } from "react";

const DeliveryPage = lazy(
  () => import(/* webpackChunkName: "DeliveryPage" */ "./pages/DeliveryPage")
);
const AboutUsPage = lazy(
  () => import(/* webpackChunkName: "AboutUsPage" */ "./pages/AboutUsPage")
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Идет загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="aboutUs" element={<AboutUsPage />} />
        </Routes>
      </Suspense>

      <Footer />
      <CallModal />
    </>
  );
}

export default App;
