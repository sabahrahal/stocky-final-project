import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../store/appContext";
import { EditInfo } from "./EditInfo.jsx";

export const NavbarHome = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const [info, setInfo] = useState(false);

    return (
        <div className="navbar-dashboard-page-container">
            <div className="navbar-dashboard-page-first-section">
                <div className="d-flex flex-row align-items-center">
                    <img
                        src="https://cdn.discordapp.com/attachments/245471080829943820/1042278498254979112/Stocky_Logo_Only.png"
                        width="64px"
                    />
                </div>
                <div className="d-flex align-items-center navbar-dashboard-page-title-container home-navbar-title">
                    <i className="bi bi-house-fill me-2 fs-3"></i>
                    <h4 className=" navbar-dashboard-page-title">Home</h4>
                </div>
                <div className="d-flex align-items-center">
                    <div
                        className="dashboard-add-icon me-2"
                        onClick={(event) => {
                            if (info == false) setInfo(true);
                            else setInfo(false);
                        }}
                    >
                        {info ? (
                            <i className="bi bi-gear-wide-connected fs-3"></i>
                        ) : (
                            <i className="bi bi-gear-wide-connected fs-3"></i>
                        )}
                    </div>
                    <div className="d-flex align-items-center">
                        <div
                            className="dashboard-add-icon "
                            onClick={(event) => {
                                actions.logOff();
                                navigate("/");
                            }}
                        >
                            <i className="bi bi-box-arrow-in-left fs-4 ms-1"></i>
                        </div>
                    </div>
                </div>
            </div>
            {info && <EditInfo info={info} setInfo={setInfo} />}
        </div>
    );
};
