import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const EditCustomer = (props) => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState(props.customer.name);
    const [document, setDocument] = useState(props.customer.document_identity);
    const [phone, setPhone] = useState(props.customer.phone);
    const [address, setAddress] = useState(props.customer.address);
    const [email, setEmail] = useState(props.customer.email);

    return (
        <div key={props.customer.id}>
            <div
                className="modal fade"
                id={`modal-${props.customer.id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content border-0 edit-modal">
                        <div className="dashboard-add-form">
                            <form
                                onClick={(event) => {
                                    event.preventDefault();
                                }}
                            >
                                <div>
                                    <h4 className="mb-3 text-center">
                                        Update customer <br />"{name}"
                                    </h4>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        name="name"
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
                                    <label htmlFor="document">
                                        Document ID
                                    </label>
                                    <input
                                        name="document"
                                        type="text"
                                        className="form-control item"
                                        placeholder="Document ID"
                                        onChange={(event) => {
                                            setDocument(event.target.value);
                                        }}
                                        value={document}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        name="phone"
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
                                    <label htmlFor="address">Address</label>
                                    <input
                                        name="address"
                                        type="text"
                                        className="form-control item"
                                        placeholder="Address"
                                        onChange={(event) => {
                                            setAddress(event.target.value);
                                        }}
                                        value={address}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        name="email"
                                        type="text"
                                        className="form-control item"
                                        placeholder="Email"
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                        value={email}
                                    />
                                </div>
                                <div className="form-group d-flex justify-content-center">
                                    <button
                                        type="button"
                                        className="stocky-button"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="btn btn-block stocky-button ms-3"
                                        data-bs-dismiss="modal"
                                        onClick={(event) => {
                                            actions.updateCustomer(props.customer.id, name, document, phone, address, email);
                                        }}
                                    >
                                        Update Customer
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
