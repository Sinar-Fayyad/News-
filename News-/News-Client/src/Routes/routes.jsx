import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Auth from "../Pages/Auth";
import MainPage from "../Pages/MainPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/main" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
