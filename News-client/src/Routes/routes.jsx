import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Auth from "../Pages/Auth";
import MainPage from "../Pages/MainPage";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        {/* Add other protected routes here */}
      </Route>
    </Routes>
  );
};

export default MyRoutes;
