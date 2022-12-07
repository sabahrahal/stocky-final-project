import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { NavbarRegister } from "../component/dashboard/register/NavbarRegister.jsx";
import { RegisterCustomer } from "../component/register/RegisterCustomer.jsx";
import { RegisterProducts } from "../component/register/RegisterProducts.jsx";
import { OrderDetails } from "../component/register/OrderDetails.jsx"

export const DashboardRegister = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [selectedCustomer, setSelectedCustomer] = useState("Select");
    const [productsDetails, setProductsDetails] = useState([]);

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
            <NavbarRegister />
            <div className="container dashboard-register-container">
                <div>
                    <RegisterCustomer selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer} />
                    <RegisterProducts productsDetails={productsDetails} setProductsDetails={setProductsDetails} />
                </div>
                <div>
                    <OrderDetails selectedCustomer={selectedCustomer} productsDetails={productsDetails}/>
                </div>
            </div>
        </div>
    );
};
