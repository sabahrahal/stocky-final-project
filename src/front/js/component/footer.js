import React, { Component } from "react";
import "../../styles/footer.css";


export const Footer = () => (
  <footer className="footer container pt-5">
    <div className="d-flex justify-content-between align-items-center footer-container-responsive">
      <div className="footer-address">
        <p>
          <b>Caracas, Venezuela</b>
          <br />
          Las Mercedes Calle Madrid
          <br />
          Floor 1 Office K
        </p>
      </div>
      <div className="footer-icon-info d-flex flex-column">
        <i className="bi bi-telephone-fill d-flex align-items-center">
          &nbsp; 0265-262-8899
        </i>
        <i className="bi bi-whatsapp d-flex align-items-center">
          &nbsp; +(58)-414-272-11-86
        </i>
        <i className="bi bi-telegram d-flex align-items-center">
          &nbsp; +(58)-414-272-11-86
        </i>
        <i className="bi bi-envelope-fill d-flex align-items-center">
          &nbsp; info@stocky.com
        </i>
      </div>

      <div className="footer-button">
        <a className="stocky-button" href="#contact_us">
          Contact Us
        </a>
      </div>
    </div>
    <hr className="hr-color my-3" />
    <div className="d-flex justify-content-between pb-3 footer-container-responsive">
      <div className="social-icons my-0">
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
      <div className="d-flex align-items-center footer-links">
        <a href="#home">Home</a>
        &nbsp;
        <a href="#road_map">Road Map</a>
        &nbsp;
        <a href="#about_us">About</a>
        &nbsp;
        <a href="#contact_us">Contact Us</a>
      </div>
      <div className="d-flex align-items-center footer-img">
        <img
          src="https://cdn.discordapp.com/attachments/747040302988132352/1041237107454255124/logo_png_sabah.png"
          width="200px"
        />
      </div>
    </div>
  </footer>
);
