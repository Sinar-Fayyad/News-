import { Routes, Route } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"

const MyRoutes = () => {

    return (
        <Routes>
            {/* <Route path="/" element={<LandingPage />} /> */}

            <Route element={<ProtectedRoute/>}>
                {/* e.g <Route path='/logOut' element={<LogOut />} /> */}
            </Route>
        </Routes>
    );
};

export default MyRoutes;