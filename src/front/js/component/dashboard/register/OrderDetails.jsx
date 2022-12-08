import React, { useContext, useEffect, useState, useRef } from "react";
import { Context } from "../../../store/appContext";

export const OrderDetails = React.forwardRef((props, ref) => {
    const { store, actions } = useContext(Context);
    const [customerData, setCustomerData] = useState();
    const [productsData, setProductsData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [date, setDate] = useState();
    const [paymentMethod, setPaymentMethod] = useState("Select");
    const [paymentId, setPaymentId] = useState("");
    const [orderId, setOrderId] = useState();

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
                            3. Add payment method and create order
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
                        {props.showPrint && <p>ORDER #{orderId}</p>}
                        {props.showPrint == false && (
                            <p className="mb-0">Select Payment Method</p>
                        )}
                        {props.showPrint == false ? (
                            <select
                                name="PaymentMethod"
                                className={
                                    paymentMethod == "Select"
                                        ? "form-control form-select item mb-2 ms-auto pulse-animation-no-scale"
                                        : "form-control form-select item mb-2 ms-auto"
                                }
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
                        ) : (
                            <p>{paymentMethod}</p>
                        )}

                        {paymentMethod != "Cash" && paymentMethod != "Select" && (
                            <div>
                                <p className="mb-0">Payment Reference</p>
                                <input
                                    type="text"
                                    value={paymentId}
                                    onChange={(event) => {
                                        setPaymentId(event.target.value);
                                    }}
                                ></input>
                            </div>
                        )}
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
                                            {product.selling_cost.toFixed(2)}$
                                        </p>
                                    </div>
                                    <p>
                                        {(product.selling_cost *
                                            product.sell_quantity).toFixed(2)}
                                        $
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <h5 className="text-end mt-5">Total: {totalAmount.toFixed(2)}$</h5>
                    <div className="d-flex justify-content-end">
                        {props.selectedCustomer == "Select" ||
                        productsData.length == 0 ||
                        props.showPrint ||
                        paymentMethod == "Select" ? (
                            <></>
                        ) : (
                            <button
                                className="btn btn-block stocky-button pulse-animation"
                                onClick={async (event) => {
                                    const success =
                                        await actions.createCustomerOrder(
                                            paymentMethod,
                                            props.selectedCustomer,
                                            props.productsDetails,
                                            date,
                                            paymentId
                                        );
                                    if (success) props.setShowPrint(true);
                                    setOrderId(success.id);
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
                                    setTotalAmount(0);
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
