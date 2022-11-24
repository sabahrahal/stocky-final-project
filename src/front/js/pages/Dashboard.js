import React, { useEffect, useContext } from "react";
import { DashboardNavbar } from "../component/dashboard/DashboardNavbar.jsx";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"

export const Dashboard = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const authenticated = sessionStorage.getItem("authenticated")
        if (!authenticated) {
            navigate("/")
        }
    }, [])

    useEffect(() => {
        const id = sessionStorage.getItem("selectedCompanyId");
        if (!id || id == "" || id == "undefined") navigate("/companies");
        actions.selectCompany(id);
    }, [])

    return (
        <div className="container-fluid">
            <DashboardNavbar />
        </div>
    );
};
