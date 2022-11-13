import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="https://cdn.discordapp.com/attachments/1041080734464614410/1041138801067687966/Stocky_Logo_Only.svg"
            alt="Logo"
            width="64"
            className="d-inline-block align-text-top"
          />
        </a>
        <div
          className="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
          <button className="stocky-button">Log in</button>
        </div>
      </div>
    </nav>
  );
};
