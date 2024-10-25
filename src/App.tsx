import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useSelector } from "react-redux";

import { fetchBouquets } from "./redux/bouquets/asyncActions";
import { setConfirm } from "./redux/filter/slice";
import { RootState, useAppDispatch } from "./redux/store";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import { CallModal, Cart } from "./components";
import OrderPage from "./pages/OrderPage";

const DeliveryPage = lazy(() => import("./pages/DeliveryPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const CorporatePage = lazy(() => import("./pages/CorporatePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const SearchResultPage = lazy(() => import("./pages/SearchResultPage"));
const BouquetPage = lazy(() => import("./pages/BouquetPage"));
const EmptyPage = lazy(() => import("./pages/EmptyPage"));

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
const OrderFormBlock = lazy(
  () => import("./components/PagesCompanents/OrderCompanents/OrderFormBlock")
);

const ROUTE_PATHS = {
  HOME: "/",
  CATALOG: "/catalog",
  BOUQUET: "/catalog/bouquet/:id",
  DELIVERY: "/delivery",
  ABOUT_US: "/aboutUs",
  CONTACTS: "/contacts",
  FAQ: "/FAQ",
  CORPORATE: "/corporate",
  SEARCH: "/search/:searchValue?",
  ORDER: "/order",
};

const allowedPaths = [
  ROUTE_PATHS.HOME,
  ROUTE_PATHS.CATALOG,
  ROUTE_PATHS.BOUQUET,
];

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const sortBy = useSelector(
    (state: RootState) => state.filter.sort.sortProperty
  );
  const { categoryId, filtersId, isConfirm } = useSelector(
    (state: RootState) => state.filter
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchParams = {
          sortBy,
          categoryId,
          ...(location.pathname === ROUTE_PATHS.CATALOG && { filtersId }),
        };

        if (allowedPaths.includes(location.pathname))
          await dispatch(fetchBouquets(fetchParams));

        dispatch(setConfirm(false));
      } catch (error) {
        console.error("Error fetching bouquets:", error);
      }
    };
    fetchData();
  }, [dispatch, sortBy, categoryId, location, isConfirm]);

  return (
    <>
      <Suspense fallback={<MainLayout />}>
        <Routes>
          <Route path={ROUTE_PATHS.HOME} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<EmptyPage />} />
            <Route path={ROUTE_PATHS.CATALOG} element={<CatalogPage />} />
            <Route path={ROUTE_PATHS.DELIVERY} element={<DeliveryPage />} />
            <Route path={ROUTE_PATHS.ABOUT_US} element={<AboutUsPage />} />
            <Route path={ROUTE_PATHS.CONTACTS} element={<ContactsPage />} />
            <Route path={ROUTE_PATHS.FAQ} element={<FAQPage />} />
            <Route path={ROUTE_PATHS.CORPORATE} element={<CorporatePage />} />
            <Route path={ROUTE_PATHS.SEARCH} element={<SearchResultPage />} />

            <Route path={ROUTE_PATHS.ORDER} element={<OrderPage />}>
              <Route index element={<OrderFormBlock />} />
            </Route>
            <Route path={ROUTE_PATHS.BOUQUET} element={<BouquetPage />}>
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
