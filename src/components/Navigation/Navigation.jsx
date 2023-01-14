// import account from '../../images/icon-account.svg';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {

  const {openNavigation, onClose, isNavigationOpen} = props;

  return (
    <>
      <button aria-label="Закрыть" className={`navigation__menu-icon ${isNavigationOpen ? 'navigation__menu-icon_opened' : ''}`} onClick={isNavigationOpen ? onClose : openNavigation} type="button"></button>
      <div className={`navigation__content ${isNavigationOpen ? 'navigation__content_opened' : ''}`}>
        <div className="navigation__block">
          <NavLink to="/" className="navigation__link">
            Главная
          </NavLink>
          <NavLink to="/movies" className="navigation__link">
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className="navigation__link">
            Сохранённые фильмы
          </NavLink>
          <NavLink to="/profile" className="navigation__link navigation__profile-link">
            Аккаунт
          </NavLink>
          <div className="navigation__icon"/>
        </div>
      </div>
    </>
  );
}

export default Navigation;