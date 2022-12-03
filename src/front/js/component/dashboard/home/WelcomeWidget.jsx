import React from "react";

export const WelcomeWidget = () => {
    return (
        <div className="full-width-widget-container">
            <div className="welcome-widget-text-container">
                <h1>Welcome Jorge!</h1>
                <p>
                    You are now at the dashboard, start navigating it with the
                    bottom navbar. Thank your for using Stocky ❤
                </p>
            </div>
            <div className="welcome-widget-image">
                <img src="https://cdn.discordapp.com/attachments/245471080829943820/1048628498543165481/business-3d-businessman-in-dark-blue-suit-waving-hello.png" />
            </div>
        </div>
    );
};
