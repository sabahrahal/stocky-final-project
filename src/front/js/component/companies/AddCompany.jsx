import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import CloudinaryUploadWidget from "../cloudinary/CloudinaryUploadWidget";

export const AddCompany = () => {
    const [companyName, setCompanyName] = useState("");
    const [companyRif, setCompanyRif] = useState("");
    const [companyImg, setCompanyImg] = useState("https://cdn.discordapp.com/attachments/747040302988132352/1048719476402696242/sabah_350x350-01.jpg");
    let navigate = useNavigate();
    const { store, actions } = useContext(Context);

    useEffect(() => {
        const authenticated = sessionStorage.getItem("authenticated");
        if (!authenticated) {
            navigate("/");
        }
    }, []);

    return (
        <div className="container">
            <div className="row col-md-6 mx-auto d-flex flex-column align-items-center justify-content-center">
                <h2 className=" fs-1 mt-5 text-center">
                    Add your company details to start using Stocky!
                </h2>
            </div>
            <div className="registration-form">
                <form onClick={(event) => {
                    event.preventDefault();
                }}>
                    {companyImg == "https://cdn.discordapp.com/attachments/747040302988132352/1048719476402696242/sabah_350x350-01.jpg" ?
                        <div className="form-icon upload-logo-icon" id="upload_widget">
                            <CloudinaryUploadWidget companyImg={companyImg} setCompanyImg={setCompanyImg} />
                        </div> :
                        <div className="d-flex justify-content-center align-items-center">
                            <img src={companyImg}
                                width="150px"
                            />
                        </div>
                    }


                    <p className="text-center fs-3">Upload Logo</p>
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

                    <div className="form-group d-flex justify-content-between">
                        <Link className="stocky-button" to={"/companies"}>
                            Go back
                        </Link>
                        {companyName === "" || companyRif === "" ? (
                            <button
                                className="btn btn-block stocky-button"
                                disabled
                            >
                                Add Company
                            </button>
                        ) : (
                            <button
                                type="button"
                                className="btn btn-block stocky-button"
                                onClick={async (event) => {
                                    const success = await actions.createCompany(
                                        companyName,
                                        companyRif,
                                        companyImg
                                    );
                                    if (success) navigate("/companies");
                                }}
                            >
                                Add Company
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
