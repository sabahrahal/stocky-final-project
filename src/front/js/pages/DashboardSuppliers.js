import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { NavbarSuppliers } from "../component/dashboard/suppliers/NavbarSuppliers.jsx";
import { TableSuppliers } from "../component/dashboard/suppliers/TableSuppliers.jsx";

export const DashboardSuppliers = () => {
    const { store, actions } = useContext(Context);
    const  [search, setSearch]  = useState("");
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
            <NavbarSuppliers searchInput={search} setSearchInput={setSearch} />
            {search === "" && <TableSuppliers />}
        </div >
    );
};
