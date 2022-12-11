import React from 'react';
import "./FirstHelp.scss";
import loading from "../resources/images/loading.gif";

const FirstHelp = () => {
  return (
    <div className='firsthelp'>
      <p>Упс.. Страница находится в разработке.</p>
      <img src={loading} alt="" />
    </div>
  )
}

export default FirstHelp;