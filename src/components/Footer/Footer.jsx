
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className='footer__text-block'>
            <p className="footer__text">&copy; 2022</p>
          <div className='footer__row'>
            <a className="footer__text footer__link" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
            <a className="footer__text footer__link" href="https://github.com">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
  
export default Footer;