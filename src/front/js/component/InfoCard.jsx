import React from "react";

export const InfoCard = (props) => {
    return (
        <div className="a-box">
            <div className="img-container">
                <div className="img-inner">
                    <div className="inner-skew">
                        <img src={props.img} />
                    </div>
                </div>
            </div>
            <div className="text-container">
                <h3>{props.title}</h3>
                <div>{props.description}</div>
            </div>
        </div>
    );
};
