import React, { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";
import { EditSupplier } from "./EditSupplier.jsx";

export const TableSuppliers = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="scroll-table">
            {store.suppliers.length === 0 ? (
                <div className="full-width-widget-container">
                    <div className="welcome-widget-text-container">
                        <h1>Start adding suppliers to use Stocky!</h1>
                    </div>
                    <div className="welcome-widget-image">
                        <img src="https://cdn.discordapp.com/attachments/245471080829943820/1049148564611285052/business-3d-378.png" />
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="table-text">All suppliers</h2>
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Rif</th>
                                <th>Address</th>
                                <th className="text-center">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store.suppliers
                                .sort((a, b) => {
                                    if (a.id > b.id) return -1;
                                    if (b.id > a.id) return 1;
                                    return 0;
                                })
                                .map((supplier) => {
                                    return (
                                        <tr key={supplier.id}>
                                            <td>{supplier.name}</td>
                                            <td>{supplier.phone}</td>
                                            <td>{supplier.email}</td>
                                            <td>{supplier.rif}</td>
                                            <td>{supplier.address}</td>
                                            <td className="text-center">
                                                <EditSupplier
                                                    supplier={supplier}
                                                />
                                                <i
                                                    className="bi bi-pencil-square table-edit-icon"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#modal-${supplier.id}`}
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
