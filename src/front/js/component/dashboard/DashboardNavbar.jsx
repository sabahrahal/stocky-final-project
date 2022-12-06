import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

export const DashboardNavbar = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.syncCompany();
    }, []);

    return (
        <div className="dashboard-navbar-container fixed-bottom d-flex flex-row align-items-center justify-content-center">
            <div className="d-flex flex-row align-items-center">
                <div>
                    <img
                        src={store.selectedCompany.img_url}
                        className="dashboard-company-img bg-white"
                    />
                </div>
                <div className="d-flex flex-row">
                    <div
                        className={
                            location.pathname.includes("home")
                                ? "dashboard-navbar-icons dashboard-navbar-icons-active"
                                : "dashboard-navbar-icons"
                        }
                        // className="dashboard-navbar-icons dashboard-navbar-icons-active"
                        onClick={(event) => {
                            navigate("/dashboard/home");
                        }}
                    >
                        <i className="bi bi-house-fill dashboard-icon"></i>
                        <span className="dashboard-navbar-text">Home</span>
                    </div>
                    <div
                        className={
                            location.pathname.includes("suppliers")
                                ? "dashboard-navbar-icons dashboard-navbar-icons-active"
                                : "dashboard-navbar-icons"
                        }
                        onClick={(event) => {
                            navigate("/dashboard/suppliers");
                        }}
                    >
                        <i className="bi bi-building-fill-check dashboard-icon"></i>
                        <span className="dashboard-navbar-text">Suppliers</span>
                    </div>
                    <div
                        className={
                            location.pathname.includes("products")
                                ? "dashboard-navbar-icons dashboard-navbar-icons-active"
                                : "dashboard-navbar-icons"
                        }
                        onClick={(event) => {
                            navigate("/dashboard/products");
                        }}
                    >
                        <i className="bi bi-box-seam-fill dashboard-icon"></i>
                        <span className="dashboard-navbar-text">Products</span>
                    </div>
                    <div
                        className={
                            location.pathname.includes("customers")
                                ? "dashboard-navbar-icons dashboard-navbar-icons-active"
                                : "dashboard-navbar-icons"
                        }
                        onClick={(event) => {
                            navigate("/dashboard/customers");
                        }}
                    >
                        <i className="bi bi-person-badge-fill dashboard-icon"></i>
                        <span className="dashboard-navbar-text">Customers</span>
                    </div>
                    <div
                        className={
                            location.pathname.includes("orders")
                                ? "dashboard-navbar-icons dashboard-navbar-icons-active"
                                : "dashboard-navbar-icons"
                        }
                        onClick={(event) => {
                            navigate("/dashboard/orders");
                        }}
                    >
                        <i className="bi bi-receipt dashboard-icon"></i>
                        <span className="dashboard-navbar-text">Orders</span>
                    </div>
                    <div
                        className={
                            location.pathname.includes("register")
                                ? "dashboard-navbar-icons dashboard-navbar-icons-active"
                                : "dashboard-navbar-icons"
                        }
                        onClick={(event) => {
                            navigate("/dashboard/register");
                        }}
                    >
                        <i className="bi bi-cash-stack dashboard-icon"></i>
                        <span className="dashboard-navbar-text">Register</span>
                    </div>
                </div>
            </div>
            <div
                className="dashboard-navbar-icons"
                onClick={(event) => {
                    actions.clearDashboardData();
                    navigate("/companies");
                }}
            >
                {/* <i className="bi bi-door-open-fill dashboard-icon"></i> */}
                <i className="bi bi-x-circle-fill dashboard-icon"></i>
            </div>
        </div>
    );
};
