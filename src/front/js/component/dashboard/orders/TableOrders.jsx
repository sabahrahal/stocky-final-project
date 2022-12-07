import React, { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const TableCustomerOrders = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCustomerOrders();
    }, []);

    return (
        <div className="scroll-table">
            {store.customerOrders.length === 0 ? (
                <div className="full-width-widget-container">
                    <div className="welcome-widget-text-container">
                        <h1>Start selling to add orders!</h1>
                    </div>
                    <div className="welcome-widget-image">
                        <img src="https://cdn.discordapp.com/attachments/245471080829943820/1049148564611285052/business-3d-378.png" />
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="table-text">All Orders</h2>
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Details</th>
                                <th>Payment</th>
                                <th>Customer</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store.customerOrders
                                .sort((a, b) => {
                                    if (a.id > b.id) return -1;
                                    if (b.id > a.id) return 1;
                                    return 0;
                                })
                                .map((order) => {
                                    return (
                                        <tr key={order.id}>
                                            <td>{order.order_details}</td>
                                            <td>{order.pay_method}</td>
                                            <td>
                                                {order.customer_name}{" "}
                                                {
                                                    order.customer_document_identity
                                                }{" "}
                                                {order.customer_phone}{" "}
                                                {order.customer_address}
                                            </td>
                                            <td>{order.total_payment}$</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};
