import React from "react";

export const Roadmap = () => {
    return (
        <div className="container mt-2 py-5">
            <div className="main-timeline-4 text-black">
                <div className="timeline-4 left-4">
                    <div className="card grounded-radiants">
                        <div className="card-body p-2 d-flex flex-column align-items-center">
                            <i className="fas fa-solid fa-users fa-2x mb-3"></i>
                            <h4>Create Account</h4>
                            <p className="text-center">
                                We just ask for the info that we really need, SHA-256 encryption ensures your data is always safe.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline-4 right-4">
                    <div className="card grounded-radiants">
                        <div className="card-body p-2 d-flex flex-column align-items-center">
                            <i className="fas fa-solid fa-warehouse fa-2x mb-3"></i>
                            <h4>Add Company</h4>
                            <p className="text-center">So you can manage everything!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline-4 left-4">
                    <div className="card grounded-radiants">
                        <div className="card-body p-2 d-flex flex-column align-items-center">
                            <i className="fas fa-solid fa-box fa-2x mb-3"></i>
                            <h4>Add Products</h4>
                            <p className="text-center">To keep track of your stock, details and much more.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="timeline-4 right-4">
                    <div className="card grounded-radiants">
                        <div className="card-body p-2 d-flex flex-column align-items-center">
                            <i className="fas fa-solid fa-plus fa-2x mb-3"></i>
                            <h4>Start Profiting</h4>
                            <p className="text-center">It’s that easy!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
