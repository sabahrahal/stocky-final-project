import React from "react";

export const DashboardNavbar = () => {
    return (
        <div className="dashboard-navbar-container d-flex flex-column justify-content-between align-items-center">
            <div>
                <div>
                    <img src="https://adfinis.com/wp-content/uploads/sites/9/2021/09/Canonical_company-Logo.wine_-300x200.png"
                        className="dashboard-company-img bg-white"
                    />
                </div>
                <div>
                    <div className="dashboard-navbar-icons">
                        <i class="bi bi-house-fill dashboard-icon"></i>
                        Home
                    </div>
                    <div className="dashboard-navbar-icons">
                        <i class="bi bi-building-fill-check dashboard-icon"></i>
                        Suppliers
                    </div>
                    <div className=" dashboard-navbar-icons">
                        <i class="bi bi-box-seam-fill dashboard-icon"></i>
                        Products
                    </div>
                </div>
            </div>
            <div>
                <button className="stocky-button">
                    <i class="bi bi-door-open-fill dashboard-icon text-white"></i>
                </button>
            </div>
        </div>
    );
};
