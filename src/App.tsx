import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";

import { useAppDispatch } from "./redux/store";
import { fetchBouquets } from "./redux/bouquets/asyncActions";

import { CallModal, Cart, Footer, Header } from "./components";

import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";

const DeliveryPage = lazy(() => import("./pages/DeliveryPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const CorporatePage = lazy(() => import("./pages/CorporatePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const SearchResultPage = lazy(() => import("./pages/SearchResultPage"));
const BouquetPage = lazy(() => import("./pages/BouquetPage"));
const BouquetReviewsBlock = lazy(
  () =>
    import("./components/PagesCompanents/BouquetCompanents/BouquetReviewsBlock")
);
const BouquetDeliveryBlock = lazy(
  () =>
    import(
      "./components/PagesCompanents/BouquetCompanents/BouquetDeliveryBlock"
    )
);

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchBouquets());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <>
      <Suspense fallback={<MainLayout />}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="delivery" element={<DeliveryPage />} />
          <Route path="aboutUs" element={<AboutUsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="FAQ" element={<FAQPage />} />
          <Route path="corporate" element={<CorporatePage />} />
          <Route path="search/:searchValue?" element={<SearchResultPage />} />
          <Route path="catalog/bouquet/:id" element={<BouquetPage />}>
            <Route index element={<BouquetDeliveryBlock />} />
            <Route path="reviews" element={<BouquetReviewsBlock />} />
          </Route>
        </Routes>
        <Footer />
      </Suspense>

      <CallModal />
      <Cart />
    </>
  );
}

export default App;
