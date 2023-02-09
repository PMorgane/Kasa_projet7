import React from "react";
import style from "../styles/About.module.css";
import imgApropos from "../assets/imgApropos.png";
//import { useParams } from "react-router-dom";
//import { useFetch } from "../components/hooks/useFetch";
import Dropdown from "../components/Dropdown";

function About() {
    // const { Apropos } = useFetch("../apropos.json");
    //const {id} = useParams();
    // console.log(Apropos);
    //const dataAbout = propos.filter((el) => el.id === aproposId);

    return (//dataAbout.map((el) => (
        <><header className={style.Apropos}>
            <img className= {style.imgApropos} src={imgApropos} alt="image Apropos" />
        </header>
            <main className={style.main}>
                <Dropdown title="Fiabilité" description="Les annonces postées sur Kasa garantissent une fiabilité total. Les photos sont conormes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes. " />
                <Dropdown title="Respect" description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <Dropdown title="Service" description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                <Dropdown title="Sécurité" description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />

            </main></>
    );
};

export default About;