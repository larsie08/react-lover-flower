// import Loadable from "react-loadable";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import { CallModal, Footer, Header } from "./components";

import Home from "./pages/Home";
import DeliveryPage from "./pages/DeliveryPage";

// const DeliveryPage = Loadable({
//   loader: () =>
//     import(/* webpackChunkName: "DeliveryPage" */ "./pages/DeliveryPage"),
//   loading: () => <div>Идет загрузка...</div>,
// });

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="delivery" element={<DeliveryPage />} />
      </Routes>
      <Footer />
      <CallModal />
    </>
  );
}

export default App;
