import React, { useState, useEffect } from "react";

export const ScrollToTopButton = () => {
    const [toTop, setToTop] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setToTop(true);
            } else {
                setToTop(false);
            }
        });
    }, []);
    return (
        <>
            {toTop && (
                <span
                    onClick={(event) => {
                        window.scrollTo(0, 0);
                    }}
                    className="bi bi-arrow-up-circle-fill btn-scroll-to-top me-2"
                ></span>
            )}
        </>
    );
};
