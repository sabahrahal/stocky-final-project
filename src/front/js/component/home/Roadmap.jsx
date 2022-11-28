import React from "react";

export const Roadmap = () => {
    return (
        <>
            <div className="row col-md-6 mx-auto d-flex flex-column align-items-center justify-content-center">
                <h2 className=" fs-1 mt-5 text-center">
                    The path to your success has never looked so easy.
                </h2>
            </div>
            <div className="container mt-2 pt-5">
                <div className="main-timeline-4 text-black">
                    <div className="timeline-4 left-4">
                        <div className="card grounded-radiants">
                            <div className="card-body p-2 d-flex flex-column align-items-center">
                                <i className="fas fa-solid fa-users fa-2x mb-3"></i>
                                <h4>Create Account</h4>
                                <p className="text-center">
                                    We just ask for the info that we really
                                    need, SHA-256 encryption ensures your data
                                    is always safe.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-4 right-4">
                        <div className="card grounded-radiants">
                            <div className="card-body p-2 d-flex flex-column align-items-center">
                                <i className="fas fa-solid fa-warehouse fa-2x mb-3"></i>
                                <h4>Add Company</h4>
                                <p className="text-center">
                                    You can add multiple companies and manage
                                    them sepparately, with Stocky everything is
                                    well organized.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-4 left-4">
                        <div className="card grounded-radiants">
                            <div className="card-body p-2 d-flex flex-column align-items-center">
                                <i className="fas fa-solid fa-box fa-2x mb-3"></i>
                                <h4>Add Products</h4>
                                <p className="text-center">
                                    Add new products and easily manage them,
                                    with Stocky you can keep track of your stock
                                    everywhere.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-4 right-4">
                        <div className="card grounded-radiants">
                            <div className="card-body p-2 d-flex flex-column align-items-center">
                                <i className="fas fa-solid fa-plus fa-2x mb-3"></i>
                                <h4>Start Profiting</h4>
                                <p className="text-center">In less than 2 minutes you can create your own inventory for all your needs. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mt-5">
                    <a id="about_us" href="#about_us" className="stocky-button">
                        About Us
                    </a>
                </div>
            </div>
        </>
    );
};
