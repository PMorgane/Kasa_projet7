import React from "react";
import style from "../styles/Home.module.css";
import Banner from "../components/Banner";
import Cards from "../components/Cards";

const Home = () => {
    return (
        <main className={style.Container}>
            <Banner />
            <Cards />
        </main>
 


    );
};

export default Home;