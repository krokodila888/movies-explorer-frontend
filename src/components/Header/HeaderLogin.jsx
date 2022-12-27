import logo from '../../images/logo-smile.svg';
import account from '../../images/icon-account.svg';
import { Link, NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './Header.css';

function HeaderLogin() {

  return (
    <header className="header header__login">
      <div className="header__content">
        <NavLink to="/" className="navTab__link">
          <img
            src={logo}
            alt="Логотип"
            className="header__logo"
          />
        </NavLink>
        <div className="right-block-login">
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
