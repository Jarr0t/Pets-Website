import React from 'react';
import dogwithgirl from "../resources/images/home/dogwithgirl.png";
import humanwithdog from "../resources/images/home/humanwithdog.svg";
import Card from "../components/Home/Card.js";
import blocksheet from "../resources/images/home/blocksheet.svg";
import planet from "../resources/images/home/planet.svg";
import plusbutton from "../resources/images/home/plusbutton.svg";
import dog from "../resources/images/home/dog.svg";
import { Link } from "react-router-dom";
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
          <button className='container__hero__button'>
            <Link to="/carecats">
              Узнать
            </Link>

          </button>
        </div>
        <img className='dog' src={dogwithgirl} alt="" />
        <div className='container__hero__down'>
          <img src={humanwithdog} alt="" />
        </div>
      </div>
      <div className='container__info'>
        <div className='container__info__wrapper'>
          <p className='container__info__header'>
            Поиск хозяина пропавшего животного за три шага!
          </p>
          <img src={dog} alt="" />
        </div>

        <div className='container__info__cards'>
          <Card
            text="ok"
            number={1}
            image={plusbutton}
            header="Загрузи фото животного"
            info="Платформа будет срванивать с фотографиями, которые уже есть в базе."
          />
          <Card
            text="ok"
            number={2}
            image={planet}
            header="Запусти глобальный поиск"
            info="Платформа будет искать похожих животных по всем соц.сетям, сайтам, пабликам."
          />
          <Card
            text="ok"
            number={3}
            image={blocksheet}
            header="Получи список ссылок "
            info="Платформа выдаст список ссылок  сайтов, соц.сетей, пабликов с похожими объявлениями."
          />

        </div>
      </div>
    </div>
  )
}

export default Home;