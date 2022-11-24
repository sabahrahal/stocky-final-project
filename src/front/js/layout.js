import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
import { ScrollToTop } from "./component/utils/scrollToTop";
import { Navbar } from "./component/utils/navbar";
import { Footer } from "./component/utils/footer";
import { ScrollToTopButton } from "./component/utils/ScrollToTopButton.jsx";

import { Home } from "./pages/home";
import { SignUp } from "./pages/SignUp.js";
import { Companies } from "./pages/Companies";
import { Dashboard } from "./pages/Dashboard";

import { AddCompany } from "./component/companies/AddCompany.jsx";
import { CompaniesNavbar } from "./component/companies/CompaniesNavbar.jsx";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route element={<>
                            <Navbar />
                            <Home />
                            <ScrollToTopButton />
                            <Footer />
                        </>} path="/" />
                        <Route element={<>
                            <Navbar />
                            <SignUp />
                            <Footer />
                        </>} path="/sign-up" />
                        <Route element={<>
                            <CompaniesNavbar />
                            <Companies />
                        </>} path="/companies" />
                        <Route element={<>
                            <CompaniesNavbar />
                            <AddCompany />
                        </>} path="/add-company" />
                        <Route element={<Dashboard />} path="/dashboard" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
