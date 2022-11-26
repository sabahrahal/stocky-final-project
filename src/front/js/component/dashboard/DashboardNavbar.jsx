import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const DashboardNavbar = () => {
    const navigate = useNavigate();

    return (
        <div className="dashboard-navbar-container d-flex flex-column justify-content-between align-items-center">
            <div>
                <div>
                    <img
                        src="https://adfinis.com/wp-content/uploads/sites/9/2021/09/Canonical_company-Logo.wine_-300x200.png"
                        className="dashboard-company-img bg-white"
                    />
                </div>
                <div>
                    <div
                        className="dashboard-navbar-icons"
                        onClick={(event) => {
                            navigate("/dashboard/home");
                        }}
                    >
                        <i className="bi bi-house-fill dashboard-icon"></i>
                        Home
                    </div>
                    <div
                        className="dashboard-navbar-icons"
                        onClick={(event) => {
                            navigate("/dashboard/suppliers");
                        }}
                    >
                        <i className="bi bi-building-fill-check dashboard-icon"></i>
                        Suppliers
                    </div>
                    <div
                        className=" dashboard-navbar-icons"
                        onClick={(event) => {
                            navigate("/dashboard/products");
                        }}
                    >
                        <i className="bi bi-box-seam-fill dashboard-icon"></i>
                        Products
                    </div>
                </div>
            </div>
            <div className="dashboard-icon-back">
                <Link to={"/companies"}>
                    <i className="bi bi-door-open-fill dashboard-icon"></i>
                </Link>
            </div>
        </div>
    );
};
