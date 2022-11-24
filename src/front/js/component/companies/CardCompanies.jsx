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
            {
                store.companies.map((company) => {
                    return <div className="col-md-4 mt-4">
                        <div key={company.id} className="card profile-card-5">
                            <div className="card-img-block">
                                <img
                                    className="card-img-top bg-white"
                                    src="https://adfinis.com/wp-content/uploads/sites/9/2021/09/Canonical_company-Logo.wine_-300x200.png"
                                    alt="Card image cap"
                                    width="350px"
                                    height="250px"
                                />
                            </div>
                            <div className="card-body pt-0">
                                <h5 className="company-card-title">{company.name}</h5>
                                <p className="card-text">
                                    {company.rif}
                                </p>
                            </div>
                        </div>
                    </div>
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
