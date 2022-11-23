import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./component/scrollToTop";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Companies } from "./pages/Companies";
import { Dashboard } from "./pages/Dashboard";

import { SignUpForm } from "./component/SignUpForm.jsx";

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
                            <Footer />
                        </>} path="/" />
                        <Route element={<>
                            <Navbar />
                            <SignUpForm />
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
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<Demo />} path="/demo" />
                    </Routes>
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
