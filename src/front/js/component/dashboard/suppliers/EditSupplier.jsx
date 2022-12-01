import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const EditSupplier = (props) => {
    const { store, actions } = useContext(Context);
    const [name, setName] = useState(props.supplier.name);
    const [phone, setPhone] = useState(props.supplier.phone);
    const [email, setEmail] = useState(props.supplier.email);
    const [rif, setRif] = useState(props.supplier.rif);
    const [address, setAddress] = useState(props.supplier.address);

    return (
        <div key={props.supplier.id}>
            <div className="modal fade" id={`modal-${props.supplier.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        Update Supplier <br />
                                        "{name}"
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
                                            actions.updateSupplier(props.supplier.id, name, phone, email, rif, address);
                                        }}
                                    >
                                        Update Supplier
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
