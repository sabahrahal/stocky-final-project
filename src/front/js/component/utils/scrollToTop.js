import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return <>{props.children}</>;
};

ScrollToTop.propTypes = {
    location: PropTypes.object,
    children: PropTypes.any,
};
