import React from "react";
import { Roadmap } from "../component/home/Roadmap.jsx";
import { AboutUs } from "../component/home/AboutUs.jsx";
import { ContactForm } from "../component/home/ContactForm.jsx";
import "../../styles/home.css";
import "../../styles/roadMap.css";
import "../../styles/contactForm.css";
import "../../styles/ModalLogInForm.css";

export const Home = () => {
  return (
    <div className="container mt-3" id="home">
      <div className="row hero d-flex justify-content-center align-items-center">
        <div className="col-md-6 title-and-sub-title mx-auto">
          <div className="d-flex justify-content-center align-items-center screen-991px">
            <img

              src="https://cdn.discordapp.com/attachments/747040302988132352/1041237107454255124/logo_png_sabah.png"
              width="600px"
            />
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h1 className="stocky-text-color text-center fs-1">
              A Smart, automatic inventory tool.
            </h1>
            <p className="stocky-text-color text-center fs-5">
              Stocky is the faster, safer way to manage inventory automatically,
              keep track of vendors, monitor products profitability in real
              time, and more...
            </p>
            <a href="#road_map" className="stocky-button">
              Explore
            </a>
          </div>
        </div>
      </div>
      <span id="road_map"></span>
      <hr className="mt-5 hr-color" />
      <Roadmap />
      <hr className="mt-5 hr-color" />
      <AboutUs />
      <hr className="mt-5 hr-color" />
      <ContactForm />
    </div>
  );
};
