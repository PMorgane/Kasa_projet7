import React from "react";
import style from "../styles/Housing.module.css";
import { useFetch } from "../components/hooks/useFetch.jsx";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown.jsx";
import Tags from "../components/Tags.jsx";
import { useParams } from "react-router-dom";

import starsCompleted from "../assets/starsCompleted.png";
import starsEmpty from "../assets/starsEmpty.png";


const Housing = () => {
    //call api
    const { data } = useFetch("../data.json");
    const { id } = useParams();
    const housingId = id;

    const dataHousing = data.filter((el) => el.id === housingId);

    //rating
    /*const starsRating = [1, 2, 3, 4, 5];
    starsRating.map((el)=> (el => el.starsRating))
*/  /* Notes */
    let noteLogement = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if (index === parseInt(dataHousing?.rating)) {
            etoileComplete = false;
        }
        if (etoileComplete === true) {
            noteLogement.push(<img key={index} className="etoile" src={starsCompleted} alt={`${dataHousing?.rating}/5`} />)
        } else {
            noteLogement.push(<img key={index} className="etoile" src={starsEmpty} alt={`${dataHousing?.rating}/5`} />)
        }
    }

    return (dataHousing.map((el) => (

        <main key={el.toString}>
            <Carousel dataHousing={el} />
            <div key={el.id} className={style.description}>
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

                    <Tags title='tags'/><ul><li>{el?.tags}</li></ul>
                    <div className="rating">{noteLogement}</div>
                </article>


                <Dropdown title="Description" description={el?.description} />
                <Dropdown title="Équipements" description={el?.equipments} />


            </div>
        </main>

    )));
};

export default Housing;