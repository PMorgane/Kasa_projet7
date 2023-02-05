import React, { useEffect, useState} from "react";
//import style from "../styles/tags.module.css";
import style from "../styles/Tags.module.css";


const Tag = ({dataHousing}) => {
    console.log(dataHousing);
    // {dataHousing}.map((el)=> (
    return (
        
        <div className={style.tags}>
        <ul>
            <li>{dataHousing.tags}</li>
        </ul>
    </div>


    );
};

export default Tag;