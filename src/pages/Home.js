import React from 'react';
import dogwithgirl from "../resources/images/home/dogwithgirl.png";
import humanwithdog from "../resources/images/home/humanwithdog.svg";
import "./Home.scss";

const Home = () => {
  return (
    <div className='container'>
      <div className='container__hero'>
        <div className='container__hero__text'>
          <p className='container__hero__text__header'>Не знаешь как правильно ухаживать за своим животным?</p>
          <p className='container__hero__text__info'>
          Ha платформе есть специальный раздел, где ты сможешь найти породу своего питомца, и
          уже сейчас подобрать для него правильный уход!</p>
        </div>
        <img className='dog' src={dogwithgirl} alt="" />
        <div className='container__hero__down'>
          <img src={humanwithdog} alt="" />
          <button>
            Узнать
          </button>
        </div>
      </div>

      <div className='container__info'>

      </div>
    </div>
  )
}

export default Home;