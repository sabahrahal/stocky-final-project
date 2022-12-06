import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { ProductStockAlert } from "../component/dashboard/home/ProductStockAlert.jsx";
import { NavbarHome } from "../component/dashboard/home/NavbarHome.jsx";
import { WelcomeWidget } from "../component/dashboard/home/WelcomeWidget.jsx";
import { ProductsWidget } from "../component/dashboard/home/ProductsWidget.jsx";

export const DashboardHome = () => {
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
            <NavbarHome />
            <WelcomeWidget />
            <div id="widgets-container">
                <ProductStockAlert />
                <ProductsWidget />
            </div>
        </div>
    );
};
