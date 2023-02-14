import React from "react";
import style from "../styles/Housing.module.css"
function Tags({ tags }) {
    const elementTags = tags.map((el) => (
        <span className={style.tag} key={Math.random()}>{el}</span>
    ))

    return (
        <div className={style.containerTag} >{elementTags}</div>
    );
};



export default Tags;