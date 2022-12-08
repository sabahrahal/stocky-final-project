import React, { useEffect, useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/dashboard.css"
import { NavbarRegister } from "../component/dashboard/register/NavbarRegister.jsx";
import { RegisterCustomer } from "../component/dashboard/register/RegisterCustomer.jsx";
import { RegisterProducts } from "../component/dashboard/register/RegisterProducts.jsx";
import { OrderDetails } from "../component/dashboard/register/OrderDetails.jsx"
import { useReactToPrint } from "react-to-print";

export const DashboardRegister = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const [selectedCustomer, setSelectedCustomer] = useState("Select");
    const [productsDetails, setProductsDetails] = useState([]);

    const [showPrint, setShowPrint] = useState(false);

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Order",
        pageStyle: () => "print"
    });


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
            {showPrint && <div className="d-flex justify-content-end p-2 align-items-center  mt-5 print-message">
                <i className="bi bi-check-circle-fill fs-4 text-success me-1"></i>
                <h5 className="mb-0">Order successfull, please print your invoice here!</h5>

                <div onClick={handlePrint} className="dashboard-add-icon ms-auto pulse-animation">
                    <i className="bi bi-printer-fill fs-4 "></i>
                </div></div>}
            <div className="container dashboard-register-container">

                <div>
                    <RegisterCustomer selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer} showPrint={showPrint} />
                    <RegisterProducts productsDetails={productsDetails} setProductsDetails={setProductsDetails} showPrint={showPrint} />
                </div>
                <div>

                    <OrderDetails selectedCustomer={selectedCustomer} setSelectedCustomer={setSelectedCustomer} productsDetails={productsDetails} setProductsDetails={setProductsDetails} ref={componentRef} showPrint={showPrint} setShowPrint={setShowPrint} />
                </div>
            </div>
        </div>
    );
};
