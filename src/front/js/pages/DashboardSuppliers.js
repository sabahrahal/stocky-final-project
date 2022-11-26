import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { AddSupplier } from "../component/dashboard/suppliers/AddSupplier.jsx";

export const DashboardSuppliers = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [add, setAdd] = useState(false);

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
        <div className="dashboard-page-container">
            <div className="d-flex align-items-center">
                <h1>Suppliers</h1>
                <div className="dashboard-add-icon" onClick={(event) => {
                    if (add == false) setAdd(true);
                    else setAdd(false);
                }}>
                    {add ? <i class="fa fa-minus"></i> : <i className="fas fa-solid fa-plus"></i>}
                </div>
            </div>

            {add && <AddSupplier />}

        </div >
    );
};
