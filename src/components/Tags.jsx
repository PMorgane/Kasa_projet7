//import React, {useState} from "react";



function Tags ({title, description}){

    return(
        <div className="tags" id={`tags-${title}`}>
            <div className="header-tags">
                <div className="title-dropdown">{title}</div>
    
            </div>
            
                <div className="description-tags" id={`tags-${description}`}></div>
            
        </div>
    );
};



export default Tags;