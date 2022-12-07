import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";

export const OrderDetails = (props) => {
    const { store, actions } = useContext(Context);
    const [customerData, setCustomerData] = useState();
    const [productsData, setProductsData] = useState([]);
    const [date, setDate] = useState();

    const getCustomerData = async () => {
        const data = await actions.getCustomerById(props.selectedCustomer);
        setCustomerData(data);
    };

    const getProductsData = async () => {
        for (const product of props.productsDetails) {
            const data = await actions.getProductById(product.id);
            data.sell_quantity = product.quantity;
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
                <div>
                    <div>{date}</div>
                </div>
            </div>

            <hr></hr>
            <div>
                {productsData.map((product) => {
                    return (
                        <div
                            className="d-flex justify-content-between"
                            key={product.id}
                        >
                            <div className="d-flex">
                                <p>
                                    {product.sell_quantity}x{product.name}{" "}
                                    {product.details}
                                </p>
                            </div>
                            <p>{product.selling_cost}$x{product.sell_quantity}={product.selling_cost * product.sell_quantity}</p>
                        </div>
                    );
                })}
            </div>
            <button
                onClick={(event) => {
                    actions.createCustomerOrder(
                        "zelle",
                        props.selectedCustomer,
                        props.productsDetails
                    );
                }}
            >
                CREAR ORDEN
            </button>
        </div>
    );
};
