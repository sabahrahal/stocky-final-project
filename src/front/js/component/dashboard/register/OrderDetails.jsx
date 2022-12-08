import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../../store/appContext";

export const OrderDetails = React.forwardRef((props, ref) => {
    const { store, actions } = useContext(Context);
    const [customerData, setCustomerData] = useState();
    const [productsData, setProductsData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [date, setDate] = useState();
    const [paymentMethod, setPaymentMethod] = useState("Select");

    const getCustomerData = async () => {
        const data = await actions.getCustomerById(props.selectedCustomer);
        setCustomerData(data);
    };

    const getProductsData = async () => {
        let total = 0;
        for (const product of props.productsDetails) {
            const data = await actions.getProductById(product.id);
            data.sell_quantity = product.quantity;
            total = total + data.selling_cost * product.quantity;
            setTotalAmount(total);
            setProductsData([...productsData, data]);
        }
    };

    const getDate = () => {
        var date = new Date().toDateString();
        setDate(date);
    };

    useEffect(() => {
        if (props.selectedCustomer != "Select") getCustomerData();
    }, [props.selectedCustomer]);

    useEffect(() => {
        if (props.productsDetails.length != 0) {
            getProductsData();
        }
    }, [props.productsDetails]);

    useEffect(() => {
        getDate();
    }, []);

    return (
        <div className="dashboard-register-big-container">
            <div ref={ref}>
                {props.showPrint == false && (
                    <div>
                        <h4 className="mb-3 text-center">
                            3. Check details and create order
                        </h4>
                    </div>
                )}

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <img
                            src={store.selectedCompany.img_url}
                            className="dashboard-company-img bg-white"
                        />
                    </div>
                    <div className="text-end">
                        <h5>{store.selectedCompany.name}</h5>
                        <h5>{store.selectedCompany.rif}</h5>
                    </div>
                </div>
                <div className="my-3 d-flex justify-content-between align-items-end">
                    <div>
                        <p className="m-1">
                            CUSTOMER: {customerData && customerData.name}
                        </p>
                        <p className="m-1">
                            ID: {customerData && customerData.document_identity}
                        </p>
                        <p className="m-1">
                            ADDRESS: {customerData && customerData.address}
                        </p>
                        <p className="m-1">
                            PHONE: {customerData && customerData.phone}
                        </p>
                    </div>
                    <div className="d-flex flex-column justify-content-end">
                        {props.showPrint == false && (
                            <p>Select Payment Method</p>
                        )}

                        <select
                            name="PaymentMethod"
                            className="form-control form-select item mb-2 w-75 ms-auto"
                            value={paymentMethod}
                            onChange={(event) => {
                                setPaymentMethod(event.target.value);
                            }}
                        >
                            <option value="Select">Select</option>
                            <option value="Cash">Cash</option>
                            <option value="Card">Card</option>
                            <option value="Check">Check</option>
                            <option value="Paypal">Paypal</option>
                            <option value="Zelle">Zelle</option>
                            <option value="Binance">Binance</option>
                        </select>
                        <div className="text-end">{date}</div>
                    </div>
                </div>

                <hr></hr>
                <div className="d-flex flex-column justify-content-between">
                    <div className="register-products-container">
                        {productsData.map((product) => {
                            return (
                                <div
                                    className="d-flex justify-content-between"
                                    key={product.id}
                                >
                                    <div className="d-flex">
                                        <p>
                                            {product.sell_quantity}x
                                            {product.name} {product.details}{" "}
                                            {product.selling_cost}$
                                        </p>
                                    </div>
                                    <p>
                                        {product.selling_cost *
                                            product.sell_quantity}
                                        $
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <h5 className="text-end">Total: {totalAmount}$</h5>
                    <div className="d-flex justify-content-end">
                        {props.selectedCustomer == "Select" ||
                        productsData.length == 0 ||
                        props.showPrint ||
                        paymentMethod == "Select" ? (
                            <div className="d-block h-25"></div>
                        ) : (
                            // <button
                            //     className="btn btn-block stocky-button"
                            //     disabled
                            // >
                            //     Create Order
                            // </button>
                            <button
                                className="btn btn-block stocky-button"
                                onClick={(event) => {
                                    actions.createCustomerOrder(
                                        paymentMethod,
                                        props.selectedCustomer,
                                        props.productsDetails
                                    );
                                    props.setShowPrint(true);
                                }}
                            >
                                Create Order
                            </button>
                        )}
                        {props.showPrint && (
                            <div
                                onClick={(event) => {
                                    props.setShowPrint(false);
                                    props.setSelectedCustomer("Select");
                                    props.setProductsDetails([]);
                                    setProductsData([]);
                                    setCustomerData([]);
                                    setPaymentMethod("Select");
                                }}
                                className="dashboard-add-icon ms-auto"
                            >
                                <i className="bi bi-check-circle-fill fs-4 "></i>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
});
