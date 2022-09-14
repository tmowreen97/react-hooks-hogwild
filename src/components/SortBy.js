import React from "react";

function SortBy( { handleChange }){
  return(
    <label>Sort By : {' '}
      <select onChange={handleChange} name='sortBy'>
        <option>Name</option>
        <option>Weight</option>    
       </select>
    </label>
  )
}

export default SortBy;