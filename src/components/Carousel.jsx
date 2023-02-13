import React, { useState } from "react";
//import style from "../styles/Housing.module.css";
import Vector from "../assets/Vector.png"
import style from "../styles/Carousel.module.css";

const Carousel = ({ dataHousing }) => {
     const [count, setCount] = useState(1);
     let array = [];
    const numberPictures = dataHousing.pictures.length;
    array.push(numberPictures);
   
    function handleClickRigth (e) {
        if(count === numberPictures ){
            setCount (1)
        }else {
            setCount(count + 1)
        }return (setCount)
    }
    function handleClickLeft (e) {
       if (count === 1 ) {
        setCount(numberPictures)
    }
    else {
        setCount(count -1)
    }
    return (setCount)
    }
    console.log(numberPictures);
    return (
        <section className={style.Carousel}>
            <div ><img className={style.VectorLeft} src={Vector} onClick={handleClickLeft}/></div>
            <div className={style.imgCarousel}><img src={dataHousing.pictures[count-1]} alt={dataHousing.title} />
            <span className={style.compteur}>{count} / {numberPictures}</span>
            </div>
            <div><img className={style.VectorRight} src={Vector} onClick={handleClickRigth}/></div>
        </section>
    )
}
export default Carousel;