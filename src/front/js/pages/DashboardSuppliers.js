import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { AddSupplier } from "../component/dashboard/suppliers/AddSupplier.jsx";
import { NavbarSuppliers } from "../component/dashboard/suppliers/NavbarSuppliers.jsx";

export const DashboardSuppliers = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [add, setAdd] = useState(false);

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
            <NavbarSuppliers />
        </div >
    );
};
