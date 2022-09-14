import React from "react";


function Filter( {handleSubmit} ){
  return (
    <label>
      Grease Filter:{' '}
      <select onChange={handleSubmit} name = 'filter'>
        <option>All</option>
        <option>Greased</option>
        <option>Not Greased</option>
      </select>
      {' '}
    </label>
  )
}

export default Filter;