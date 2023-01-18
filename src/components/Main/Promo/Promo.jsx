import React from 'react';
import './Promo.css';
import NavTab from '../NavTab/NavTab.jsx';

function Promo() {

  return (
    <section className="promo__content">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <NavTab/>
    </section>
  );
}  

export default Promo; 
