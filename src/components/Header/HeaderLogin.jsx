import logo from '../../images/logo_smile.svg';
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
        <div className="header__left-block-login">
          <NavLink to="/" className="navTab__link">
            <img
              src={logo}
              alt="Логотип"
              className="header__logo"
            />
          </NavLink>
          <NavLink to="/movies" className="header__film-link">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="header__film-link">
            Сохранённые фильмы
          </NavLink>
        </div>
          <NavLink to="/profile" className="header__account-link">
            Аккаунт
          </NavLink>
      </div>
    </header>
    );
  }
  
  export default HeaderLogin;
