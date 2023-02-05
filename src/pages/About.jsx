import React from "react";
import style from "../styles/About.module.css";
import imgApropos from "../assets/imgApropos.png";
import { useParams } from "react-router-dom";
import { useFetch } from "../components/hooks/useFetch";


function About() {
   // const { Apropos } = useFetch("../apropos.json");
    //const {id} = useParams();
   // console.log(Apropos);
   //const dataAbout = propos.filter((el) => el.id === aproposId);

    return (//dataAbout.map((el) => (
        <><header className={style.Apropos}>
            <img src={imgApropos} alt="image Apropos" />
        </header>
            <main className={style.main}>
                <div>
                    <article>
                    <h2></h2>
                    <p></p>
                    </article>
                </div>

            </main></>
    );
};

export default About;