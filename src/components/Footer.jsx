import React from "react";
import style from "../styles/Footer.module.css";
import logoFooter from "../assets/logoFooter.png";



function Footer() {
    const dateSelectYear = new Date().getFullYear();
    return (
        <footer className={style.footer}>
            <img src={logoFooter} alt="kasa logo2" />
            <span>© {dateSelectYear} Kasa. All rights reserved</span>
        </footer>
    )
}
export default Footer;