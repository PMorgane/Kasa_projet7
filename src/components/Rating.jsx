import React from "react";
/*
import starsCompleted from "../assets/starsCompleted.png";
import starsEmpty from "../assets/starsEmpty.png";

const Rating = ({ numberRating }) => {
   // const starNumber = [1, 2, 3, 4, 5];
   let noteLogement = [];
    let etoileComplete = true;
    for (let index = 0; index < 5; index++) {
        if(index === parseInt(dataHousing?.rating)) {
            etoileComplete = false;
        }
        if(etoileComplete === true) {
            noteLogement.push(<img key={index} className="etoile" src={starsCompleted} alt={`${dataHousing?.rating}/5`}/>)
        } else {
            noteLogement.push(<img key={index} className="etoile" src={starsEmpty} alt={`${dataHousing?.rating}/5`}/>)
        }
    }
    
    

  
       
};

export default Rating;

/*
const Rating = ({ Rating }) => {
    const stars = [1, 2, 3, 4, 5];
  
    return (
      <div className="rating">
       
        {stars.map((star) =>
          Rating >= star ? (
            <img
              key={img.toString()}
              className="rating__icon"
              src={starsCompleted}
              alt=""
            />
          ) : (
            <img
              key={stars.toString()}
              className="rating__icon"
              src={stars}
              alt=""
            />
          )
        )}
      </div>
    );
  };
  
  export default Rating; */