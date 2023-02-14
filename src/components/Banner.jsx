import React from "react";
import style from "../styles/Banner.module.css";
import imgBanner from "../assets/imgBanner.png";


const Banner = () => {
    return (
        <div className={style.Banner}>
            <img src={imgBanner} alt="image banner paysage 1" />
            <p>Chez vous,<br /> partout et ailleurs</p>

        </div>



    );
};

export default Banner;