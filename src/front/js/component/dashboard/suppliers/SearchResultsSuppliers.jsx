import React, { useContext } from "react";
import { Context } from "../../../store/appContext";
import { EditSupplier } from "./EditSupplier.jsx";

export const SearchResultsSuppliers = (props) => {
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
                            .filter((supplier) => {
                                return supplier.name
                                    .toLowerCase()
                                    .includes(props.searchInput.toLowerCase());
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
                                            <EditSupplier supplier={supplier} />
                                            <i
                                                className="bi bi-pencil-square table-edit-icon"
                                                data-bs-toggle="modal"
                                                data-bs-target={`#modal-${supplier.id}`}
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
