import { Route } from "react-router-dom";
import { lazy } from "react";
import withSuspense from "./AutoSuspense";

const HomePage = withSuspense(
  lazy(() => import("../pages/MainRoutes/HomePage/HomePage"))
);

const ExplorePage = withSuspense(
  lazy(() => import("../pages/MainRoutes/ExplorePage/ExplorePage"))
);

const HouseDetailPage = withSuspense(
  lazy(() => import("../pages/MainRoutes/HouseDetailPage/HouseDetailPage"))
);

const MainRoutes = [
  // main pages
  <Route key="home" path="/" element={<HomePage />} />, // home page
  <Route path="/Explore" element={<ExplorePage />} />,
  <Route path="/House/:id?" element={<HouseDetailPage />} />,
];

export default MainRoutes;
