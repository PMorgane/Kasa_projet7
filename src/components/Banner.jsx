import React from "react";
import style from "../styles/Banner.module.css";
import imgBanner from "../assets/imgBanner.png";


const Banner = () => {
    return (
        <div className={style.Banner}>
            <img src={imgBanner} alt="image banner paysage 1" />
            <p className={style.text}><span>Chez vous,</span> <span> partout et ailleurs</span></p>

        </div>



    );
};

export default Banner;