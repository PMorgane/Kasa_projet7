import React, { useState } from "react";
import style from "../styles/Housing.module.css";
import Vector from "../assets/Vector.png"


const Carousel = ({ dataHousing }) => {
    let array = [];
    const numberPictures = dataHousing.pictures.length;
    array.push(numberPictures);
    console.log(numberPictures);
    const [count, setCount] = useState(0);


    const handleClickRigth = (e) => {
        if (count === 0 ) {
            setCount(numberPictures -1)
        }
        else {
            setCount(count -1)
        }
        return (setCount)
    }
    const handleClickLeft = (e) => {
        if(count === numberPictures - 1) {
            setCount(numberPictures = 0 )
        } else {
            setCount(count + 1)
        }
        return(setCount);

    }

    
    return (
        <section className={style.Carousel}>
            <div ><img src={Vector} onClick={handleClickLeft}/></div>
            <div className={style.imgCarousel}><img src={dataHousing.pictures[count]} alt={dataHousing.title} /></div>
            <div><img src={Vector} onClick={handleClickRigth}/></div>
        </section>
    )
}
export default Carousel;