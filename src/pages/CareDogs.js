import React from 'react';
import "./CareDogs.scss";
import loading from "../resources/images/loading.gif";

const CareDogs = () => {
  return (
    <div className='caredogs'>
      <p>Упс.. Страница находится в разработке.</p>
      <img src={loading} alt="" />
    </div>
  )
}

export default CareDogs;