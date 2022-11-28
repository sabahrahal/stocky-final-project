import React from "react";

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
                <div className="col-md-3 d-flex flex-column align-items-center">
                    <img
                        className="rounded-circle about-us-img"
                        src="https://avatars.githubusercontent.com/u/98910636?s=400&u=1ca29073b299635ad8e4df3be6571a9860abc4f5&v=4"
                        width="250px"
                    />
                    <h3>Sabah Rahal</h3>
                    <p className="text-center">
                        "Cualquier idiota puede usar un ordenador. De hecho,
                        muchos lo hacen"
                    </p>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                    <img
                        className="rounded-circle about-us-img"
                        src="https://avatars.githubusercontent.com/u/107929074?v=4"
                        width="250px"
                    />
                    <h3>Jorge Oviedo</h3>
                    <p className="text-center">"No es magia, es código"</p>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                    <img
                        className="rounded-circle about-us-img"
                        src="https://avatars.githubusercontent.com/u/98910636?s=400&u=1ca29073b299635ad8e4df3be6571a9860abc4f5&v=4"
                        width="250px"
                    />
                    <h3>Daniel Gonzales</h3>
                    <p className="text-center">
                        "Cualquier idiota puede usar un ordenador. De hecho,
                        muchos lo hacen"
                    </p>
                </div>
                <div className="col-md-3 d-flex flex-column align-items-center">
                    <img
                        className="rounded-circle about-us-img"
                        src="https://avatars.githubusercontent.com/u/98910636?s=400&u=1ca29073b299635ad8e4df3be6571a9860abc4f5&v=4"
                        width="250px"
                    />
                    <h3>Alfredo Rondon</h3>
                    <p className="text-center">
                        "Cualquier idiota puede usar un ordenador. De hecho,
                        muchos lo hacen"
                    </p>
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
