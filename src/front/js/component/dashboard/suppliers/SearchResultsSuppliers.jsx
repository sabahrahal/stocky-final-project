import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

export const SearchResultsSuppliers = (props) => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            {props.input === "" ? (
                <></>
            ) : (
                <div className="scroll-table">
                    <h2 className="table-text">
                        Search results for {props.input}
                    </h2>
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
                                .filter(() => {})
                                .map((supplier) => {
                                    return (
                                        <tr>
                                            <td>{supplier.name}</td>
                                            <td>{supplier.phone}</td>
                                            <td>{supplier.email}</td>
                                            <td>{supplier.rif}</td>
                                            <td>{supplier.address}</td>
                                            <td className="text-center">
                                                <i class="bi bi-pencil-square table-edit-icon"></i>
                                            </td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};
