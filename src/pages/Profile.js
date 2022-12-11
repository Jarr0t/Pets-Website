import React from 'react';
import "./Profile.scss";
import loading from "../resources/images/loading.gif";

const Profile = () => {
  return (
    <div className='profile'>
      <p>Упс.. Страница находится в разработке.</p>
      <img src={loading} alt="" />
    </div>
  )
}

export default Profile;