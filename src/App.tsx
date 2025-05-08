import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import { useSelector } from "react-redux";

import { useAppDispatch } from "./redux/store";
import { fetchBouquets } from "./redux/bouquets/asyncActions";
import { selectFiltersState } from "./redux/filter/selectors";
import { setConfirm } from "./redux/filter/slice";

import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import { AlertBlock, CallModal, Cart, HamburgerMenu } from "./components";
import { setModalState, setSeverityOption } from "./redux/modal/slice";
import { ModalType } from "./redux/modal/types";

const DeliveryPage = lazy(() => import("./pages/DeliveryPage"));
const OrderPage = lazy(() => import("./pages/OrderPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const CorporatePage = lazy(() => import("./pages/CorporatePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const SearchResultPage = lazy(() => import("./pages/SearchResultPage"));
const BouquetPage = lazy(() => import("./pages/BouquetPage"));
const EmptyPage = lazy(() => import("./pages/EmptyPage"));

const BouquetReviewsBlock = lazy(
  () => import("./pages/BouquetPage/companents/BouquetReviewsBlock")
);
const BouquetDeliveryBlock = lazy(
  () => import("./pages/BouquetPage/companents/BouquetDeliveryBlock")
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
  "/catalog/bouquet",
];

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { category, filtersId, isConfirm, sortOption, fieldPriceValue } =
    useSelector(selectFiltersState);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchParams = {
          sortProperty: sortOption.sortProperty,
          category,
          fieldPriceValue,
          ...(location.pathname === ROUTE_PATHS.CATALOG && { filtersId }),
        };

        const path = location.pathname.split("/").slice(0, 3).join("/");

        if (allowedPaths.includes(path)) {
          await dispatch(fetchBouquets(fetchParams)).unwrap();

          dispatch(setConfirm(false));
        }
      } catch (error) {
        console.error("Error fetching bouquets:", error);
        dispatch(setModalState({ modalType: ModalType.Alert, isOpen: true }));
        dispatch(setSeverityOption({ severity: "error" }));
      }
    };
    fetchData();
  }, [dispatch, sortOption.sortProperty, category, location, isConfirm]);

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

            <Route path={ROUTE_PATHS.ORDER} element={<OrderPage />} />
            <Route path={ROUTE_PATHS.BOUQUET} element={<BouquetPage />}>
              <Route index element={<BouquetDeliveryBlock />} />
              <Route path="reviews" element={<BouquetReviewsBlock />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>

      <CallModal />
      <Cart />
      <HamburgerMenu />
      <AlertBlock />
    </>
  );
}

export default App;
