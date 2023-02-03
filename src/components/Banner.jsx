import React from "react";
import style from "../styles/Banner.module.css";
import imgBanner from "../assets/imgBanner.png";


const Banner = () => {
    return (
        <div className={style.Banner}>
            <img src={imgBanner} alt="image banner paysage 1" />
            <span>Chez vous, partout et ailleurs</span>
         
        </div>



    );
};

export default Banner;