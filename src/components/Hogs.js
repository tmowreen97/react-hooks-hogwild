import React from "react";
import HogDetails from "./HogDetails";


function Hogs( { itemsDisplayed }){
  return (  
    <div className="ui link cards">
      {itemsDisplayed.map((hog)=>{
          return(
            <div class='card' key={hog.name}>
              <div class= 'image'>
                <img src= {hog.image} alt='hogImages' />
              </div>
              <div class='content'>
                <HogDetails hog={hog}/>
              </div>
            </div>   
          )
      })}
    </div>
  )
}

export default Hogs;