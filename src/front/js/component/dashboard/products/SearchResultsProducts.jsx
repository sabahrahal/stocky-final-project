import React, { useContext } from "react";
import { Context } from "../../../store/appContext";

export const SearchResultsProducts = (props) => {
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
                            <th>Quantity</th>
                            <th>Buy Cost (UNIT)</th>
                            <th>Sell Cost (UNIT)</th>
                            <th>Details</th>
                            <th>Serial #</th>
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
                            .filter((product) => {
                                return product.name
                                    .toLowerCase()
                                    .includes(props.searchInput.toLowerCase());
                            })
                            .map((product) => {
                                return (
                                    <tr>
                                        <td>{product.name}</td>
                                        <td>{product.quantity}</td>
                                        <td>{product.buying_cost}</td>
                                        <td>{product.selling_cost}</td>
                                        <td>{product.details}</td>
                                        <td>{product.serial_number}</td>
                                        <td className="text-center">
                                            <i
                                                className="bi bi-pencil-square table-edit-icon"
                                                data-bs-toggle="modal"
                                                data-bs-target={`#modal-${product.id}`}
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
