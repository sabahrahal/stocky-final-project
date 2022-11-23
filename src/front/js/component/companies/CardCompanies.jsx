import React from 'react'

export const CardCompanies = () => {
    return (

        <div className='row'>
            <div class="col-md-4 mt-4">
                <div class="card profile-card-5">
                    <div class="card-img-block">
                        <img
                            class="card-img-top bg-white"
                            src="https://adfinis.com/wp-content/uploads/sites/9/2021/09/Canonical_company-Logo.wine_-300x200.png"
                            alt="Card image cap"
                            width="350px"
                            height="250px" />
                    </div>
                    <div class="card-body pt-0">
                        <h5 class="company-card-title">Company Name</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    </div>
                </div>
            </div>

            <div className="col-md-4 mt-4 d-flex align-items-center justify-content-center">
                <div className="circle-card-companies d-flex align-items-center justify-content-center">
                    <i className="fas fa-solid fa-plus plus-icon fa-2x"></i>
                </div>
            </div>

        </div>
    )
}
