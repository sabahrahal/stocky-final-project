import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AddCompany = () => {
    const [companyName, setCompanyName] = useState("");
    const [companyRif, setCompanyRif] = useState("");

    return (
        <div className="container">
            <div className="row col-md-6 mx-auto d-flex flex-column align-items-center justify-content-center">
                <h2 className=" fs-1 mt-5 text-center">
                    Add your company details to start using Stocky!
                </h2>
            </div>
            <div className="registration-form">
                <form>
                    <div className="form-icon">
                        <span>
                            <i className="fas fa-solid fa-plus"></i>
                        </span>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            placeholder="Company name"
                            onChange={(event) => {
                                setCompanyName(event.target.value);
                            }}
                            value={companyName}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control item"
                            placeholder="RIF"
                            onChange={(event) => {
                                setCompanyRif(event.target.value);
                            }}
                            value={companyRif}
                        />
                    </div>
                    <div className="form-group">
                        <input type="file" className="form-control item" />
                    </div>

                    <div className="form-group d-flex justify-content-between">
                        <Link className="stocky-button" to={"/companies"}>
                            Go back
                        </Link>
                        <button
                            type="button"
                            className="btn btn-block stocky-button"
                        >
                            Add Company
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
