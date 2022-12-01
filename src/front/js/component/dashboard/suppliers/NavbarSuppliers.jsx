import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../store/appContext";
import { AddSupplier } from "./AddSupplier.jsx";

export const NavbarSuppliers = (props) => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [add, setAdd] = useState(false);

    return (
        <div className="navbar-dashboard-page-container">
            <div className="navbar-dashboard-page-first-section">
                <div className="d-flex flex-row align-items-center">
                    <img
                        src="https://cdn.discordapp.com/attachments/245471080829943820/1042278498254979112/Stocky_Logo_Only.png"
                        width="64px"
                    />
                </div>
                <div className="d-flex align-items-center navbar-dashboard-page-title-container">
                    <i className="bi bi-building-fill-check fs-3"></i>
                    <h4 className="ms-2 navbar-dashboard-page-title">
                        Suppliers
                    </h4>
                </div>
                <div className="d-flex align-items-center">
                    <div className="search-box">
                        <button
                            className="btn-search"
                        >
                            <i className="fas fa-search"></i>
                        </button>
                        <input
                            type="text"
                            className="input-search"
                            placeholder="Type to Search..."
                            onChange={(event) => {
                                props.setSearchInput(event.target.value)
                            }}
                            value={props.searchInput}
                        />
                    </div>

                    <div
                        className="dashboard-add-icon"
                        onClick={(event) => {
                            if (add == false) setAdd(true);
                            else setAdd(false);
                        }}
                    >
                        {add ? (
                            <i className="fa fa-minus"></i>
                        ) : (
                            <i className="fas fa-solid fa-plus"></i>
                        )}
                    </div>
                </div>
            </div>
            {add && <AddSupplier />}
        </div>
    );
};
