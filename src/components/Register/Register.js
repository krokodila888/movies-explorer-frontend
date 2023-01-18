import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo_smile.svg';
import './Register.css';

function Register(props) {

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const {registerUser, userErrorMessage, setUserErrorMessage} = props;
  const nameInput = document.getElementById('userNameRegister');
  const emailInput = document.getElementById('emailRegister');
  const passwordInput = document.getElementById('passwordRegister');
  const submitButton = document.getElementById('buttonRegister')
  const nameErrorSpan = document.getElementById('usernameSpanRegister')
  const emailErrorSpan = document.getElementById('emailSpanRegister')
  const passwordErrorSpan = document.getElementById('passwordSpanRegister')

  function handleSubmit(evt) {
    evt.preventDefault();
    const data = { email, password, userName };
    registerUser(data);
  }

  useEffect(() => {
    setUserErrorMessage('')
  }, [])

  function validate() {
    if(
      emailInput 
      && nameInput 
      && passwordInput 
      && !(emailInput.validationMessage || nameInput.validationMessage || passwordInput.validationMessage)) 
      return (
        submitButton.classList.remove('register__button-disabled'), 
        submitButton.classList.add('register__button-active'), 
        submitButton.disabled = false); 
    else if (
      emailInput 
      && nameInput 
      && passwordInput) 
      return (
        submitButton.classList.remove('register__button-active'), 
        submitButton.classList.add('register__button-disabled'), 
        submitButton.disabled = true)
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
          <form 
            onSubmit={handleSubmit} 
            className="register__form-container">
            <span className="register__text">
              Имя
            </span>
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
                validate();
                if (nameInput) 
                  return (nameErrorSpan.textContent = nameInput.validationMessage);
              }} />
            <span className="register__text input-userNameRegister-error register__input-error" id='usernameSpanRegister'> </span>
            <span className="register__text">
              E-mail
            </span>
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
                validate();
                if (emailInput) 
                  return (emailErrorSpan.textContent = emailInput.validationMessage);
              }} />
            <span 
              className="register__text input-emailRegister-error register__input-error" 
              id='emailSpanRegister'> </span>
            <span className="register__text">
              Пароль
            </span>
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
                validate();
                if(passwordInput) 
                  return (passwordErrorSpan.textContent = passwordInput.validationMessage);
              }} />
            <span 
              className="register__text input-emailLRegister-error register__input-error" 
              id='passwordSpanRegister'> </span>
            {userErrorMessage !== '' && 
              <p className="register__text-error">
                {userErrorMessage}
              </p>
            }
            <button 
              type="submit" 
              onSubmit={handleSubmit} 
              className="register__button register__button-active"
              disabled
              id="buttonRegister">
                Зарегистрироваться
            </button>
          </form>
          <div className="register__link-container">
            <p className="register__underbottom-text">
              Уже зарегистрированы?
            </p>
            <Link 
              to="/sign-in" 
              className="register__underbottom-text register__link">
                Войти
            </Link>
          </div>
        </div>  
      </section>
    </>
  );
}

export default Register;
