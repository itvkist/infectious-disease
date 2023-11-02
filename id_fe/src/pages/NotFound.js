import React from "react";

const Doctor = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={process.env.PUBLIC_URL + "/assets/vkist logo.png"} alt="Logo 1" className="logo" />
                <img src={process.env.PUBLIC_URL + "/assets/vkist logo.png"} alt="Logo 2" className="logo" />
            </div>
            <div className="header-buttons">
                <button className="header-button">HOMEPAGE</button>
                <button className="header-button">RESOURCE</button>
                <button className="header-button">LOGIN</button>
            </div>
        </div>
    );
};

export default Doctor;
