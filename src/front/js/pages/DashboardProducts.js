import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { NavbarProducts } from "../component/dashboard/products/NavbarProducts.jsx";
import { TableProducts } from "../component/dashboard/products/TableProducts.jsx";
import { SearchResultsProducts } from "../component/dashboard/products/SearchResultsProducts.jsx";


export const DashboardProducts = () => {
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
        actions.getProducts();
    }, [])

    return (
        <div className="container-fluid dashboard-page-container">
            <NavbarProducts searchInput={search} setSearchInput={setSearch} />
            {search === "" ? <TableProducts /> :
                <SearchResultsProducts searchInput={search} setSearchInput={setSearch}/>}
        </div>
    );
};
