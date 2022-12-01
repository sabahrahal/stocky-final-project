import React, { useState, useContext } from "react";
import { Context } from "../../../store/appContext";

export const AddSupplier = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [rif, setRif] = useState("");
    const [address, setAddress] = useState("");
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
                        Add a new supplier to your inventory
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
                        placeholder="Phone"
                        onChange={(event) => {
                            setPhone(event.target.value);
                        }}
                        value={phone}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Email"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Rif"
                        onChange={(event) => {
                            setRif(event.target.value);
                        }}
                        value={rif}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Address"
                        onChange={(event) => {
                            setAddress(event.target.value);
                        }}
                        value={address}
                    />
                </div>
                <div className="form-group d-flex justify-content-center">
                    {name == "" ? (
                        <button
                            className="btn btn-block stocky-button"
                            disabled
                        >
                            Save Supplier
                        </button>
                    ) : (
                        <button
                            className="btn btn-block stocky-button"
                            onClick={(event) => {
                                actions.createSupplier(
                                    name,
                                    phone,
                                    email,
                                    rif,
                                    address
                                );
                                setName("");
                                setPhone("");
                                setEmail("");
                                setRif("");
                                setAddress("");
                            }}
                        >
                            Save Supplier
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};
