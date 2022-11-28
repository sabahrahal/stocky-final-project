import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

export const CompaniesNavbar = () => {
    let navigate = useNavigate();
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-md navbar-light sticky-top bg-white">
            <div className="container">
                <Link to={"/"} className="navbar-brand">
                    <img
                        src="https://cdn.discordapp.com/attachments/747040302988132352/1041237107454255124/logo_png_sabah.png"
                        width="200px"
                    />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav navbar-mobile"></ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="navbar-item stocky-button-mobile">
                            {store.token &&
                            store.token != "" &&
                            store.token != undefined ? (
                                <button
                                    className="stocky-button"
                                    onClick={(event) => {
                                        actions.logOff();
                                        navigate("/");
                                    }}
                                >
                                    <i class="bi bi-box-arrow-in-left pe-2"></i>
                                    Log Out
                                </button>
                            ) : (
                                <button
                                    className="stocky-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Log In
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
