import React from "react";
import style from "../styles/Banner.module.css";
import imgBanner from "../assets/imgBanner.png";



function Banner() {
   
    return (
        <main className={style.Banner}>
            <img src={imgBanner} alt="image banner paysage 1" />
            <span>Chez vous, partout et ailleurs</span>
        </main>
    )
}
export default Banner;