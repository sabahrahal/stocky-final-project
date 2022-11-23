import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Companies = () => {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate();
    return (
        <div className="container">
            {store.token && store.token != "" && store.token != undefined ?
                <>
                    <h1>PLEASE SELECT A COMPANY</h1>
                    <button
                        className="stocky-button"
                        onClick={(event) => {
                            actions.logOff();
                            navigate("/");
                        }}
                    >
                        Log Off
                    </button>
                    <button
                        className="stocky-button"
                        onClick={(event) => {
                            navigate("/dashboard");
                        }}
                    >
                        Dashboard Test
                    </button>
                </>
                :
                <>
                    <div>YOU ARENT LOGGED IN</div>
                    <button
                        className="stocky-button"
                        onClick={(event) => {
                            navigate("/");
                        }}
                    >
                        Back to home
                    </button>
                </>}
        </div>
    );
};
