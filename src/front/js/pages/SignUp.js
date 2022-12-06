import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
    const { store, actions } = useContext(Context);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    let navigate = useNavigate();

    useEffect(() => {
        const authenticated = sessionStorage.getItem("authenticated");
        if (authenticated) {
            navigate("/companies");
        }
        if (store.token && store.token != "" && store.token != undefined) {
            navigate("/companies")
        }
    }, [store.token]);

    return (
        <>
            <div className="full-width-widget-container mt-0 mb-1">
                <div className="welcome-widget-image">
                    <img src="https://cdn.discordapp.com/attachments/245471080829943820/1049325535760744508/business-3d-close-up-of-businessman-in-dark-blue-suit-with-coffee-mug.png" />
                </div>
                <div className="welcome-widget-text-container">
                    <h1>Create an account to start using Stocky.</h1>
                </div>
            </div>
            <div className="registration-form pt-0">
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
                            placeholder="Username*"
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
                            placeholder="Password*"
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
                            placeholder="Email*"
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
                            placeholder="Phone Number*"
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                            value={phone}
                        />
                    </div>
                    <div className="form-group d-flex justify-content-center">
                        {username === "" || password === "" || email === "" || phone === "" ?
                            <button
                                className="btn btn-block stocky-button"
                                disabled
                            >
                                Create Account
                            </button> :
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
                        }
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
