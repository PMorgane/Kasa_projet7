
import style from "../styles/Housing.module.css";
import { useFetch } from "../components/hooks/useFetch.jsx";
import Carousel from "../components/Carousel";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown.jsx";
import Tags from "../components/Tags.jsx";
import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";


const Housing = () => {
    //call api
    const { data } = useFetch("../data.json");
    const { id } = useParams();
    const housingId = id;
    const dataHousing = data.filter((el) => el.id === housingId);
    // hook pour la redirection error
    const navigate = useNavigate();

    useEffect(() => {
        // function qui verifie si la propriété est trouvée
        function Verif() {
            let iteratateID = 0;
            data.map((el) => {
                if (!(el.id === housingId)) {
                    return (iteratateID = iteratateID + 1);
                }
                return null;
            });
            if (iteratateID >= 20) {
                navigate("/error");
            }
        }
        Verif();
    }, [data, housingId, navigate]);

    
    return (dataHousing.map((el) => (

        <main key={Math.random()}>
            <Carousel dataHousing={el} />

            <div className={style.info} key={Math.random()}>
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
                    <div className={style.containerStars}>< Rating ratingStars={el.rating} /></div>
                </article>
            </div>
            <div className={style.containerDropdown} key={Math.random()}>
                <Dropdown title="Description" description={el.description} key={Math.random()} />
                <Dropdown title="Équipements" liste={el.equipments} key={Math.random()} />
            </div>


        </main>

    )));
};

export default Housing;