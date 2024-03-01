import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState, useAppDispatch } from "./redux/store";
import { fetchBouquets } from "./redux/bouquets/asyncActions";

import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import { CallModal, Cart } from "./components";

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

  const sortBy = useSelector(
    (state: RootState) => state.filter.sort.sortProperty
  );
  const categoryId = useSelector((state: RootState) => state.filter.categoryId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchBouquets({ sortBy, categoryId }));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch, sortBy, categoryId]);

  return (
    <>
      <Suspense fallback={<MainLayout />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
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
          </Route>
        </Routes>
      </Suspense>

      <CallModal />
      <Cart />
    </>
  );
}

export default App;
