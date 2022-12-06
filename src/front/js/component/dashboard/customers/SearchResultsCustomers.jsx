import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { EditCustomer } from "./EditCustomer.jsx";

export const SearchResultsCustomers = (props) => {
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
                            .filter((customer) => {
                                return customer.name
                                    .toLowerCase()
                                    .includes(props.searchInput.toLowerCase());
                            })
                            .map((customer) => {
                                return (
                                    <tr>
                                        <td>{customer.name}</td>
                                        <td>{customer.document_identity}</td>
                                        <td>{customer.phone}</td>
                                        <td>{customer.address}</td>
                                        <td>{customer.email}</td>
                                        <td className="text-center">
                                            <EditCustomer customer={customer} />
                                            <i
                                                className="bi bi-pencil-square table-edit-icon"
                                                data-bs-toggle="modal"
                                                data-bs-target={`#modal-${customer.id}`}
                                            ></i>
                                            {/* preguntar a ERNESTO porque al buscar uno no trae la informacion correspondiente y al buscar varios si la trae */}
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
