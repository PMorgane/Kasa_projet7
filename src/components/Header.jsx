import React from "react";
import style from "../styles/Header.module.css";
import logoHeader from "../assets/logoHeader.png";
import { NavLink } from "react-router-dom";


function Header() {
    return (
        <header className={style.header}>
            <img src={logoHeader} alt="kasa logo" />
            <nav className={style.nav}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? style.linkActive : style.link}>
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? style.linkActive : style.link}>
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}
export default Header;