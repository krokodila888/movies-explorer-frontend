import React, { /*useEffect, */useState } from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo_smile.svg';

function Login (props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const {handleLogin, loginUser} = props;
 
  function handleSubmit(e) {
      e.preventDefault();
    const data = {password, email};
    console.log(data);
      loginUser(data);
      handleLogin();
    }
  
  return(
    <div className="login__background">
      <div className="login__container">
        <Link to="/">
          <img
            src={logo}
            alt="Логотип"
            className="login__logo"
          />
        </Link>
        <p className="login__title">
        Рады видеть!
        </p>
        <form onSubmit={handleSubmit} className="login__form-container">
          <span className="login__text">E-mail</span>
          <input required id="emailLogin" name="email" placeholder="E-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} className="login__input"/>
          <span className="login__text input-emailLogin-error login__input-error"> </span>
          <span className="login__text">Пароль</span>
          <input required id="passwordLogin" name="password" type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} className="login__input" />
          <span className="login__text input-passwordLogin-error login__input-error"> </span>
          <button type="submit" className="login__button">Войти</button>
        </form>
        <div className="login__link-container">
          <p className="login__underbottom-text">Ещё не зарегистрированы?</p>
          <Link to="/sign-up" className="login__underbottom-text login__link">Регистрация</Link>
        </div>
      </div>  
    </div>
  )
}

export default Login;