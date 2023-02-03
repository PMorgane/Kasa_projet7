import React, { useEffect, useState } from "react";
import style from "../styles/Housing.module.css";



const Carousel = ({ dataHousing }) => {
   
    console.log(dataHousing);
        const [count, setCount] = useState(0);
        

        const handleClickRigth = function (e) {
            e.preventDefault();
            setCount(c => c + 1)
        }
        const handleClickLeft = function (e) {
            e.preventDefault();
            setCount(c => c - 1)
        };
    return (
        <div>
            <img src={dataHousing.pictures[count]} alt={dataHousing.title} />
            <button onClick={handleClickLeft}>Incremente{count}</button>
            <button onClick={handleClickRigth}>Incremente{count}</button>

        </div>
    )
    /*let arrayPicture = [];
    dataHousing.map((el) => {
        if (el.pictures) {
            for (let i in el.pictures) {
                arrayPicture.push(el.pictures[i]);
            }
            return { arrayPicture };
        } else return null;


        function Compteur() {
            const [countR, setCountR] = useState(0);
            const [countL, setCountL] = useState(0);

            const handleClickRigth = function (e) {
                e.preventDefault();
                setCountR(c => c + 1)
            }
            const handleClickLeft = function (e) {
                e.preventDefault();
                setCountL(c => c - 1)
            }
            return (
                <>
                    <button onClick={handleClickLeft}>Incremente{countL}</button>
                    <button onClick={handleClickRigth}>Incremente{countR}</button>

                </>
            )
        }
    })*/
};
export default Carousel;