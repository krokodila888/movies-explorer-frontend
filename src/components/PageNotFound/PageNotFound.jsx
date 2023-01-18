import React from 'react';
import { useNavigate } from "react-router-dom";
import './PageNotFound.css';

function PageNotFound () {

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <section className="pageNotFound">
      <h3 className="pageNotFound__title">404</h3>
      <p className="pageNotFound__text">
        Страница не найдена
      </p>
      <p 
        className="pageNotFound__text pageNotFound__link" 
        onClick={goBack} >
          Назад
      </p>
    </section>
  )
}

export default PageNotFound;
