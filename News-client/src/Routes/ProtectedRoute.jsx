import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/signup");
        }
    }, [navigate]);

    return <Outlet />;
};

export default ProtectedRoute;