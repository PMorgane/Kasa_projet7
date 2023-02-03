import React from "react";
import style from "../styles/Housing.module.css";
import { useFetch } from "../components/hooks/useFetch";
import Carousel from "../components/Carousel";
import Compteur from "../components/Carousel";
import { useParams } from "react-router-dom";


const Housing = () => {
    //call api
    const { data } = useFetch("../data.json");
    const  { id } = useParams();
    const housingId = id ;

    const dataHousing = data.filter((el)=>el.id ===housingId);
    
    return ( dataHousing.map((el)=> (
        
        <main key={el.toString}>
            <Carousel dataHousing = {el} />
            <div key={el.id + el.toString} className={style.description}>
                <article>
                    <h1>{el.title}</h1>
                    <p>{el.location}</p>
                 
                </article>
                <article className={style.owner}>
                    <div className={style.infosOwner}>
                        <p>{el.host.name}</p>
                        <img
                            src={el.host.picture}
                            alt={"Propriétaire " + el.host.name}
                        />
                    </div>
                
                </article>
            </div>
        </main>
 
    )));
};

export default Housing;