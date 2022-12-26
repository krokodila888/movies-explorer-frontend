import React from 'react';
import backgroundLogo from '../../../images/text__COLOR_landing-logo.svg';
import './Promo.css';

function Promo() {

  return (
    <div className="promo__content">
      <img alt="Project background" className="promo__background-logo" src={backgroundLogo} />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    </div>
  );
}  

export default Promo; 
