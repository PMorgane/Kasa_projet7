
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";

//import Home from "./pages/Home";
//import About from "./pages/About";
//import Housing from "./pages/Housing";
//import Error from "./pages/Error";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Banner />
            <Footer />
        </BrowserRouter>
    );
}

export default Router;

