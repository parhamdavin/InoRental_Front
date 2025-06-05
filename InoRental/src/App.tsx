import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import MainRoutes from "./routes/MainRoutes";
import LoginPage from "./pages/Auth/LoginPage";

function App() {
  return (
    <Routes>
      {/* Auth routes with AuthLayout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
      
      {/* Main routes with Layout */}
      <Route element={<Layout></Layout>}>
        {MainRoutes}
      </Route>
    </Routes>
  );
}

export default App;
