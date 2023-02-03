
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";

import Home from "./pages/Home";
//import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Cards from "./components/Cards";

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Error />} />
                <Route path="/housing/:id" element={<Housing />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default Router;

