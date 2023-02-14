import React from "react";
import style from "../styles/Rating.module.css"
import starsCompleted from "../assets/starsCompleted.png";
import starsEmpty from "../assets/starsEmpty.png";

const Rating = ({ ratingStars }) => {
  const starNumber = [1, 2, 3, 4, 5];
  console.log(ratingStars);
  return (starNumber.map((el) =>
    el <= ratingStars ?
      (<img key={Math.random()} className={style.starsCompleted} src={starsCompleted} alt="notation du proprietaire" />)
      :
      (<img key={Math.random()} className={style.starsEmpty} src={starsEmpty} alt="notation du proprietaire" />)
  )

  )

};

export default Rating;
