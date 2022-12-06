import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../store/appContext";

export const NavbarRegister = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    return (
        <div className="navbar-dashboard-page-container">
            <div className="navbar-dashboard-page-first-section">
                <div className="d-flex flex-row align-items-center">
                    <img
                        src="https://cdn.discordapp.com/attachments/245471080829943820/1042278498254979112/Stocky_Logo_Only.png"
                        width="64px"
                    />
                </div>
                <div className="d-flex align-items-center navbar-dashboard-page-title-container home-navbar-title navbar-products-title-margin">
                    <i className="bi bi-cash-stack me-2 fs-3"></i>
                    <h4 className=" navbar-dashboard-page-title">Register</h4>
                </div>
                <div className="d-flex align-items-center">
                    <div
                        className="dashboard-add-icon "
                        onClick={(event) => {
                            actions.logOff();
                            navigate("/");
                        }}
                    >
                        <i className="bi bi-box-arrow-in-left fs-4 ms-1"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};
