import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";

export const AddProduct = () => {
    const [name, setName] = useState("");
    const [details, setDetails] = useState("");
    const [serialNumber, setSerialNumber] = useState("");
    const [quantity, setQuantity] = useState("");
    const [buyCost, setBuyCost] = useState("");
    const [sellCost, setSellCost] = useState("");
    const { store, actions } = useContext(Context);

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
                        placeholder="Name"
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
                        placeholder="Quantity"
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
                        placeholder="Buy Cost"
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
                <div className="form-group d-flex justify-content-center">
                    <button
                        className="btn btn-block stocky-button"
                        onClick={(event) => {
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
                </div>
            </form>
        </div>
    );
};
