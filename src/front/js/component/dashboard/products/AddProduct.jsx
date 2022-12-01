import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const AddProduct = () => {
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [quantity, setQuantity] = useState("");
    const [buyCost, setBuyCost] = useState("");
    const [sellCost, setSellCost] = useState("");
    const [selectedSupplier, setSelectedSupplier] = useState("");
    const [searchSupplier, setSearchSupplier] = useState("");
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getSuppliers();
    }, []);

    return (
        <div className="dashboard-add-form">
            <form
                onClick={(event) => {
                    event.preventDefault();
                }}
            >
                <div>
                    <h4 className="mb-3 text-center">
                        Add a new product to your inventory
                    </h4>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Name*"
                        onChange={(event) => {
                            setName(event.target.value);
                        }}
                        value={name}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Details"
                        onChange={(event) => {
                            setDetails(event.target.value);
                        }}
                        value={details}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Serial Number"
                        onChange={(event) => {
                            setSerialNumber(event.target.value);
                        }}
                        value={serialNumber}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control item"
                        placeholder="Quantity*"
                        onChange={(event) => {
                            setQuantity(event.target.value);
                        }}
                        value={quantity}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control item"
                        placeholder="Buy Cost*"
                        onChange={(event) => {
                            setBuyCost(event.target.value);
                        }}
                        value={buyCost}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="number"
                        className="form-control item"
                        placeholder="Sell Cost"
                        onChange={(event) => {
                            setSellCost(event.target.value);
                        }}
                        value={sellCost}
                    />
                </div>
                <div className="form-group">
                    <h4 className="text-center">Supplier</h4>
                    <div className="d-flex align-items-center">
                        <i className="fas fa-search dashboard-add-form item"></i>
                        <input
                            className="form-control item"
                            placeholder="Search"
                            value={searchSupplier}
                            onChange={(event) => {
                                setSearchSupplier(event.target.value);
                            }}
                        ></input>
                    </div>

                    <select
                        name="supplier"
                        className="form-control form-select item mb-4"
                        value={selectedSupplier}
                        onChange={(event) => {
                            setSelectedSupplier(event.target.value);
                        }}
                    >
                        {searchSupplier === "" ? (
                            <option value="Select">Select Supplier*</option>
                        ) : (
                            <option value="Select">
                                Search results for {searchSupplier}
                            </option>
                        )}

                        {store.suppliers
                            .filter((supplier) => {
                                return supplier.name
                                    .toLowerCase()
                                    .includes(searchSupplier.toLowerCase());
                            })
                            .map((supplier) => {
                                return (
                                    <option
                                        key={supplier.id}
                                        value={supplier.id}
                                    >
                                        {supplier.name}
                                    </option>
                                );
                            })}
                    </select>
                </div>

                <div className="form-group d-flex justify-content-center">
                    {selectedSupplier == "Select" ||
                    selectedSupplier == "" ||
                    name == "" ||
                    quantity == "" ||
                    buyCost == "" ? (
                        <button
                            className="btn btn-block stocky-button"
                            disabled
                        >
                            Save Product
                        </button>
                    ) : (
                        <button
                            className="btn btn-block stocky-button"
                            onClick={(event) => {
                                actions.createProduct(
                                    selectedSupplier,
                                    name,
                                    quantity,
                                    buyCost,
                                    sellCost,
                                    details,
                                    serialNumber
                                );
                                setName("");
                                setDetails("");
                                setSerialNumber("");
                                setQuantity("");
                                setBuyCost("");
                                setSellCost("");
                            }}
                        >
                            Save Product
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};
