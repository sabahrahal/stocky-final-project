import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../store/appContext";

export const EditInfo = (props) => {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [companyName, setCompanyName] = useState("");
    const [rif, setRif] = useState("");

    useEffect(() => {
        setUsername(store.currentUser.username);
        setPhone(store.currentUser.phone);
        setEmail(store.currentUser.email);

        setCompanyName(store.selectedCompany.name);
        setRif(store.selectedCompany.rif);
    }, []);

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
                        Edit your user details.
                    </h4>
                </div>
                <div className="form-group">
                    <label className="ms-2">Username</label>
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Name*"
                        onChange={(event) => {
                            setUsername(event.target.value);
                        }}
                        value={username}
                    />
                </div>
                <div className="form-group">
                    <label className="ms-2">Phone</label>
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Phone*"
                        onChange={(event) => {
                            setPhone(event.target.value);
                        }}
                        value={phone}
                    />
                </div>
                <div className="form-group">
                    <label className="ms-2">Email</label>
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Email*"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label className="ms-2">Password</label>
                    <input
                        type="password"
                        className="form-control item"
                        placeholder="Password*"
                        onChange={(event) => {
                            setPassword(event.target.value);
                        }}
                        value={password}
                    />
                </div>
                <div className="form-group d-flex justify-content-center">
                    {username == "" ||
                        email == "" ||
                        phone == "" ||
                        password == "" ? (
                        <button
                            className="btn btn-block stocky-button"
                            disabled
                        >
                            Update User
                        </button>
                    ) : (
                        <button
                            className="btn btn-block stocky-button"
                            onClick={(event) => {
                                props.setInfo(false);
                                actions.updateUser(username, password, email, phone);
                            }}
                        >
                            Update User
                        </button>
                    )}
                </div>

                <div>
                    <h4 className="mb-3 mt-4 text-center">
                        Edit your company details.
                    </h4>
                </div>
                <div className="form-group">
                    <label className="ms-2">Name</label>
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Name*"
                        onChange={(event) => {
                            setCompanyName(event.target.value);
                        }}
                        value={companyName}
                    />
                </div>
                <div className="form-group">
                    <label className="ms-2">Rif</label>
                    <input
                        type="text"
                        className="form-control item"
                        placeholder="Rif*"
                        onChange={(event) => {
                            setRif(event.target.value);
                        }}
                        value={rif}
                    />
                </div>
                <div className="form-group d-flex justify-content-center">
                    {companyName == "" || rif == "" ? (
                        <button
                            className="btn btn-block stocky-button"
                            disabled
                        >
                            Update Company
                        </button>
                    ) : (
                        <button
                            className="btn btn-block stocky-button"
                            onClick={(event) => {
                                props.setInfo(false);
                                actions.updateCompany(companyName, rif);
                            }}
                        >
                            Update Company
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};
