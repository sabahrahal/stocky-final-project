import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

export const Navbar = () => {
  let navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {/* Open LogIn Modal NOTA: El Modal tiene que estar aquí porque el navabar esta fijo y si se crea después no funciona.*/}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content d-flex flex-column">
            <div className="modal-background">
              <div className="d-flex justify-content-around align-items-center modal-header-container">
                <h1 className="modal-title fs-2 p-4 text-white" id="exampleModalLabel">
                  <b>

                    Welcome back!
                  </b>
                </h1>
                <img className="welcome-widget-image" src="https://cdn.discordapp.com/attachments/245471080829943820/1049301607742984242/business-3d-flying-businessman-in-blue-suit.png" />
                <div>
                  <i className="bi bi-x-circle-fill modal-icon me-4"
                    data-bs-dismiss="modal"
                    aria-label="Close"></i>
                </div>
              </div>
            </div>
            <div className="modal-info-container">
              <div className="modal-body">
                <div className="registration-form-modal">
                  <div className="modal-form-group">
                    <div className="form-icon mb-1">
                      <span>
                        <i className="fas fa-solid fa-user"></i>
                      </span>
                    </div>
                    <label className="modal-input-label">Username</label>
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
                  <div className="modal-form-group">
                    <label className="modal-input-label">Password</label>
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
                  <div className="d-flex align-items-center">
                    {username === "" || password === "" ?
                      <button
                        className="btn btn-block stocky-button modal-button"
                        disabled
                      >
                        Log In
                      </button> :
                      <button
                        type="button"
                        className="stocky-button modal-button"
                        data-bs-dismiss="modal"
                        onClick={async (event) => {
                          const success = await actions.logIn(username, password);
                          if (success) navigate('/companies');
                        }}
                      >
                        Log In
                      </button>
                    }
                  </div>
                  <div className="my-2 d-flex flex-column justify-content-center align-items-center">
                    <div>
                      <hr></hr>
                      <h5>
                        or login using a social network
                      </h5>
                    </div>
                    <div className="social-icons">
                      <a href="#">
                        <i className="bi bi-facebook widget-icon-gradient" title="Facebook"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-google widget-icon-gradient" title="Google"></i>
                      </a>
                      <a href="#">
                        <i className="bi bi-twitter widget-icon-gradient" title="Twitter"></i>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center my-2 modal-footer">
                    <h5 className="m-0 py-1">Not a member? <a
                      className="modal-signup-anchor"
                      data-bs-dismiss="modal"
                      onClick={(event) => {
                        navigate("/sign-up");
                      }}
                    >
                      Sign up
                    </a></h5>
                  </div>
                </div>
              </div>
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
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="navbar-item">
                <a className="nav-link" href="#road_map">
                  RoadMap
                </a>
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
                {store.token && store.token != "" && store.token != undefined ?
                  <>
                    <button
                      className="stocky-button me-2"
                      onClick={(event) => {
                        navigate("/companies");
                      }}
                    >
                      <i className="bi bi-three-dots me-2"></i>
                      Dashboard</button>
                    <button
                      className="stocky-button"
                      onClick={(event) => {
                        actions.logOff();
                        navigate("/");
                      }}
                    > <i className="bi bi-box-arrow-in-left pe-2"></i>Log Out</button>
                  </>
                  : <button
                    className="stocky-button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Log In
                  </button>}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
