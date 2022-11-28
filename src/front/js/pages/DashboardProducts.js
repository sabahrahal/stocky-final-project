import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"

export const DashboardProducts = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const authenticated = sessionStorage.getItem("authenticated")
        if (!authenticated) {
            navigate("/")
        }
        const id = sessionStorage.getItem("selectedCompanyId");
        if (!id || id == "" || id == "undefined") navigate("/companies");
        actions.selectCompany(id);
    }, [])

    return (
        <div className="container-fluid dashboard-page-container">
            <h1>PRODUCTS</h1>
        </div>
    );
};
