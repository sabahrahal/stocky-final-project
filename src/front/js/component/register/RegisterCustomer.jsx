import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";

export const RegisterCustomer = (props) => {
    const { store, actions } = useContext(Context);
    const [searchCustomer, setSearchCustomer] = useState("");

    const [customerName, setCustomerName] = useState("");
    const [customerDocumentIdentity, setCustomerDocumentIdentity] =
        useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");

    useEffect(() => {
        actions.getCustomers();
    }, []);

    return (
        <div className="dashboard-register-mini-container">
            <div className="form-group">
                <div>
                    <h4 className="mb-3 text-center">Select a Customer</h4>
                </div>
                <div className="d-flex align-items-center mb-2">
                    <i className="fas fa-search dashboard-add-form item me-2"></i>
                    <input
                        className="form-control item"
                        placeholder="Search"
                        value={searchCustomer}
                        onChange={(event) => {
                            setSearchCustomer(event.target.value);
                        }}
                    ></input>
                </div>

                <select
                    name="customer"
                    className="form-control form-select item mb-2"
                    value={props.selectedCustomer}
                    onChange={(event) => {
                        props.setSelectedCustomer(event.target.value);
                    }}
                >
                    {searchCustomer === "" ? (
                        <option value="Select">Select Customer</option>
                    ) : (
                        <option value="Select">
                            Search results for {searchCustomer}
                        </option>
                    )}

                    {store.customers
                        .filter((customer) => {
                            if (
                                customer.name
                                    .toLowerCase()
                                    .includes(searchCustomer.toLowerCase()) ||
                                customer.document_identity
                                    .toLowerCase()
                                    .includes(searchCustomer.toLowerCase())
                            )
                                return true;
                        }).sort((a, b) => {
                            if (a.id > b.id) return -1;
                            if (b.id > a.id) return 1;
                            return 0;
                        })
                        .map((customer) => {
                            return (
                                <option key={customer.id} value={customer.id}>
                                    {customer.name} {customer.document_identity}
                                </option>
                            );
                        })}
                </select>

                <div>
                    <h4 className="mb-1 my-3 text-center">
                        Or create a new one
                    </h4>
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Name*"
                        onChange={(event) => {
                            setCustomerName(event.target.value);
                        }}
                        value={customerName}
                    />
                </div>
                <div className="form-group my-1">
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Document ID*"
                        onChange={(event) => {
                            setCustomerDocumentIdentity(event.target.value);
                        }}
                        value={customerDocumentIdentity}
                    />
                </div>
                <div className="form-group my-1">
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Phone"
                        onChange={(event) => {
                            setCustomerPhone(event.target.value);
                        }}
                        value={customerPhone}
                    />
                </div>
                <div className="form-group my-1">
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Address"
                        onChange={(event) => {
                            setCustomerAddress(event.target.value);
                        }}
                        value={customerAddress}
                    />
                </div>
                <div className="form-group mb-3">
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Email"
                        onChange={(event) => {
                            setCustomerEmail(event.target.value);
                        }}
                        value={customerEmail}
                    />
                </div>
                <div className="form-group d-flex justify-content-center">
                    {customerName == "" || customerDocumentIdentity == "" ? (
                        <button
                            className="btn btn-block stocky-button w-100"
                            disabled
                        >
                            Create Customer
                        </button>
                    ) : (
                        <button
                            className="btn btn-block stocky-button w-100"
                            onClick={(event) => {
                                actions.createCustomer(customerName, customerDocumentIdentity, customerPhone, customerAddress, customerEmail)
                                setCustomerName("");
                                setCustomerDocumentIdentity("");
                                setCustomerEmail("");
                                setCustomerPhone("");
                                setCustomerAddress("");
                            }}
                        >
                            Create Customer
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
