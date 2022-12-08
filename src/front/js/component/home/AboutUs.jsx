import React from "react";
import CloudinaryUploadWidget from "../cloudinary/CloudinaryUploadWidget";

export const AboutUs = () => {
    return (
        <div>
            <div className="row col-md-6 mx-auto d-flex flex-column align-items-center justify-content-center">
                <h2 className="fs-1 mt-5 text-center">Learn More About Us</h2>
                <p className="stocky-text-color text-center fs-5">
                    Stocky is a web application created by 4Geeks Academy
                    students looking to streamline inventory and sales control
                    for both small and medium-sized businesses. We offer a fast,
                    simple and effective solution where you only need a computer
                    or a smartphone with an internet connection to have access
                    and control of all the daily operations that are carried out
                    in your business or venture.
                </p>
            </div>
            <div className="row mt-5">
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <img
                        className="rounded-circle about-us-img"
                        src="https://avatars.githubusercontent.com/u/98910636?s=400&u=1ca29073b299635ad8e4df3be6571a9860abc4f5&v=4"
                        width="250px"
                    />
                    <h3>Sabah Rahal</h3>
                    <p className="text-center">
                        "Intentando construir mayores y mejores programas"
                    </p>
                    <div className="d-flex justify-content-center">
                        <a href="https://github.com/sabahrahal" target="_blank">
                            <i className="bi bi-github widget-icon-gradient fs-2"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sabah-rahal-5a82b2228/"
                            target="_blank"
                        >
                            <i className="bi bi-linkedin ms-2 widget-icon-gradient fs-2"></i>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 d-flex flex-column align-items-center">
                    <img
                        className="rounded-circle about-us-img"
                        src="https://avatars.githubusercontent.com/u/107929074?v=4"
                        width="250px"
                    />
                    <h3>Jorge Oviedo</h3>
                    <p className="text-center">"No es magia, es código"</p>
                    <div className="d-flex justify-content-center">
                        <a
                            href="https://github.com/JorgeOviedo3"
                            target="_blank"
                        >
                            <i className="bi bi-github widget-icon-gradient fs-2"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jorge-oviedo-a41795233/"
                            target="_blank"
                        >
                            <i className="bi bi-linkedin ms-2 widget-icon-gradient fs-2"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center mt-5">
                <a id="contact_us" href="#contact_us" className="stocky-button">
                    Contact Us
                </a>
            </div>
        </div>
    );
};
