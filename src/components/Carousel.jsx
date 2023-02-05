import React, { useState } from "react";
import style from "../styles/Housing.module.css";



const Carousel = ({ dataHousing }) => {
    let array = [];
   const numberPictures = dataHousing.pictures.length;
   array.push(numberPictures); 
   console.log(numberPictures);
   console.log(array);
    //numberPictures.forEach(pictures => console.log(pictures))
    console.log(dataHousing);
    const [count, setCount] = useState(0);
  
    
    const handleClickRigth = function (e) {
        /*if (e > array){
            return (count)
        }*/
        e.preventDefault(); 
        setCount(c => c + 1) 
        
    }
    const handleClickLeft = function (e) {
        e.preventDefault();
        //if (numberPictures < 0 ){ }
        setCount(c => c - 1)
    }
    
    console.log(numberPictures);
    return (
        <div>
            <img src={dataHousing.pictures[count]} alt={dataHousing.title} />
            <button onClick={handleClickLeft}>Incremente{count}</button>
            <button onClick={handleClickRigth}>Incremente{count}</button>

        </div>
    )
}
export default Carousel;