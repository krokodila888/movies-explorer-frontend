import React from 'react';
import './Portfolio.css';

function Portfolio() {

  return (
    <section className="portfolio__content">
      <h2 className="portfolio__title">
        Портфолио
      </h2>
      <div className="portfolio__container">
        <a className="portfolio__link" href="https://one-for-study.nomoredomains.icu/sign-in" target="_blank">
          Статичный сайт
        </a>
        <a className="portfolio__link" href="https://one-for-study.nomoredomains.icu/sign-in" target="_blank">
          ↗
        </a>
      </div>
      <div className="portfolio__container">
        <a className="portfolio__link" href="https://krokodila888.github.io/russian-travel-1.1/" target="_blank">
          Адаптивный сайт
        </a>
        <a className="portfolio__link" href="https://krokodila888.github.io/russian-travel-1.1/" target="_blank">
          ↗
        </a>
      </div>
      <div className="portfolio__container">
        <a className="portfolio__link" href="https://krokodila888.github.io/how-to-learn//" target="_blank">
          Одностраничное приложение
        </a>
        <a className="portfolio__link" href="https://krokodila888.github.io/how-to-learn/" target="_blank">
          ↗
        </a>
      </div>
    </section>
  );
}

export default Portfolio;