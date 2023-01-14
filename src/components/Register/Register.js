import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo_smile.svg';
import './Register.css';

function Register(props) {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const {registerUser, userErrorMessage} = props;
  const nameInput = document.getElementById('userNameRegister');
  const emailInput = document.getElementById('emailRegister');
  const passwordInput = document.getElementById('passwordRegister');
  const button = document.getElementById('buttonRegister')
  const [isNameValid, setIsNameValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);  
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const nameErrorSpan = document.getElementById('usernameSpanRegister')
  const emailErrorSpan = document.getElementById('emailSpanRegister')
  const passwordErrorSpan = document.getElementById('passwordSpanRegister')

  function handleSubmit(evt) {
    evt.preventDefault();
    const data = { email, password, userName };
    registerUser(data);
  }
  
  return (
    <>
      <section className='register__background'>
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
            <input 
              className="register__input" 
              required
              pattern="[a-zA-ZA-Zа-яЁё\-\s]{2,30}"
              id="userNameRegister" 
              minLength='2' 
              maxLength='30' 
              name="UserName" 
              type="text" 
              placeholder="Ваше имя" 
              value={userName} 
              onChange={e => {
                setUserName(e.target.value);
                if (nameInput) return (nameErrorSpan.textContent = nameInput.validationMessage);
                if (nameInput && nameInput.validity.valid) return setIsNameValid(true);
                else return setIsNameValid(false)}} />
            <span className="register__text input-userNameRegister-error register__input-error" id='usernameSpanRegister'> </span>
            <span className="register__text">E-mail</span>
            <input 
              required
              className="register__input" 
              id="emailRegister" 
              name="email" 
              type="email" 
              placeholder="E-mail" 
              value={email} 
              onChange={e => {
                setEmail(e.target.value);
                if (emailInput) return (emailErrorSpan.textContent = emailInput.validationMessage);
                if (emailInput && emailInput.validity.valid) return setIsEmailValid(true); 
                else return setIsEmailValid(false)}} />
            <span className="register__text input-emailRegister-error register__input-error" id='emailSpanRegister'> </span>
            <span className="register__text">Пароль</span>
            <input 
              required
              className="register__input" 
              id="passwordRegister" 
              name="password" 
              type="password" 
              placeholder="Пароль" 
              value={password} 
              onChange={e => {
                setPassword(e.target.value); 
                if(passwordInput) return (passwordErrorSpan.textContent = passwordInput.validationMessage);
                if (passwordInput && passwordInput.validity.valid) return setIsPasswordValid(true); 
                else return setIsPasswordValid(false)}} />
            <span className="register__text input-emailLRegister-error register__input-error" id='passwordSpanRegister'> </span>
            {userErrorMessage !== '' && <p className="register__text-error">{userErrorMessage}</p>}
            <button 
              type="submit" 
              onSubmit={handleSubmit} 
              className={(isNameValid && isEmailValid && isPasswordValid) ? "register__button register__button-active" : " register__button register__button-disabled"}
              id="buttonRegister">Зарегистрироваться
            </button>
          </form>
          <div className="register__link-container">
            <p className="register__underbottom-text">Уже зарегистрированы?</p>
            <Link to="/sign-in" className="register__underbottom-text register__link">Войти</Link>
          </div>
        </div>  
      </section>
    </>
  );
}

export default Register;
