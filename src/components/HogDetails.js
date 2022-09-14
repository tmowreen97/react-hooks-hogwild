import React, { useState } from "react";

function HogDetails( { hog } ){
  const [toggle, setToggle] = useState(true)
  return (
    <div class='description'>
      <h2 onClick={() => setToggle(!toggle)}>{hog.name}</h2>
      {toggle && (
        <ul>
        <p>Specialty : {hog.specialty}</p>
        <p>Weight : {hog.weight}</p>
        <p>Greased : {hog.greased? 'Yes' : 'No'}</p>
        <p>Highest Medal Achieved : {hog['highest medal achieved']}</p>  
      </ul>
      )}
    </div>
  )
}

export default HogDetails;