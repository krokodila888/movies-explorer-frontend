import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo_smile.svg';
import './Register.css';

function Register(props) {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const {registerUser} = props;

  function handleSubmit(evt) {
    evt.preventDefault();
    const data = {password, email};
    registerUser(data);
  }
  
  return (
    <>
      <div className='register__background'>
        <div className="register__container">
          <Link to="/">
            <img
              src={logo}
              alt="Логотип"
              className="register__logo"
            />
          </Link>
          <p className="register__title">
            Добро пожаловать!
          </p>
          <form onSubmit={handleSubmit} className="register__form-container">
            <span className="register__text">Имя</span>
            <input className="register__input" id="userNameRegister" name="UserName" type="text" placeholder="Ваше имя" value={userName} onChange={e => setUserName(e.target.value)} />
            <span className="register__text input-userNameRegister-error register__input-error"> </span>
            <span className="register__text">E-mail</span>
            <input className="register__input" id="emailRegister" name="email" type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
            <span className="register__text input-emailRegister-error register__input-error"> </span>
            <span className="register__text">Пароль</span>
            <input className="register__input" id="passwordRegister" name="password" type="password" placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)} />
            <span className="register__text input-emailLRegister-error register__input-error"> </span>
            <button type="submit" onSubmit={handleSubmit} className="register__button">Зарегистрироваться</button>
          </form>
          <div className="register__link-container">
            <p className="register__underbottom-text">Уже зарегистрированы?</p>
            <Link to="/sign-in" className="register__underbottom-text register__link">Войти</Link>
          </div>
        </div>  
      </div>
    </>
  );
}

export default Register;
