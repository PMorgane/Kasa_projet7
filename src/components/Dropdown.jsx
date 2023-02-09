import React, {useState} from "react";
import style from "../styles/Dropdown.module.css";
import Vector from "../assets/Vector.png";


function Dropdown ({title, description, liste}){
    
    const [open, setOpen] = useState(false);
/*
    console.log(liste);
    let listEquipment=liste.map((el)=>{
        // <li className={style.liste} key= {Math.random()}> {el}</li>
        return console.log(el)
    }
        
    )}
    console.log(listEquipment);
    }*/
    return(
        <section className={style.description} id={`dropdown-${title}`}>
            <div className={style.header}>
                <div className={style.title}>{title}</div>
                <span className={style.VectorTrue} id={`Vector-dropdown ${open}`} onClick={() => setOpen(!open)}>
                    <img className={open? style.VectorOpen:style.VectorClose} src={Vector} alt="Ouvrir cette liste"/>
                </span>
            </div>
            {
                /* Si le dropdown est à TRUE alors il affichera la description */
                open && <div className="description-dropdown">{description}</div>
            }
        </section>
    );
    /*
   // const [count, setCount] = useState(0);
   // dataHousing.map((el)=> el.dataHousing )
    return ( 
     
                <article className={style.dropdown}>
                    <div className={style.descriptions}>
                        <h1>{style.titleD}Description</h1>
                        <p>{dataHousing.description}</p>
                    </div>
                    <div className={style.equipement}>
                        <h1>{style.titleE}Equipements</h1>
                        <ul>{dataHousing.equipments}</ul>
                    </div>
                </article>
);*/
};

export default Dropdown;