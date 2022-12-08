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
                                <th>Date</th>
                                <th>Details</th>
                                <th>Customer</th>
                                <th>Payment</th>
                                <th>Payment Id</th>
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
                                            <td>{order.order_date}</td>
                                            <td>
                                                {order.order_details.slice(
                                                    0,
                                                    order.order_details.length -
                                                        2
                                                )}
                                            </td>
                                            <td>
                                                {order.customer_name}{" "}
                                                {
                                                    order.customer_document_identity
                                                }
                                            </td>
                                            <td>{order.pay_method}</td>
                                            <td>{order.payment_id}</td>
                                            <td>
                                                {order.total_payment.toFixed(2)}
                                                $
                                            </td>
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
