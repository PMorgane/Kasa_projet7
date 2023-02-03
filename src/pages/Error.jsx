import React from "react";
import { NavLink } from "react-router-dom";

import style from"../styles/Error.module.css";


const Error = () => {
    return (
        <div className={style.error_main}>
            <h1
                tabIndex={0}
                aria-label="ouppss, page non trouvée. Cliquez sur le bouton ci-dessous pour retourner à l'accueil">
                404
            </h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/">
                <button>Retourner sur la page d'accueil</button>
            </NavLink>
        </div>
    );
};

export default Error;