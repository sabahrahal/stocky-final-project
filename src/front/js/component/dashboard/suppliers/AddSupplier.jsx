import React, { useState } from "react";

export const AddSupplier = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [rif, setRif] = useState("");
    const [address, setAddress] = useState("");

    return (
        <div className="dashboard-add-form">
            <form>
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
                    <button className="btn btn-block stocky-button">Add</button>
                </div>
            </form>
        </div>
    );
};
