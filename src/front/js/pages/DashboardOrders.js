import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { NavbarOrders } from "../component/dashboard/orders/NavbarOrders.jsx";
import { TableCustomerOrders } from "../component/dashboard/orders/TableOrders.jsx";
import { SearchResultsOrders } from "../component/dashboard/orders/SearchResultsOrders.jsx";

export const DashboardOrders = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [search, setSearch] = useState("")


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
            <NavbarOrders setSearchInput={setSearch} searchInput={search} />
            {search == "" ?
                <TableCustomerOrders /> :
                <SearchResultsOrders setSearchInput={setSearch} searchInput={search} />
            }
        </div>
    );
};
