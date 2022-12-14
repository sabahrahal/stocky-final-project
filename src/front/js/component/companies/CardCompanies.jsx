import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";

export const CardCompanies = () => {
    const navigate = useNavigate();
    const { store, actions } = useContext(Context);
    useEffect(() => {
        actions.getCompanies();
    }, []);

    return (
        <div className="row">
            {store.companies
                .sort((a, b) => {
                    if (a.id > b.id) return -1;
                    if (b.id > a.id) return 1;
                    return 0;
                })
                .map((company) => {
                    return (
                        <div className="col-md-4 mt-4" key={company.id}>
                            <div
                                className="card profile-card-5"
                                onClick={(event) => {
                                    actions.selectCompany(company.id);
                                    navigate("/dashboard/home");
                                }}
                            >
                                <div className="card-img-block">
                                    <img
                                        className="card-img-top bg-white"
                                        src={company.img_url}
                                        alt="Card image cap"
                                        width="350px"
                                        height="350px"
                                    />
                                </div>
                                <div className="card-body pt-0">
                                    <h5 className="company-card-title">
                                        {company.name}
                                    </h5>
                                    <p className="card-text">
                                        RIF: {company.rif}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}

            <div
                className="col-md-4 mt-4 d-flex align-items-center justify-content-center"
                onClick={(event) => {
                    navigate("/add-company");
                }}
            >
                <div className="circle-card-companies d-flex align-items-center justify-content-center">
                    <i className="fas fa-solid fa-plus plus-icon fa-2x"></i>
                </div>
            </div>
        </div>
    );
};
