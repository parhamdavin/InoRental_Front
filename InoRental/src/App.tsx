import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import { MainRoutes, UserPanelRoutes } from "./routes/MainRoutes";

function App() {
  return (
    <Routes>
      {/* Main routes with layout */}
      <Route element={<Layout />}>{MainRoutes}</Route>

      {/* User panel routes without main layout */}
      {UserPanelRoutes}

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
