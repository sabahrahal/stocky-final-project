import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

export const SearchResultsOrders = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div className="scroll-table">
                <h2 className="table-text">
                    Search results for "{props.searchInput}"
                    <i
                        className="bi bi-x-circle-fill  ms-2 clean-search-icon"
                        onClick={(event) => {
                            props.setSearchInput("");
                        }}
                    ></i>
                </h2>
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
                            .filter((order) => {
                                if (
                                    order.order_details
                                        .toLowerCase()
                                        .includes(props.searchInput.toLowerCase())
                                    ||
                                    order.customer_name
                                        .toLowerCase()
                                        .includes(props.searchInput.toLowerCase())
                                    ||
                                    order.customer_document_identity
                                        .includes(props.searchInput)
                                    ||
                                    order.order_date
                                        .toLowerCase()
                                        .includes(props.searchInput.toLowerCase())
                                )
                                    return true;
                            })
                            .map((order) => {
                                return (
                                    <tr key={order.id}>
                                        <td>{order.order_date}</td>
                                        <td>{order.order_details.slice(0, order.order_details.length - 2)}</td>
                                        <td>
                                            {order.customer_name}{" "}
                                            {
                                                order.customer_document_identity
                                            }
                                        </td>
                                        <td>{order.pay_method}</td>
                                        <td>{order.payment_id}</td>
                                        <td>{order.total_payment.toFixed(
                                        2
                                    )}$</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};