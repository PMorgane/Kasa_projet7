import React, {useState} from "react";
import style from "../styles/Dropdown.module.css";



function Dropdown ({dataHousing}){
    console.log(dataHousing);
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
                        <ul><li>{dataHousing.equipments}</li></ul>
                    </div>
                </article>
);
};

export default Dropdown;