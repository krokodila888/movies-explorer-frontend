import React from 'react';
import './Portfolio.css';

function Portfolio() {

  return (
    <div className="portfolio__content">
      <h2 className="portfolio__title">Портфолио</h2>
      <div className="portfolio__container">
        <a className="portfolio__link" href="https://one-for-study.nomoredomains.icu/sign-in">Статичный сайт</a>
        <a className="portfolio__link" href="https://one-for-study.nomoredomains.icu/sign-in">↗</a>
      </div>
      <div className="portfolio__container">
        <a className="portfolio__link" href="https://krokodila888.github.io/russian-travel-1.1/">Адаптивный сайт</a>
        <a className="portfolio__link" href="https://krokodila888.github.io/russian-travel-1.1/">↗</a>
      </div>
      <div className="portfolio__container">
        <a className="portfolio__link" href="https://krokodila888.github.io/how-to-learn//">Одностраничное приложение</a>
        <a className="portfolio__link" href="https://krokodila888.github.io/how-to-learn/">↗</a>
      </div>
    </div>
  );
}

export default Portfolio;