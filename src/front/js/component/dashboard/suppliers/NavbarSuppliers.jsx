import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../store/appContext";
import { AddSupplier } from "./AddSupplier.jsx";

export const NavbarSuppliers = () => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [add, setAdd] = useState(false);
    return (
        <div className='navbar-dashboard-page-container'>
            <div className='navbar-dashboard-page-fist-seccion'>
                <div className="d-flex flex-row align-items-center">
                    <img
                        src="https://cdn.discordapp.com/attachments/245471080829943820/1042278498254979112/Stocky_Logo_Only.png"
                        width="64px"
                    />
                    <h4 className="ms-4 navbar-dashboard-page-title">Suppliers</h4>
                </div>

                <div className="d-flex align-items-center">
                    <div class="search-box">
                        <button class="btn-search"><i class="fas fa-search"></i></button>
                        <input type="text" class="input-search" placeholder="Type to Search..." />
                    </div>

                    <div className="dashboard-add-icon" onClick={(event) => {
                        if (add == false) setAdd(true);
                        else setAdd(false);
                    }}>
                        {add ? <i class="fa fa-minus"></i> : <i className="fas fa-solid fa-plus"></i>}
                    </div>
                </div>

            </div>
            {add && <AddSupplier />}
        </div>
    )
}
