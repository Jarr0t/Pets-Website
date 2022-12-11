import React from 'react';
import "./CareCats.scss";
import loading from "../resources/images/loading.gif";

const CareCats = () => {
  return (
    <div className='carecats'>
      <p>Упс.. Страница находится в разработке.</p>
      <img src={loading} alt="" />
    </div>
  )
}

export default CareCats;