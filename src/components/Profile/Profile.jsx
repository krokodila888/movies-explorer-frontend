import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import HeaderLogin from '../Header/HeaderLogin.jsx';

function Profile (props) {
  const currentUser = React.useContext(CurrentUserContext);
  const {onUpdateUser, exitProfile, userErrorMessage, setUserErrorMessage} = props;
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const nameInput = document.getElementById('userNameProfile');
  const emailInput = document.getElementById('emailProfile');
  const submitButton = document.getElementById('buttonSubmitProfile');
  const nameErrorSpan = document.getElementById('usernameSpanProfile')
  const emailErrorSpan = document.getElementById('emailSpanProfile')

  function handleSubmit(e) {
    e.preventDefault();
    const data = {userName, email};
    onUpdateUser(data);
  }

  function validate() {
    if (emailInput 
      && nameInput 
      && !(emailInput.validationMessage || nameInput.validationMessage)) 
      return (
        submitButton.classList.remove('profile__link-disabled'), 
        submitButton.classList.add('profile__link'), 
        submitButton.disabled = false); 
    else if (emailInput && nameInput) 
      return (
        submitButton.classList.remove('profile__link'), 
        submitButton.classList.add('profile__link-disabled'), 
        submitButton.disabled = true)
  }

  useEffect(() => {
    setUserErrorMessage('')
  }, [])

  return(
    <>
      <HeaderLogin/>
      <section className="profile">
        <form 
          onSubmit={handleSubmit} 
          id="profile__form" 
          className="profile__container">
          <p className="profile__title">
            Привет, {currentUser.name}!
          </p>
          <span className="profile__text profile__span-userName-text">
            {currentUser.name}
          </span>
          <input 
            noValidate 
            required 
            id="userNameProfile" 
            name="userName" 
            minLength='2' 
            maxLength='30' 
            placeholder="Имя"
            type="text" 
            value={userName} 
            onChange={e => {
              setUserName(e.target.value);
              validate();
              if (nameInput) 
                return (nameErrorSpan.textContent = nameInput.validationMessage)
            }} 
            className="profile__text profile__row-container" 
            pattern="[a-zA-ZA-Zа-яЁё\-\s]{2,30}"/>
          <span className="profile__text input-userNameProfile-error profile__input-error"  id="usernameSpanProfile"> </span>
          <span className="profile__text profile__span-email-text">
            {currentUser.email}
          </span>
          <input 
            noValidate 
            required 
            id="emailProfile" 
            name="email" 
            placeholder="E-mail" 
            type="email" 
            value={email} 
            onChange={e => {
              setEmail(e.target.value);
              validate();
              if (emailInput) 
                return (emailErrorSpan.textContent = emailInput.validationMessage)
            }} 
            className="profile__text profile__row-container"/>
          <span 
            className="profile__text input-emailLogin-error profile__input-error" 
            id="emailSpanProfile"> </span>
          <div className="profile__link-container">
            {userErrorMessage !== '' 
            && <p className="profile__text-error">
              {userErrorMessage}
            </p>
            }
            <button 
              type="submit" 
              id="buttonSubmitProfile" 
              className="profile__underbottom-text profile__link" 
              disabled>
                Редактировать
            </button>
            <Link 
              to="/" 
              className="profile__underbottom-text profile__link" 
              onClick={exitProfile} >
                Выйти из аккаунта
            </Link>
          </div>
        </form> 
      </section>
    </>
  )
}

export default Profile;
