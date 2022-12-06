import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { NavbarCustomers } from "../component/dashboard/customers/NavbarCustomers.jsx";
import { TableCustomers } from "../component/dashboard/customers/TableCustomers.jsx";
import { SearchResultsCustomers } from "../component/dashboard/customers/SearchResultsCustomers.jsx";

export const DashboardCustomers = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [search, setSearch] = useState("");


    useEffect(() => {
        const authenticated = sessionStorage.getItem("authenticated")
        if (!authenticated) {
            navigate("/")
        }
        const id = sessionStorage.getItem("selectedCompanyId");
        if (!id || id == "" || id == "undefined") navigate("/companies");
        actions.selectCompany(id);
        actions.getCustomers();
    }, [])

    return (
        <div className="container-fluid dashboard-page-container">
            <NavbarCustomers setSearchInput={setSearch} searchInput={search} />
            {search === "" ? <TableCustomers /> : <SearchResultsCustomers searchInput={search} setSearchInput={setSearch} />}

        </div>
    );
};
