import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            {/* Open LogIn Modal NOTA: El Modal tiene que estar aquí porque el navabar esta fijo y si se crea después no funciona.*/}
            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="exampleModalLabel"
                            >
                                Log In
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="registration-form-modal">
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
                                <div className="social-media">
                                    <h5>
                                        You can also Log In with your social
                                        networks. If you don't have an account,{" "}
                                        <a
                                            className="modal-signup-anchor"
                                            data-bs-dismiss="modal"
                                            onClick={(event) => {
                                                navigate("/signUp");
                                            }}
                                        >
                                            Sign Up Now!
                                        </a>
                                    </h5>
                                    <div className="social-icons">
                                        <a href="#">
                                            <i
                                                className="bi bi-facebook"
                                                title="Facebook"
                                            ></i>
                                        </a>
                                        <a href="#">
                                            <i
                                                className="bi bi-google"
                                                title="Google"
                                            ></i>
                                        </a>
                                        <a href="#">
                                            <i
                                                className="bi bi-twitter"
                                                title="Twitter"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="stocky-button"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="stocky-button">
                                Log In
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Close LogIn Modal */}

            <nav className="navbar navbar-expand-md navbar-light sticky-top bg-white">
                <div className="container">
                    <Link to={"/"} className="navbar-brand">
                        <img
                            src="https://cdn.discordapp.com/attachments/245471080829943820/1042278498254979112/Stocky_Logo_Only.png"
                            width="64px"
                        />
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#menu"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav navbar-mobile">
                            <li className="navbar-item">
                                <Link to={"/"} className="nav-link active">
                                    Home
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link" href="#about_us">
                                    About
                                </a>
                            </li>
                            <li className="navbar-item">
                                <a className="nav-link" href="#contact_us">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="navbar-item stocky-button-mobile">
                                <button
                                    className="stocky-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    Log In
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
