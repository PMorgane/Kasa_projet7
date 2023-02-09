import React from "react";
import style from "../styles/Cards.module.css";
import { NavLink } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";

function Cards() {
    const { data } = useFetch("../data.json");
    return (
        <section className={style.cards}>
        {data.map((el) => (
            <NavLink
                key={el.id}
                to={`housing/${el.id}`}
                className={style.card}
            >
                <article className={style.post}>
                    <img
                        className={style.imgCard}
                        src={el.cover}
                        alt={el.title}
                    />
                    <p className={style.titleLocation}>{el.title}</p>
                </article>
            </NavLink>
        ))}
    </section>
);
}
export default Cards;