import React, { useState } from "react";

export const ContactFrom = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <div className="row col-md-6 mx-auto d-flex flex-column align-items-center justify-content-center">
                <h2 className=" fs-1 mt-5 text-center">
                    Reach out to us for more information
                </h2>
            </div>
            <div className="registration-form">
                <form>
                    <div className="form-icon">
                        <span>
                            <i className="fas fa-solid fa-user"></i>
                        </span>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="full-name"
                            placeholder="Full Name"
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="email"
                            placeholder="Email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            id="phone-number"
                            placeholder="Phone Number"
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                            value={phone}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            type="text"
                            className="form-control item"
                            id="message"
                            placeholder="Write in this field your questions or reason for contact..."
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            value={message}
                        />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        <button
                            type="button"
                            className="btn btn-block stocky-button"
                        >
                            Send Contact Form
                        </button>
                    </div>
                </form>
                
            </div>
        </>
    );
};
