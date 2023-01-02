import logo from '../../images/logo_smile.svg';
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {

  return (
    <header className="header">
      <div className="header__content">
        <NavLink to="/">
          <img
            src={logo}
            alt="Логотип"
            className="header__logo"
          />
        </NavLink>
        <div className="header__right-block">
          <NavLink to="sign-up" className="header__link">
          Регистрация
          </NavLink>
          <NavLink to="sign-in" className="header__link header__login-link">
            Вoйти
          </NavLink>
        </div>
      </div>
    </header>
    );
  }
  
  export default Header;
