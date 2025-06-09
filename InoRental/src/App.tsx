import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {MainRoutes}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;