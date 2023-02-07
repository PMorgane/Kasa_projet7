import React, { useState } from "react";
//import style from "../styles/Housing.module.css";
import Vector from "../assets/Vector.png"
import style from "../styles/Carousel.module.css";

const Carousel = ({ dataHousing }) => {
    let array = [];
    const numberPictures = dataHousing.pictures.length;
    array.push(numberPictures);
    const [count, setCount] = useState(0);
    const handleClickRigth = (e) => {
        if(count === numberPictures +1){
            setCount (numberPictures=0)
        }else {
            setCount(count - 1)
        }return (setCount)
    }
    function handleClickLeft (e) {
       if (count === 0 ) {
        setCount(numberPictures -1)
    }
    else {
        setCount(count -1)
    }
    return (setCount)
    }
    console.log(numberPictures);
    return (
        <section className={style.Carousel}>
            <div ><img className={style.Vector} src={Vector} onClick={handleClickLeft}/></div>
            <div className={style.imgCarousel}><img src={dataHousing.pictures[count]} alt={dataHousing.title} /></div>
            <div><img className={style.Vector} src={Vector} onClick={handleClickRigth}/></div>
        </section>
    )
}
export default Carousel;