import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/companies.css";
import { CardCompanies } from "../component/companies/CardCompanies.jsx";

export const Companies = () => {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();
    useEffect(() => {
        const authenticated = sessionStorage.getItem("authenticated")
        if (!authenticated) {
            navigate("/")
        }
    }, [])

    return (
        <div className="container">
            {store.token && store.token != "" && store.token != undefined ?
                <>
                    <div className="row">
                        <div className="col-md-6 title-and-sub-title mx-auto">
                            <div className="d-flex flex-column align-items-center justify-content-center my-5 stocky-text-color">
                                <h1 className="text-center">Please select a company</h1>
                                <p className="text-center fs-5">Select your company to start with the stocky system, if you click on the plus button you can register another company to manage.</p>
                            </div>
                        </div>
                    </div>
                    <CardCompanies />

                </>
                :
                <>
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" />
                    </div>
                </>}
        </div>
    );
};
