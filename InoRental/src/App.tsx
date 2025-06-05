import { Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <Layout>
      <Routes>{MainRoutes}</Routes>
    </Layout>
  );
}

export default App;
