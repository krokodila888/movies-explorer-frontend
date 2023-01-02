import React, { /*useEffect, */useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext, currentUser } from '../../contexts/CurrentUserContext';
import HeaderLogin from '../Header/HeaderLogin.jsx';

function Profile (props) {
  const currentUser1 = React.useContext(CurrentUserContext);
  
  return(
    <>
      <HeaderLogin/>
      <section className="profile">
        <div className="profile__container">
          <p className="profile__title">
            Привет, {currentUser.userName}!
          </p>
          <div className="profile__row-container">
            <p className="profile__text">Имя</p>
            <p className="profile__text">{currentUser.userName}</p>
          </div>
          <div className="profile__row-container">
            <p className="profile__text">E-Mail</p>
            <p className="profile__text">{currentUser.Email}</p>
          </div>
          <div className="profile__link-container">
            <Link to="/sign-up" className="profile__underbottom-text profile__link">Редактировать</Link>
            <Link to="/" className="profile__underbottom-text profile__link">Выйти из аккаунта</Link>
          </div>
        </div> 
      </section>
    </>
  )
}

export default Profile;