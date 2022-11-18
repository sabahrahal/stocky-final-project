import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
    <footer className="footer mt-auto py-3 text-center">
        <div className="social-media">
            <h5>Visit and follow us in our social media</h5>
            <div className="social-icons">
                <a href="#">
                    <i className="bi bi-facebook" title="Facebook"></i>
                </a>
                <a href="#">
                    <i className="bi bi-google" title="Google"></i>
                </a>
                <a href="#">
                    <i className="bi bi-twitter" title="Twitter"></i>
                </a>
            </div>
        </div>
    </footer>

);
