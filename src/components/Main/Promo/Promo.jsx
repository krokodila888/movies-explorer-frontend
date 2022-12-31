import React from 'react';
import backgroundLogo from '../../../images/main_pic.svg';
import './Promo.css';
import NavTab from '../NavTab/NavTab.jsx';

function Promo() {

  return (
    <div className="promo__content">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      <NavTab/>
    </div>
  );
}  

export default Promo; 

//  <img alt="Project background" className="promo__background-logo" src={backgroundLogo} />