import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound () {

  return (
    <section className="pageNotFound">
      <h3 className="pageNotFound__title">404</h3>
      <p className="pageNotFound__text">
       Страница не найдена
      </p>
      <Link className="pageNotFound__text pageNotFound__link" to="/">Назад</Link>
    </section>
  )
}

export default PageNotFound;