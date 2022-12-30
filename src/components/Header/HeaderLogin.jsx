import logo from '../../images/logo-smile.svg';
import account from '../../images/icon-account.svg';
import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import './Header.css';
import Navigation from  '../Navigation/Navigation.jsx';

function HeaderLogin() {

  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function openNavigation() {
    return setIsNavigationOpen(true)
  }

  function closeNavigation() {
    setIsNavigationOpen(false);
  }

  return (
    <header className="header header__login">
      <Navigation 
        onClose={closeNavigation} 
        isNavigationOpen={isNavigationOpen} 
        openNavigation={openNavigation} 
      />
      <div className="header__content">
        <NavLink to="/" className="navTab__link">
          <img
            src={logo}
            alt="Логотип"
            className="header__logo"
          />
        </NavLink>
        <div className="header__right-block-login">
          <NavLink to="/movies" className="header__black-link">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="header__black-link-normal">
            Сохранённые фильмы
          </NavLink>
          <NavLink to="/profile" className="header__black-link">
            Аккаунт
          </NavLink>
          <img
            src={account}
            alt="Значок аккаунта"
            className="header__icon"
          />
        </div>
      </div>
    </header>
    );
  }
  
  export default HeaderLogin;
