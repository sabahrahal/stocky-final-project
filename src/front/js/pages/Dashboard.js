import React, { useEffect } from "react";
import { DashboardNavbar } from "../component/dashboard/DashboardNavbar.jsx";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const authenticated = sessionStorage.getItem("authenticated")
        if (!authenticated) {
            navigate("/")
        }
    }, [])
    return (
        <div>
            <DashboardNavbar />
            DASHBOARD
        </div>
    );
};
