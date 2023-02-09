import React from "react";
import style from "../styles/Housing.module.css";
import { useFetch } from "../components/hooks/useFetch.jsx";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown.jsx";
import Tags from "../components/Tags.jsx";
import { useParams } from "react-router-dom";



const Housing = () => {
    //call api
    const { data } = useFetch("../data.json");
    const { id } = useParams();
    const housingId = id;

    const dataHousing = data.filter((el) => el.id === housingId);
    return (dataHousing.map((el) => (

        <main>
            <Carousel dataHousing={el} />

            <div className={style.info}>
                <article className='description'>
                    <h1 className={style.title}>{el.title}</h1>
                    <p className={style.text}>{el.location}</p>
                    <Tags tags={el.tags} />
                </article>
                <article className={style.owners}>
                    <div className={style.ownersInfo}>
                        <p>{el.host.name}</p>
                        <img className={style.imgOwner}
                            src={el.host.picture}
                            alt={"Propriétaire " + el.host.name}
                        />
                    </div>
                    <div>< Rating ratingStars={el.rating} /></div>
                </article>
            </div>
            <div className={style.containerDropdown}>
                <Dropdown title="Description" description={el.description} />
                <Dropdown title="Équipements" description={el.equipments} liste={el.equipments} />
            </div>


        </main>

    )));
};

export default Housing;