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
                    <div className="full-width-widget-container mb-4">
                        <div className="welcome-widget-text-container">
                            <h1>Select a company...</h1>
                            <p>
                                Select your company to start with the stocky system, if you click on the plus button you can register another company to manage.
                            </p>
                        </div>
                        <div className="welcome-widget-image">
                            <img src="https://cdn.discordapp.com/attachments/245471080829943820/1048658813252812830/business-3d-businessman-in-blue-suit-jumping.png" />
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
