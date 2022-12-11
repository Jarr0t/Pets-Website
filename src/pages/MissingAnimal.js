import React from 'react';
import loading from "../resources/images/loading.gif";
import "./MissingAnimals.scss";

const MissingAnimal = () => {
  return (
    <div className='missing'>
      <p>Упс.. Страница находится в разработке.</p>
      <img src={loading} alt="" />
    </div>
  )
}

export default MissingAnimal;