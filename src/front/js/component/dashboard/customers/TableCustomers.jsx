import React, { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";
import { EditCustomer } from "./EditCustomer.jsx";

export const TableCustomers = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="scroll-table">
            {store.customers.length === 0 ? (
                <div className="full-width-widget-container">
                    <div className="welcome-widget-text-container">
                        <h1>Start selling to add costumers!</h1>
                    </div>
                    <div className="welcome-widget-image">
                        <img src="https://cdn.discordapp.com/attachments/245471080829943820/1049148564611285052/business-3d-378.png" />
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="table-text">All Customers</h2>
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Document</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th className="text-center">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store.customers
                                .sort((a, b) => {
                                    if (a.id > b.id) return -1;
                                    if (b.id > a.id) return 1;
                                    return 0;
                                })
                                .map((customer) => {
                                    return (
                                        <tr key={customer.id}>
                                            <td>{customer.name}</td>
                                            <td>
                                                {customer.document_identity}
                                            </td>
                                            <td>{customer.phone}</td>
                                            <td>{customer.address}</td>
                                            <td>{customer.email}</td>
                                            <td className="text-center">
                                                <EditCustomer
                                                    customer={customer}
                                                />
                                                <i
                                                    className="bi bi-pencil-square table-edit-icon"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#modal-${customer.id}`}
                                                ></i>
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
