import { Route } from "react-router-dom";
import { lazy } from "react";
import withSuspense from "./AutoSuspense";
import RentalManage from "../pages/MainRoutes/RentalsManage/RentalManage";

const HomePage = withSuspense(
  lazy(() => import("../pages/MainRoutes/HomePage/HomePage"))
);

const ExplorePage = withSuspense(
  lazy(() => import("../pages/MainRoutes/ExplorePage/ExplorePage"))
);

const HouseDetailPage = withSuspense(
  lazy(() => import("../pages/MainRoutes/HouseDetailPage/HouseDetailPage"))
);

const UserPanel = withSuspense(
  lazy(() => import("../pages/MainRoutes/UserPanelPage/UserPanel"))
);

// Separate routes for user panel and main layout
const UserPanelRoutes = (
  <Route path="/user-panel" element={<UserPanel />}>
    <Route index element={<UserPanel />} />
    <Route path="profile" element={<UserPanel />} />
    <Route path="reservations" element={<UserPanel />} />
    <Route path="transactions" element={<UserPanel />} />
    <Route path="notifications" element={<UserPanel />} />
    <Route path="settings" element={<UserPanel />} />
  </Route>
);

const MainRoutes = [
  // main pages with layout
  <Route key="home" path="/" element={<HomePage />} />,
  <Route key="home" path="/rentals-managment" element={<RentalManage />} />,
  <Route path="/Explore" element={<ExplorePage />} />,
  <Route path="/House/:id?" element={<HouseDetailPage />} />,
  <Route path="/user-panel" element={<UserPanel />}></Route>,
];

export { MainRoutes, UserPanelRoutes };
