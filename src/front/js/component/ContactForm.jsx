import React from "react";

export const ContactFrom = () => {
    return (
        <>
            <div className="row col-md-6 mx-auto d-flex flex-column align-items-center justify-content-center">
                <h2 className=" fs-1 mt-5 text-center">Reach out to us for more information</h2>
            </div>
            <div class="registration-form">
                <form>
                    <div class="form-icon">
                        <span><i class="fas fa-solid fa-user"></i></span>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="full-name" placeholder="Full Name" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="phone-number" placeholder="Phone Number" />
                    </div>
                    <div class="form-group">
                        <textarea type="text" class="form-control item" id="information" placeholder="Write in this field your questions or reason for contact..." />
                    </div>
                    <div class="form-group d-flex justify-content-center">
                        <button type="button" class="btn btn-block stocky-button">Send Contact Form</button>
                    </div>
                </form>
                <div class="social-media">
                    <h5>Visit and follow us in our social media</h5>
                    <div class="social-icons">
                        <a href="#"><i class="bi bi-facebook" title="Facebook"></i></a>
                        <a href="#"><i class="bi bi-google" title="Google"></i></a>
                        <a href="#"><i class="bi bi-twitter" title="Twitter"></i></a>
                    </div>
                </div>
            </div>
        </>
    );
}