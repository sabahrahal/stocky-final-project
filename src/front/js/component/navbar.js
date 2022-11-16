import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
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
              <a className="nav-link active">Home</a>
            </li>
            <li className="navbar-item">
              <a className="nav-link">About</a>
            </li>
            <li className="navbar-item">
              <a className="nav-link">Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item stocky-button-mobile">
              <button className="stocky-button">Log In</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
