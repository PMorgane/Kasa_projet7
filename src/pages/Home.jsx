import React from "react";
//import BannerLogo from "../assets/Banner.png";
import style from"../styles/Home.module.css";
import Cards from "../components/Cards";

const Home = () => {
    return (
        <main className={style.main}>
            
        
            <Cards />
        </main>
    );
};

export default Home;