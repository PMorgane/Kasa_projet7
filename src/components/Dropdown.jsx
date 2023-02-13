import React, { useState } from "react";
import style from "../styles/Dropdown.module.css";
import Vector from "../assets/Vector.png";


function Dropdown({ title, description, liste }) {

    const [open, setOpen] = useState(false);
  
    return (
        <section className={style.description} id={`dropdown-${title}`}>
            <div className={style.header}>
                <div className={style.title}>{title}</div>
                <span className={style.VectorTrue} id={`Vector-dropdown ${open}`} onClick={() => setOpen(!open)}>
                    <img className={open ? style.VectorOpen : style.VectorClose} src={Vector} alt="Ouvrir cette liste" />
                </span>
            </div>
            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                open &&
                    description ? <div className={style.descriptionDropdown}>{description}</div>
                    :

                open &&    liste &&
                    liste.map((el) => {

                        return (<li className={style.liste} key={Math.random()}> {el}</li>)
                    })

            }
        </section>
    );

};

export default Dropdown;