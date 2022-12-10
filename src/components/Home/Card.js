import React from 'react';
import "./Card.scss";

const Card = ({ number, image, header, info }) => {
  return (
    <div className='card'>
      <div className='card__ellipse'>
        <p>{number}</p>
      </div>
      <img className="card__image" src={image} alt="" />
      <div className='card__container'>
        <p className='card__container__header'>{header}</p>
        <p className='card__container__info'>{info}</p>
      </div>
    </div>
  )
}

export default Card;