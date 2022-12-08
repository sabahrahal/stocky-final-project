import React, { useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";
import { EditProduct } from "./EditProduct.jsx";

export const TableProducts = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="scroll-table">
            {store.products.length === 0 ? (
                <div className="full-width-widget-container">
                    <div className="welcome-widget-text-container">
                        <h1>Use the + button to start adding products!</h1>
                    </div>
                    <div className="welcome-widget-image">
                        <img src="https://cdn.discordapp.com/attachments/245471080829943820/1049148564611285052/business-3d-378.png" />
                    </div>
                </div>
            ) : (
                <>
                    <h2 className="table-text">All Products</h2>
                    <table className="content-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Supplier</th>
                                <th>Details</th>
                                <th>Serial #</th>
                                <th>Quantity</th>
                                <th>Buy Cost (UNIT)</th>
                                <th>Sell Cost (UNIT)</th>
                                <th className="text-center">Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {store.products
                                .sort((a, b) => {
                                    if (a.id > b.id) return -1;
                                    if (b.id > a.id) return 1;
                                    return 0;
                                })
                                .map((product) => {
                                    return (
                                        <tr key={product.id}>
                                            <td>{product.name}</td>
                                            <td>{product.supplier_name}</td>
                                            <td>{product.details}</td>
                                            <td>{product.serial_number}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.buying_cost.toFixed(
                                        2
                                    )}$</td>
                                            <td>{product.selling_cost.toFixed(
                                        2
                                    )}$</td>
                                            <td className="text-center">
                                                <EditProduct
                                                    product={product}
                                                />
                                                <i
                                                    className="bi bi-pencil-square table-edit-icon"
                                                    data-bs-toggle="modal"
                                                    data-bs-target={`#modal-${product.id}`}
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
