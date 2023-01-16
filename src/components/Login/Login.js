import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../../images/logo_smile.svg';

function Login (props) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const {handleLogin, loginUser, userErrorMessage, setUserErrorMessage} = props;
  const emailInput = document.getElementById('emailLogin');
  const passwordInput = document.getElementById('passwordLogin');  
  const submitButton = document.getElementById('buttonLogin')
  /*const [isEmailValid, setIsEmailValid] = useState(true);  
  const [isPasswordValid, setIsPasswordValid] = useState(true);*/
  const emailErrorSpan = document.getElementById('emailSpanLogin')
  const passwordErrorSpan = document.getElementById('passwordSpanLogin')
 
  function handleSubmit(e) {
    e.preventDefault();
    const data = {password, email};
    loginUser(data);
    handleLogin();
  }

  useEffect(() => {
    setUserErrorMessage('')
  }, [])

  function validate() {
    if(emailInput && passwordInput && !(emailInput.validationMessage || passwordInput.validationMessage)) 
    return (submitButton.classList.remove('login__button-disabled'), submitButton.classList.add('login__button-active'), submitButton.disabled = false); 
    else if (emailInput && passwordInput) return (submitButton.classList.remove('login__button-active'), submitButton.classList.add('login__button-disabled'), submitButton.disabled = true)
  }
  
  return(
    <section className="login__background">
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
          <input 
            formNoValidate
            required 
            id="emailLogin" 
            name="email" 
            placeholder="E-mail" 
            type="email" 
            value={email} 
            onChange={e => {
              setEmail(e.target.value);
              validate();
              if (emailInput) return (emailErrorSpan.textContent = emailInput.validationMessage);
              /*if (emailInput && emailInput.validity.valid) return setIsEmailValid(true); else return setIsEmailValid(false)*/}}
            className="login__input"/>
          <span className="login__text input-emailLogin-error login__input-error" id='emailSpanLogin'> </span>
          <span className="login__text">Пароль</span>
          <input 
            formNoValidate
            required 
            id="passwordLogin" 
            name="password" 
            type="password" 
            placeholder="Пароль" 
            value={password} 
            onChange={e => {
              setPassword(e.target.value);
              validate();
              if(passwordInput) return (passwordErrorSpan.textContent = passwordInput.validationMessage);
              /*if (passwordInput && passwordInput.validity.valid) return setIsPasswordValid(true); 
            else return setIsPasswordValid(false)*/}}
            className="login__input" />
          <span className="login__text input-passwordLogin-error login__input-error" id='passwordSpanLogin'> </span>
          {userErrorMessage !== '' && <p className="login__text-error">{userErrorMessage}</p>
        }
          <button 
            type="submit"
            id="buttonLogin"
            disabled
            className=/*{(isEmailValid && isPasswordValid) ? "login__button login__button-active" : "login__button login__button-disabled"}*/"login__button login__button-active">Войти</button>
        </form>
        <div className="login__link-container">
          <p className="login__underbottom-text">Ещё не зарегистрированы?</p>
          <Link to="/sign-up" className="login__underbottom-text login__link">Регистрация</Link>
        </div>
      </div>  
    </section>
  )
}

export default Login;