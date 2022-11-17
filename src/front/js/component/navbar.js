import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  let navigate = useNavigate();

  return (
    <>
      {/* Open LogIn Modal NOTA: El Modal tiene que estar aquí porque el navabar esta fijo y si se crea después no funciona.*/}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Log In
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="registration-form-modal">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control item"
                    id="username"
                    placeholder="Username"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control item"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div class="social-media">
                  <h5>
                    You can also Log In with your social networks. If you don't
                    have an account,{" "}
                    <button
                      data-bs-dismiss="modal"
                      onClick={(event) => {
                        navigate("/signUp");
                      }}
                    >
                      Sign Up Now!
                    </button>
                  </h5>
                  <div class="social-icons">
                    <a href="#">
                      <i class="bi bi-facebook" title="Facebook"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-google" title="Google"></i>
                    </a>
                    <a href="#">
                      <i class="bi bi-twitter" title="Twitter"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="stocky-button"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="stocky-button">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Close LogIn Modal */}

      <nav className="navbar navbar-expand-md navbar-light sticky-top bg-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://cdn.discordapp.com/attachments/245471080829943820/1042278498254979112/Stocky_Logo_Only.png"
              width="64px"
            />
          </a>
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
