import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        if (store.token && store.token != "" && store.token != undefined)
            navigate("/companies");
    }, [store.token]);

    return (
        <>
            <div className="row col-md-6 mx-auto d-flex flex-column align-items-center justify-content-center">
                <h2 className=" fs-1 mt-5 text-center">
                    Sign Up to start managing your business quickly and
                    efficiently.
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
                            id="username"
                            placeholder="Username"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            value={username}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control item"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
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
                    <div className="form-group d-flex justify-content-center">
                        <button
                            type="button"
                            className="btn btn-block stocky-button"
                            onClick={(event) => {
                                actions.signUp(
                                    username,
                                    password,
                                    email,
                                    phone
                                );
                            }}
                        >
                            Create Account
                        </button>
                    </div>
                </form>
                <div className="social-media">
                    <h5>You can also register with your social networks</h5>
                    <div className="social-icons">
                        <a href="#">
                            <i className="bi bi-facebook" title="Facebook"></i>
                        </a>
                        <a href="#">
                            <i className="bi bi-google" title="Google"></i>
                        </a>
                        <a href="#">
                            <i className="bi bi-twitter" title="Twitter"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
